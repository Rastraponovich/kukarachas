import { NextPage } from "next"
import { memo } from "react"
import AmericanKukarachaIcon from "shared/ui/icons/AmericanKukarachaIcon"
import FastFootKukarachaIcon from "shared/ui/icons/FastFootKukarachaIcon"
import FieldKukarachaIcon from "shared/ui/icons/FieldKukarachaIcon"
import TurkishKukarachaIcon from "shared/ui/icons/TurkishKukarachaIcon"
import { Layout } from "widgets/layout"

const __tracks__ = [
    { id: 1, firstLetter: "с", lastLetter: "ф" },
    { id: 2, firstLetter: "т", lastLetter: "и" },
    { id: 3, firstLetter: "а", lastLetter: "н" },
    { id: 4, firstLetter: "р", lastLetter: "и" },
    { id: 5, firstLetter: "т", lastLetter: "ш" },
]

const GamePage: NextPage = () => {
    return (
        <Layout color="bg-[#E1BC73]">
            <div className="flex space-x-7">
                <svg
                    width="73"
                    height="72"
                    viewBox="0 0 73 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.0684 51.82C11.3373 51.82 7.75893 50.1167 5.1206 47.0848C2.48228 44.0529 1.00008 39.9407 1.00008 35.6529C1.00008 31.3651 2.48228 27.2529 5.1206 24.221C7.75893 21.1891 11.3373 19.4858 15.0684 19.4858H29.1368C29.1368 19.4858 48.3049 19.4858 66.7344 1.74232C67.1443 1.35251 67.642 1.10425 68.1697 1.02635C68.6975 0.948452 69.2336 1.0441 69.7159 1.30221C70.1983 1.56032 70.607 1.97029 70.8948 2.48458C71.1826 2.99887 71.3376 3.59639 71.3418 4.20781V67.098C71.3376 67.7094 71.1826 68.3069 70.8948 68.8212C70.607 69.3355 70.1983 69.7455 69.7159 70.0036C69.2336 70.2617 68.6975 70.3574 68.1697 70.2795C67.642 70.2016 67.1443 69.9533 66.7344 69.5635C48.3049 51.82 29.1368 51.82 29.1368 51.82H15.0684Z"
                        fill="white"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <p className="p-2.5 bg-white rounded-xl text-xl leading-[23px] font-normal">
                    В предыдущем раунде победу разделили между собой Усач и Строгач, к сожалению
                    Спринтер вышел из гонки. Он повредил ногу и не сможет заверщить сегодняшние
                    соревнования.
                </p>
            </div>
            <section className="mt-2.5 bg-white rounded-2xl pl-10 pr-2.5 py-10 text-2xl leading-7">
                <ul className="flex flex-col ">
                    {__tracks__.map((track) => (
                        <Track
                            key={track.id}
                            firstLetter={track.firstLetter}
                            lastLetter={track.lastLetter}
                        />
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export default GamePage

interface TrackProps {
    firstLetter: string
    lastLetter: string
}
const Track = memo(({ firstLetter, lastLetter }: TrackProps) => {
    return (
        <li className="flex items-center space-x-2.5 text-center  ">
            <span className="uppercase">{firstLetter}</span>
            {/* <div className=" h-[61px] w-[55px]  relative">{kukaracha}</div> */}
            <FieldKukarachaIcon className="h-[61px] w-[55px] rotate-90 fill-rose-600" />
            <span className="grow border-4 border-dashed dashed border-[#99D69D]"></span>
            <span className="uppercase">{lastLetter}</span>
        </li>
    )
})

Track.displayName = "Track"
