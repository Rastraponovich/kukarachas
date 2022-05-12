import { NextPage } from "next"
import { InputHTMLAttributes, memo, useEffect, useState } from "react"
import { Button } from "shared/ui/button"
import { MegaphoneIcon, SpriteIcons } from "shared/ui/icons"
import { Modal } from "shared/ui/modal"
import { Layout } from "widgets/layout"

const __tracks__ = [
    { id: 1, firstLetter: "с", lastLetter: "ф", value: 0, name: "turkish", color: "blue" },
    { id: 2, firstLetter: "т", lastLetter: "и", value: 0, name: "american", color: "cyan" },
    { id: 3, firstLetter: "а", lastLetter: "н", value: 0, name: "sprinter", color: "orange" },
    { id: 5, firstLetter: "т", lastLetter: "ш", value: 0, name: "fastfoot", color: "black" },
    { id: 4, firstLetter: "р", lastLetter: "и", value: 0, name: "field", color: "red" },
]

const GamePage: NextPage = () => {
    const [range, setRange] = useState(0)
    const [starting, setStarting] = useState(false)
    return (
        <Layout color="bg-[#E1BC73]">
            <div className="flex">
                <MegaphoneIcon className="w-[73px] h-[77px] mr-7" />

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
                            name={track.name}
                            color={track.color}
                            value={range}
                            starting={starting}
                        />
                    ))}
                </ul>
                <div className="flex justify-between">
                    <div className="flex flex-col text-sm mt-3 space-y-3">
                        <div>
                            <h2 className="first-letter:uppercase text-xl leading-6 mb-3">
                                лайв стрим
                            </h2>
                            <table className="table-auto">
                                <tbody>
                                    <TableRow />
                                    <TableRow />
                                    <TableRow />
                                    <TableRow />
                                    <TableRow />
                                </tbody>
                            </table>
                        </div>

                        <Button onClick={() => setStarting((prev) => !prev)}>start</Button>
                        {/* <input
                    type="range"
                    name=""
                    id=""
                    value={range}
                    min={0}
                    step={1}
                    max={100}
                    onChange={(e) => setRange(Number(e.target.value))}
                /> */}
                    </div>

                    <Modal>
                        <div>еба еба</div>
                    </Modal>
                    <div className="flex flex-col space-y-2.5 px-10 justify-center text-2xl leading-7">
                        <Button
                            disabled
                            className="w-full px-10 py-2.5 first-letter:uppercase rounded-lg"
                        >
                            повторить забег
                        </Button>
                        <Button
                            disabled
                            className="w-full px-10 py-2.5 first-letter:uppercase rounded-lg"
                        >
                            поменять состав
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default GamePage

interface TrackProps {
    firstLetter: string
    lastLetter: string
    value: number
    starting: boolean
    name: string
    color: string
}
const Track = memo(({ firstLetter, lastLetter, value, starting, name, color }: TrackProps) => {
    const [progress, setProgress] = useState(value)
    const [isStarted, setIsStarted] = useState(starting)

    useEffect(() => {
        console.log("hook1")

        if (starting) setIsStarted(true)
    }, [starting])

    // useEffect(() => {
    //     console.log("hook2")

    //     if (isStarted) {
    //         const timer = setInterval(() => {
    //             if (progress < 100)
    //                 return setProgress(progress + Math.floor(Math.random() * (3 - 1 + 1) + 1))
    //             return setIsStarted(false)
    //         }, 300)

    //         return () => clearInterval(timer)
    //     }
    //     return () => setProgress(0)
    // }, [progress, isStarted])

    // useEffect(() => {
    //     console.log("hook3")

    //     if (!isStarted) setProgress(0)
    // }, [isStarted])
    return (
        <li className="flex items-center space-x-2.5 text-center   ">
            <span className="uppercase">{firstLetter}</span>
            <Bar value={progress} name={name} color={color} />

            {/* <SpriteIcons
                className="h-[61px] w-[55px] rotate-90 fill-rose-600 absolute left-4"
                style={{ color: "orange", left: `${value}%` }}
                name="sprinter"
            /> */}
            {/* <span className="grow border-4 border-dashed dashed border-[#99D69D]"></span> */}
            <span className="uppercase">{lastLetter}</span>
        </li>
    )
})

Track.displayName = "Track"

interface BarProps extends InputHTMLAttributes<HTMLInputElement> {}
const Bar = ({ name, color, ...props }: BarProps) => {
    return (
        <label className="h-[61px] relative flex grow w-full px-7">
            <input
                {...props}
                id="balance"
                type="range"
                min="0"
                max="100"
                step="1"
                title="Kukaracha"
                readOnly
                // style={{ backgroundPosition: `0px ${currentStep * 15}px` }}
                className="slider-thumb w-full appearance-none bg-track-pattern bg-center  bg-repeat-x"
                // onChange={handleChangeBalance}
                // onMouseDown={handleMouseDown}
                // onMouseUp={handleMouseUp}
            />
            <SpriteIcons
                className="h-[61px] w-[55px] rotate-90 fill-rose-600 absolute left-4  transition-kuka duration-300 "
                style={{ color, left: `${props.value}%` }}
                name={name}
            />
        </label>
    )
}

const TableRow = memo(() => {
    return (
        <tr className="">
            <td className="px-1">Усач</td>

            <td className="px-1">
                <span>позиция в гонке : 1</span>
            </td>
            <td className="px-1">
                <span>средняя скорость: 2px</span>
            </td>
            <td className="px-1">
                <span>пикселей с секунду 1.2px</span>
            </td>
        </tr>
    )
})

TableRow.displayName = "TableRow"
