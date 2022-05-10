import { TKukaracha } from "models/kukaracha/lib"
import Image from "next/image"
import { memo } from "react"

export const KukarachaList = () => {
    return (
        <ul className="flex flex-col bg-white px-[13px] rounded-xl pt-[5px] pb-[100px]">
            <KukarachaListItem name="kukaracha simple" image="default-kukaracha.svg" />
            <KukarachaListItem name="kukaracha simple" image="default-kukaracha.svg" />
            <KukarachaListItem name="kukaracha simple" image="default-kukaracha.svg" />
            <KukarachaListItem name="kukaracha simple" image="default-kukaracha.svg" />
        </ul>
    )
}

interface KukarachaListItemProps {
    name: TKukaracha["name"]
    image: TKukaracha["image"]
}
const KukarachaListItem = memo(({ name, image }: KukarachaListItemProps) => {
    return (
        <li className="flex items-center space-x-3 text-center font-bold text-2xl p-[11px] border-b-4 border-b-[#99D69D] border-dashed">
            <Image height={68} width={61} src={`/assets/images/${image}`} />
            <span className="grow first-letter:uppercase">{name}</span>
        </li>
    )
})
