import { KukarachaImage } from "models/kukaracha"
import { KukarachaList } from "models/kukaracha/ui/kukaracha-list"
import { Button } from "shared/ui/button"
import { Input } from "shared/ui/input"
import { Select } from "shared/ui/select"

export const CreateCommand = () => {
    return (
        <div className="px-44 pt-32 pb-48 flex flex-col space-y-[177px] text-2xl font-bold">
            <div className="grid grid-cols-3 gap-x-20">
                <div className="flex flex-col justify-between">
                    <Input caption="имя таракана" />
                    <Input caption="возраст таракана" />
                    <Select
                        caption="вид таракана"
                        defaultValue={{ name: "выберите таракана" }}
                        items={[]}
                    />
                    <Select caption="цвет" defaultValue={{ name: "выберите цвет" }} items={[]} />
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="first-letter:uppercase">фотография таракана</span>
                    <KukarachaImage />
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="first-letter:uppercase after:content-[':']">
                        состав команды
                    </span>
                    <KukarachaList />
                </div>
            </div>
            <Button size="big" className="self-center first-letter:uppercase">
                утвердить комманду
            </Button>
        </div>
    )
}
