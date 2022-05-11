import clsx from "clsx"
import { useEvent } from "effector-react/scope"
import { KukarachaImage, kukarachaModel } from "models/kukaracha"
import { KukarachaList } from "models/kukaracha/ui/kukaracha-list"
import { Button } from "shared/ui/button"
import { ColorPicker } from "shared/ui/color-picker"
import { Input } from "shared/ui/input"
import { Select } from "shared/ui/select"

export const CreateCommand = () => {
    const kukarachas = kukarachaModel.selectors.useKukarachas()

    const kukarachasTypes = kukarachaModel.selectors
        .useKukarachasTypes()
        .filter((item) => item.id !== 0)
    const currentKukaracha = kukarachaModel.selectors.useCurrentKukaracha()
    const selectedKukaracha = kukarachaModel.selectors.useSelectedKukaracha()

    const handleChange = useEvent(kukarachaModel.events.setKukaracha)
    const handleSelectType = useEvent(kukarachaModel.events.selectType)
    const hanldeSelectKukarachaInList = useEvent(kukarachaModel.events.selectKukaracha)
    const handleAddedMoreKukarachasClicked = useEvent(
        kukarachaModel.events.addedKukarachaButtonClicked
    )

    const handleAddKukarachaToList = useEvent(kukarachaModel.events.submitKukaracha)

    const allowSubmit = kukarachaModel.selectors.useAllowSubmitTeam()
    const canSubmitKukaracha = kukarachaModel.selectors.useCanSubmitKukaracha()
    //px-10 pt-[51.5px] pb-10
    return (
        <section className=" flex flex-col space-y-[21.5px] text-2xl font-normal bg-[#A8B8E1]">
            <div className="grid grid-cols-3 gap-x-6 ">
                <form
                    className="flex flex-col space-y-6 rounded-2xl bg-white p-10"
                    onSubmit={handleAddKukarachaToList}
                >
                    <Input
                        caption="имя таракана"
                        placeholder="кактой-то тескт"
                        onChange={handleChange}
                        value={currentKukaracha.name}
                        id="name"
                        required
                        minLength={1}
                    />
                    <Input
                        placeholder="кактой-то тескт"
                        required
                        min={18}
                        max={75}
                        caption="возраст"
                        onChange={handleChange}
                        value={currentKukaracha.age}
                        id="age"
                    />
                    <Select
                        caption="порода таракана"
                        items={kukarachasTypes}
                        value={currentKukaracha.type}
                        onChange={handleSelectType}
                    />

                    <ColorPicker
                        caption="цвет"
                        type="color"
                        id="color"
                        value={currentKukaracha.color}
                        onChange={handleChange}
                    />

                    <Button type="submit" disabled={!canSubmitKukaracha}>
                        Утвердить участника
                    </Button>
                </form>
                <div className="flex flex-col justify-between rounded-2xl bg-white p-10">
                    <KukarachaImage
                        type={currentKukaracha.type.value}
                        color={currentKukaracha.color}
                    />
                    <Button className="self-center first-letter:uppercase" disabled={!allowSubmit}>
                        утвердить комманду
                    </Button>
                </div>
                <div
                    className={clsx(
                        "flex flex-col bg-white p-2.5 grow justify-between rounded-2xl text-center text-2xl leading-7",
                        kukarachas.length === 0 && "justify-center space-y-10"
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
                            <Button
                                className="px-5 mb-[30px]"
                                onClick={handleAddedMoreKukarachasClicked}
                            >
                                добавить еще участника
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
