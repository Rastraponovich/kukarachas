import clsx from "clsx"
import { memo } from "react"
import type { TKukaracha } from "models/kukaracha/lib"
import { generateKukaracha } from "../kukaracha-image"

interface KukarachaListProps {
    items: TKukaracha[]
    selected: TKukaracha["id"]
    onSelect(id: TKukaracha["id"]): void
}

export const KukarachaList = memo(({ items, selected, onSelect }: KukarachaListProps) => {
    return (
        <ul className="flex flex-col  p-3.5 space-y-6 rounded-xl text-left">
            {items.map((kukaracha) => (
                <KukarachaListItem
                    onClick={onSelect}
                    id={kukaracha.id}
                    key={kukaracha.id}
                    kukaracha={kukaracha}
                    selected={selected === kukaracha.id}
                />
            ))}
        </ul>
    )
})
KukarachaList.displayName = "KukarachaList"

interface KukarachaListItemProps {
    id: TKukaracha["id"]
    kukaracha: TKukaracha
    onClick(id: TKukaracha["id"]): void
    selected?: boolean
}
const KukarachaListItem = memo(
    ({ kukaracha, selected = false, onClick, id }: KukarachaListItemProps) => {
        const kuka = generateKukaracha({
            color: kukaracha.color,
            type: kukaracha.type.value,
            size: "small",
        })
        return (
            <li
                onClick={() => onClick(kukaracha.id)}
                className={clsx(
                    "rounded-lg flex items-center space-x-10  py-4 px-2.5",
                    selected && "bg-[#99D69D]"
                )}
            >
                {kuka}
                <span className="grow first-letter:uppercase">{kukaracha.name}</span>
            </li>
        )
    }
)
