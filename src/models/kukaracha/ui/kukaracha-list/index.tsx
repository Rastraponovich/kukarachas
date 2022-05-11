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
    if (items.length === 0)
        return <span className="text-center">Команда пуста, добавьте участников соревнования</span>
    return (
        <ul className="flex flex-col  p-6 space-y-6 rounded-xl text-left grow">
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
                    "rounded-lg flex items-center space-x-10  py-4 px-2.5",
                    selected && "bg-[#99D69D]"
                )}
            >
                <Image height={68} width={61} src={`/assets/images/${image}`} />
                <span className="grow first-letter:uppercase">{name}</span>
            </li>
        )
    }
)
