import { useEvent, useStore } from "effector-react/scope"
import { KukarachaImage, kukarachaModel } from "models/kukaracha"
import { KukarachaList } from "models/kukaracha/ui/kukaracha-list"
import { Button } from "shared/ui/button"
import { Input } from "shared/ui/input"
import { Select } from "shared/ui/select"

export const CreateCommand = () => {
    const kukarachas = kukarachaModel.selectors.useKukarachas()
    const kukarachasColors = kukarachaModel.selectors
        .useKukarachasColors()
        .filter((item) => item.id !== 0)
    const kukarachasTypes = kukarachaModel.selectors
        .useKukarachasTypes()
        .filter((item) => item.id !== 0)
    const currentKukaracha = kukarachaModel.selectors.useCurrentKukaracha()
    const selectedKukaracha = kukarachaModel.selectors.useSelectedKukaracha()

    const handleChange = useEvent(kukarachaModel.events.setKukaracha)
    const handleSelectColor = useEvent(kukarachaModel.events.selectColor)
    const handleSelectType = useEvent(kukarachaModel.events.selectType)
    const hanldeSelectKukarachaInList = useEvent(kukarachaModel.events.selectKukaracha)

    const handleAddKukarachaToList = useEvent(kukarachaModel.events.submitKukaracha)

    const allowSubmit = kukarachaModel.selectors.useAllowSubmitTeam()

    return (
        <div className="px-44 pt-32 pb-48 flex flex-col space-y-[177px] text-2xl font-bold">
            <div className="grid grid-cols-3 gap-x-20 ">
                <div className="flex flex-col justify-between space-y-4">
                    <Input
                        caption="имя таракана"
                        onChange={handleChange}
                        value={currentKukaracha.name}
                        id="name"
                    />
                    <Input
                        caption="возраст таракана"
                        onChange={handleChange}
                        value={currentKukaracha.age}
                        id="age"
                    />
                    <Select
                        caption="вид таракана"
                        items={kukarachasTypes}
                        value={currentKukaracha.type}
                        onChange={handleSelectType}
                    />
                    <Select
                        caption="цвет"
                        items={kukarachasColors}
                        value={currentKukaracha.color}
                        onChange={handleSelectColor}
                    />
                    <Button onClick={handleAddKukarachaToList} disabled={allowSubmit}>
                        добавить
                    </Button>
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="first-letter:uppercase">фотография таракана</span>
                    <KukarachaImage image={currentKukaracha.image} />
                </div>
                <div className="flex flex-col space-y-2 ">
                    <span className="first-letter:uppercase after:content-[':']">
                        состав команды
                    </span>
                    <KukarachaList
                        items={kukarachas}
                        selected={selectedKukaracha?.id}
                        onSelect={hanldeSelectKukarachaInList}
                    />
                </div>
            </div>
            <Button
                size="big"
                className="self-center first-letter:uppercase"
                disabled={!allowSubmit}
            >
                утвердить комманду
            </Button>
        </div>
    )
}
