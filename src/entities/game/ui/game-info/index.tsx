import clsx from "clsx"
import { EKukarachaType, TKukaracha } from "models/kukaracha/lib"
import { memo, useCallback, useEffect, useRef, useState } from "react"
import { Button } from "shared/ui/button"
import { SpriteIcons } from "shared/ui/icons"
import { Modal } from "shared/ui/modal"

export const GameInfo = () => {
    const [isOpened, setIsOpened] = useState(true)
    const [isRaceEnded, setIsRaceEnded] = useState(true)
    const [selected, setSelected] = useState<number | null>(null)
    const [players, setPlayers] = useState(kukarachasInRace)
    const toggleIsOpened = useCallback(() => {
        setIsOpened(false)
    }, [isOpened])

    useEffect(() => {
        if (isRaceEnded) {
            setPlayers([...players].sort((a, b) => a.place - b.place))
        } else {
            setPlayers(kukarachasInRace)
        }
    }, [isRaceEnded])

    const handleClick = useCallback(
        (id: number) => {
            if (!isRaceEnded) {
                if (id === selected) return setSelected(null)
                setSelected(id)
            }
        },
        [selected, isRaceEnded]
    )
    return (
        <Modal isOpened={isOpened} onClose={toggleIsOpened} title="Начинаем забег">
            <div className="flex flex-col space-y-2.5  text-2xl leading-7 ">
                <p className="text-sm leading-[14px]">
                    Среди участников чувствуется напряжение и желание доползти до финиша Кто же
                    придет первым? Узнаем только после забега, готовы? за кого болеете?
                </p>

                <ul>
                    {players.map((kukaracha) => (
                        <KukarachaListItem
                            key={kukaracha.id}
                            selected={
                                !isRaceEnded ? selected === kukaracha.id : kukaracha.place === 1
                            }
                            kukaracha={kukaracha}
                            onClick={handleClick}
                            isRaceEnded={isRaceEnded}
                        />
                    ))}
                </ul>
                <Button className="w-full py-2.5">начать соревнование!</Button>
            </div>
        </Modal>
    )
}

const kukarachasInRace: Array<IKukarachaRace> = [
    {
        id: 1,
        type: { id: 1, name: EKukarachaType.american, value: "american" },
        color: "black",
        age: 18,
        name: "sample1",
        place: 2,
        finished: true,
        time: 32,
    },
    {
        id: 2,
        type: { id: 2, name: EKukarachaType.turkish, value: "turkish" },
        color: "blue",
        age: 18,
        name: "sample2",
        place: 3,
        finished: true,

        time: 44,
    },
    {
        id: 3,
        type: { id: 3, name: EKukarachaType.sprinter, value: "sprinter" },
        color: "yellow",
        age: 18,
        name: "sample3",
        place: 1,
        finished: true,

        time: 29,
    },
    {
        id: 4,
        type: { id: 4, name: EKukarachaType.field, value: "field" },
        color: "green",
        age: 18,
        name: "sample4sample4sample4",
        place: 4,
        finished: false,

        time: null,
    },
    {
        id: 5,
        type: { id: 5, name: EKukarachaType.fastfoot, value: "fastfoot" },
        color: "orange",
        age: 18,
        name: "sample5",
        place: 5,
        finished: false,

        time: null,
    },
]

interface IKukarachaRace extends TKukaracha {
    place?: number
    finished?: boolean
    time?: number
}

interface KukarachaListItemProps {
    selected: boolean
    onClick(id: number): void
    kukaracha: IKukarachaRace
    isRaceEnded: boolean
}
const KukarachaListItem = memo(
    ({ selected, onClick, kukaracha, isRaceEnded }: KukarachaListItemProps) => {
        return (
            <li
                onClick={() => onClick(kukaracha.id)}
                className={clsx("rounded-lg flex items-center  p-2.5", selected && "bg-[#99D69D]")}
            >
                <SpriteIcons
                    style={{ color: kukaracha.color }}
                    name={kukaracha.type.value}
                    className="h-6 w-6 mr-10"
                />
                <span
                    className={clsx(
                        "grow first-letter:uppercase ",
                        isRaceEnded && "truncate max-w-[40%]"
                    )}
                >
                    {kukaracha.name}
                </span>
                {isRaceEnded &&
                    (kukaracha.finished ? (
                        <div
                            className={clsx(
                                "flex  text-left",
                                kukaracha.place === 2 && "text-xl leading-6",
                                kukaracha.place === 3 && "text-base leading-4",
                                kukaracha.place === 4 && "text-sm leading-3.5",
                                kukaracha.place === 5 && "text-sm leading-3.5"
                            )}
                        >
                            <span className="after:content-['-'] after:mx-1">
                                {kukaracha.place} Место
                            </span>
                            <span>{kukaracha.time}с</span>
                        </div>
                    ) : (
                        <div className={clsx("flex justify-start ", "text-sm leading-3.5")}>
                            <span>тут смешная шутка</span>
                        </div>
                    ))}
            </li>
        )
    }
)

KukarachaListItem.displayName = "KukarachaListItem"
