import { raceModel } from "entities/game"
import { memo, useState, useEffect, InputHTMLAttributes, useRef } from "react"
import { Button } from "shared/ui/button"
import { SpriteIcons } from "shared/ui/icons"
import { selectors } from "../model"

export const Tracks = () => {
    const tracks = raceModel.selectors.useTrackList()
    const isStarted = selectors.useRaceIsStarted()

    return (
        <ul className="flex flex-col ">
            {tracks.map((track) => (
                <Track key={track} id={track} isStarted={isStarted} />
            ))}
        </ul>
    )
}

interface TrackProps {
    id: number
    isStarted: boolean
}
const Track = memo(({ id, isStarted }: TrackProps) => {
    const track = raceModel.selectors.useGetTrack(id)

    const { lastLetter, firstLetter, favorite } = track
    const { value, type, color } = track.kukaracha

    const [progress, setProgress] = useState(value)

    useEffect(() => {
        if (isStarted) {
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
            <Kukaracha value={progress} name={type.value} color={color} favorite={favorite} />

            <span className="uppercase">{lastLetter}</span>
        </li>
    )
})

Track.displayName = "Track"

interface KukarachaProps extends InputHTMLAttributes<HTMLInputElement> {
    favorite: boolean
}
const Kukaracha = memo(({ favorite, name, color, ...props }: KukarachaProps) => {
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
                className="slider-thumb w-full appearance-none bg-track-pattern bg-center  bg-repeat-x"
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
})

Kukaracha.displayName = "Kukaracha"
