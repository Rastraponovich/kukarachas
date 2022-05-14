import clsx from "clsx"
import { useEvent } from "effector-react/scope"
import { KukarachaList } from "entities/kukaracha"
import { Button } from "shared/ui/button"
import { events, selectors } from "../model"

export const KukarachasList = () => {
    const kukarachas = selectors.useCommand()

    const selectedKukaracha = selectors.useSelectedKukaracha()

    const hanldeSelectKukarachaInList = useEvent(events.selectKukaracha)
    const handleAddedMoreKukarachasClicked = useEvent(events.addedKukarachaButtonClicked)

    return (
        <div
            className={clsx(
                "flex flex-col bg-white p-2.5 grow  rounded-2xl text-center text-2xl leading-7",
                kukarachas.length === 0 ? "justify-center space-y-10" : "justify-between"
            )}
        >
            {kukarachas.length === 0 && (
                <span className="text-center ">
                    Команда пуста, добавьте участников соревнования
                </span>
            )}
            {kukarachas.length > 0 && (
                <KukarachaList
                    items={kukarachas}
                    selected={selectedKukaracha}
                    onSelect={hanldeSelectKukarachaInList}
                />
            )}
            {kukarachas.length < 5 && (
                <>
                    <Button className="px-5 mb-[30px] " onClick={handleAddedMoreKukarachasClicked}>
                        добавить еще участника
                    </Button>
                </>
            )}
        </div>
    )
}
