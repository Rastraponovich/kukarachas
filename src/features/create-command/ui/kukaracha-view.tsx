import { Button } from "shared/ui/button"
import { SpriteIcons } from "shared/ui/icons"
import { selectors } from "../model"

export const KukarachaView = () => {
    const currentKukaracha = selectors.useCurrentKukaracha()
    const allowSubmit = selectors.useAllowSubmitTeam()

    return (
        <div className="flex flex-col justify-between rounded-2xl bg-white p-10">
            <div className="relative  bg-white rounded-xl flex items-center justify-center ">
                <SpriteIcons
                    name={currentKukaracha.type.value}
                    style={{ color: currentKukaracha.color }}
                />
            </div>

            <Button className="self-center first-letter:uppercase" disabled={!allowSubmit}>
                утвердить комманду
            </Button>
        </div>
    )
}
