import clsx from "clsx"
import { TKukaracha } from "models/kukaracha/lib"
import Image from "next/image"
import { memo } from "react"

interface KukarachaListProps {
    items: TKukaracha[]
    selected: TKukaracha["id"]
    onSelect(id: TKukaracha["id"]): void
}

export const KukarachaList = memo(({ items, selected, onSelect }: KukarachaListProps) => {
    return (
        <ul className="flex flex-col bg-white px-[13px] rounded-xl pt-[5px] pb-[100px] grow">
            {items.map((item) => (
                <KukarachaListItem
                    onClick={onSelect}
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    selected={selected === item.id}
                />
            ))}
        </ul>
    )
})
KukarachaList.displayName = "KukarachaList"

interface KukarachaListItemProps {
    name: TKukaracha["name"]
    image: TKukaracha["image"]
    id: TKukaracha["id"]
    onClick(id: TKukaracha["id"]): void
    selected?: boolean
}
const KukarachaListItem = memo(
    ({ name, image, selected = false, onClick, id }: KukarachaListItemProps) => {
        return (
            <li
                onClick={() => onClick(id)}
                className={clsx(
                    "flex items-center space-x-3 text-center font-bold text-2xl p-[11px] border-b-4 border-b-[#99D69D] border-dashed",
                    selected && "bg-gray-200"
                )}
            >
                <Image height={68} width={61} src={`/assets/images/${image}`} />
                <span className="grow first-letter:uppercase">{name}</span>
            </li>
        )
    }
)
