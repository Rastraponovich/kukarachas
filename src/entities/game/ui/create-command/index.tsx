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

    const handleAddKukarachaToList = useEvent(kukarachaModel.events.submitKukaracha)

    const allowSubmit = kukarachaModel.selectors.useAllowSubmitTeam()

    return (
        <div className="px-10 pt-[51.5px] pb-10 flex flex-col space-y-[21.5px] text-2xl font-normal bg-[#A8B8E1]">
            <div className="flex justify-between items-center">
                <h2 className="text-white font-bold text-4xl leading-[37px] first-letter:uppercase">
                    набор участников
                </h2>
                <button className="bg-white py-2.5 px-10 rounded-lg text-[#00990B] uppercase border border-black">
                    ru
                </button>
            </div>
            <div className="grid grid-cols-3 gap-x-6 ">
                <form className="flex flex-col space-y-6 rounded-2xl bg-white p-10">
                    <Input
                        caption="имя таракана"
                        placeholder="кактой-то тескт"
                        onChange={handleChange}
                        value={currentKukaracha.name}
                        id="name"
                    />
                    <Input
                        placeholder="кактой-то тескт"
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

                    <Button type="button" onClick={handleAddKukarachaToList} disabled={allowSubmit}>
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
                <div className="flex flex-col justify-center bg-white px-2.5 grow  rounded-2xl text-center  text-2xl leading-7">
                    <KukarachaList
                        items={kukarachas}
                        selected={selectedKukaracha?.id}
                        onSelect={hanldeSelectKukarachaInList}
                    />
                </div>
            </div>
        </div>
    )
}
