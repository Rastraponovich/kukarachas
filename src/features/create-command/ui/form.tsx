import { useEvent } from "effector-react/scope"
import { Button } from "shared/ui/button"
import { ColorPicker } from "shared/ui/color-picker"
import { Input } from "shared/ui/input"
import { Select } from "shared/ui/select"
import { events, selectors } from "../model"

export const Form = () => {
    const currentKukaracha = selectors.useCurrentKukaracha()
    const canSubmitKukaracha = selectors.useCanSubmitKukaracha()

    const handleChange = useEvent(events.setKukaracha)
    const handleAddKukarachaToList = useEvent(events.submitKukaracha)

    return (
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
            <TypeSelector />
            <Colors />

            <Button type="submit" disabled={!canSubmitKukaracha}>
                Утвердить участника
            </Button>
        </form>
    )
}

export const Colors = () => {
    const currentKukaracha = selectors.useCurrentKukaracha()
    const handleChange = useEvent(events.setKukaracha)

    return (
        <ColorPicker
            caption="цвет"
            type="color"
            id="color"
            value={currentKukaracha.color}
            onChange={handleChange}
        />
    )
}

export const TypeSelector = () => {
    const kukarachasTypes = selectors.useKukarachasTypes().filter((item) => item.id !== 0)
    const currentKukaracha = selectors.useCurrentKukaracha()

    const handleSelectType = useEvent(events.selectType)

    return (
        <Select
            caption="порода таракана"
            items={kukarachasTypes}
            value={currentKukaracha.type}
            onChange={handleSelectType}
        />
    )
}
