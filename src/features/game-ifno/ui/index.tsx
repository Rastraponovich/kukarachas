import clsx from "clsx"
import { useEvent } from "effector-react/scope"
import { EKukarachaType, TKukaracha } from "entities/kukaracha/lib"
import { memo, useCallback, useEffect, useState } from "react"
import { Button } from "shared/ui/button"
import { SpriteIcons } from "shared/ui/icons"
import { Modal } from "shared/ui/modal"
import { selectors, events } from "../model"

export const GameInfo = () => {
    const isOpenedWindow = selectors.useIsOpenedWindow()
    const selectedKukaracha = selectors.useSelectedKukarachaId()
    const isRaceEnded = selectors.useIsRaceEnded()
    const kukarachasInRace = selectors.useKukarachasInRace()
    const toggleIsOpened = useEvent(events.toggleOpenedWindow)

    return (
        <Modal isOpened={isOpenedWindow} onClose={toggleIsOpened} title="Начинаем забег">
            <div className="flex flex-col space-y-2.5  text-2xl leading-7 ">
                <p className="text-sm leading-[14px]">
                    Среди участников чувствуется напряжение и желание доползти до финиша Кто же
                    придет первым? Узнаем только после забега, готовы? за кого болеете?
                </p>

                <ul>
                    {kukarachasInRace.map((kukaracha) => (
                        <KukarachaListItem
                            key={kukaracha.id}
                            selected={
                                !isRaceEnded
                                    ? selectedKukaracha.id === kukaracha.id
                                    : kukaracha.place === 1
                            }
                            kukaracha={kukaracha}
                            isRaceEnded={isRaceEnded}
                        />
                    ))}
                </ul>
                <Button className="w-full py-2.5">начать соревнование!</Button>
            </div>
        </Modal>
    )
}

interface IKukarachaRace extends TKukaracha {
    place?: number
    finished?: boolean
    time?: number
}

interface KukarachaListItemProps {
    selected: boolean
    kukaracha: IKukarachaRace
    isRaceEnded: boolean
}
const KukarachaListItem = memo(({ selected, kukaracha, isRaceEnded }: KukarachaListItemProps) => {
    const handleClick = useEvent(events.selectKukarachaId)

    return (
        <li
            onClick={() => handleClick(kukaracha)}
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
                    <KukarachaStats place={kukaracha.place} time={kukaracha.time} />
                ) : (
                    <span className="flex justify-start text-sm leading-3.5">
                        тут смешная шутка
                    </span>
                ))}
        </li>
    )
})

KukarachaListItem.displayName = "KukarachaListItem"

interface KukarachaStatsProps {
    place: number
    time: number
}
const KukarachaStats = memo(({ place, time }: KukarachaStatsProps) => {
    const placeStyles = {
        1: null,
        2: "text-xl leading-6",
        3: "text-base leading-4",
        4: "text-sm leading-3.5",
        5: "text-sm leading-3.5",
    }

    return (
        <div className={clsx("flex  text-left", placeStyles[place])}>
            <span className="after:content-['-'] after:mx-1">{place} Место</span>
            <span>{time}с</span>
        </div>
    )
})
