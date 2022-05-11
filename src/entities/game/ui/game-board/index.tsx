import { KukarachaImage } from "models/kukaracha"
import { KukarachaList } from "models/kukaracha/ui/kukaracha-list"
import { Button } from "shared/ui/button"
import { Input } from "shared/ui/input"
import { Select } from "shared/ui/select"
import { CreateCommand } from "../create-command"

const people = [
    { name: "Wade Cooper" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
    { name: "Tom Cook" },
    { name: "Tanya Fox" },
    { name: "Hellen Schmidt" },
]

export const GameBoard = () => {
    return (
        //px-[50px] pt-[72px] pb-[22px]
        <section className="bg-[#99D69D] flex flex-col  rounded-3xl">
            {/* <Button variant="NORMAL">Сделать ставку</Button> */}

            {/* <h2>Select Component</h2> */}
            <CreateCommand />

            {/* <Select items={people} /> */}
            {/* <Input caption="возраст" /> */}
            {/* <Input caption="возраст" dense /> */}
            {/* <h2>Kukaracha Preview Image Component</h2>
            <div className="self-start m-2">
                <KukarachaImage />
            </div>
            <h2>Kukaracha list Component</h2>
            <KukarachaList /> */}
        </section>
    )
}
