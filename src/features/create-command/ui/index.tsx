import { Form } from "./form"
import { KukarachaView } from "./kukaracha-view"
import { KukarachasList } from "./kukarachas-list"

export const CreateCommand = () => {
    return (
        <section className=" flex flex-col space-y-[21.5px] text-2xl font-normal bg-[#A8B8E1]">
            <div className="grid grid-cols-3 gap-x-6 ">
                <Form />
                <KukarachaView />
                <KukarachasList />
            </div>
        </section>
    )
}
