import { EKukarachaType } from "entities/kukaracha/lib"
import type { TKukarachaTypes, TKukaracha } from "entities/kukaracha/lib"

export const __kukarachesTypes__: Array<TKukarachaTypes> = [
    { id: 0, value: "default", name: EKukarachaType.default },
    { id: 1, value: "american", name: EKukarachaType.american },
    { id: 2, value: "fastfoot", name: EKukarachaType.fastfoot },
    { id: 3, value: "field", name: EKukarachaType.field },
    { id: 4, value: "sprinter", name: EKukarachaType.sprinter },
    { id: 5, value: "turkish", name: EKukarachaType.turkish },
]

export const __bulkKukaracha__: TKukaracha = {
    id: 0,
    name: "",
    age: 0,
    type: { id: 0, name: EKukarachaType.default, value: "default" },
    color: "#000000",
}
