import { useEvent } from "effector-react/scope"
import { raceModel } from "entities/game"
import { GameInfo } from "features/game-ifno/ui"
import { NextPage } from "next"
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react"
import { Button } from "shared/ui/button"
import { MegaphoneIcon, SpriteIcons } from "shared/ui/icons"
import { Layout } from "widgets/layout"

const GamePage: NextPage = () => {
    const handleStart = useEvent(raceModel.events.startedRaceButtonClicked)

    const tracks = raceModel.selectors.useTrackList()
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
                    {tracks.map((track) => (
                        <Track key={track} id={track} />
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

                        <Button onClick={handleStart}>start</Button>
                    </div>

                    <GameInfo />
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
    id: number
}
const Track = memo(({ id }: TrackProps) => {
    const track = raceModel.selectors.useGetTrack(id)

    const { lastLetter, firstLetter, favorite } = track
    const { value, type, color } = track.kukaracha

    const [progress, setProgress] = useState(value)
    const isStarted = raceModel.selectors.useRaceIsStarted()

    useEffect(() => {
        if (isStarted) {
            setProgress(0)
            const timer = setInterval(() => {
                if (progress < 100)
                    return setProgress(progress + Math.floor(Math.random() * (3 - 1 + 1) + 1))
            }, 300)

            return () => clearInterval(timer)
        }
    }, [progress, isStarted])

    useEffect(() => {
        console.log("hook3")

        if (!isStarted) setProgress(0)
    }, [isStarted])

    return (
        <li className="flex items-center space-x-2.5 text-center   ">
            <span className="uppercase">{firstLetter}</span>
            <Bar value={progress} name={type.value} color={color} favorite={favorite} />

            <span className="uppercase">{lastLetter}</span>
        </li>
    )
})

Track.displayName = "Track"

interface BarProps extends InputHTMLAttributes<HTMLInputElement> {
    favorite: boolean
}
const Bar = ({ favorite, name, color, ...props }: BarProps) => {
    const ref = useRef<SVGSVGElement>(null)
    const [speed, setSpeed] = useState(0)
    const [positions, setPositions] = useState([])
    const [speeds, setSpeeds] = useState([0])

    const [avgSpeed, setAvgSpeed] = useState(0)

    useEffect(() => {
        const current = ref.current.getClientRects()
        const result =
            positions.length > 0 ? Math.floor(current[0].x - positions[positions.length - 1]) : 0
        setSpeeds([...speeds, result])
        setPositions([...positions, current[0].x])

        return () => setSpeed(0)
    }, [props.value])

    useEffect(() => {
        const count = positions.length
        const speedSummary = speeds.reduce((acc, val) => acc + val, 0)

        setAvgSpeed(Math.floor(speedSummary / count))
    }, [positions])

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
            <span className="text-xs absolute top-0 left-0 z-50">
                текущая скорость {speeds[speeds.length - 1]}px / avg :{avgSpeed}px
            </span>
            {favorite && (
                <div
                    className="self-center absolute bg-[#C4C4C4] rounded-lg py-2.5 text-sm leading-[14px] overflow-hidden w-0 -mr-7 flex justify-end "
                    style={{ width: `calc(${props.value}% - 28px)` }}
                >
                    <Button className=" py-1.5 px-[15px] mr-7">ткнуть палкой</Button>
                </div>
            )}
            <SpriteIcons
                className="h-[61px] w-[55px] rotate-90 fill-rose-600 absolute left-4  transition-kuka duration-300 "
                style={{ color, left: `${props.value}%` }}
                name={name}
                ref={ref}
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
