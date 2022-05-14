import type { TKukaracha, TKukarachaColor, TKukarachaColors, TKukarachaTypes } from "./models"
import { EKukarachaColor, EKukarachaType } from "./models"

export const __kukarachas__: TKukaracha[] = [
    {
        id: 1,
        name: "kuka1",
        age: 0,
        type: { id: 0, value: "default", name: EKukarachaType.default },
        color: "#000000",
    },
    {
        id: 2,
        name: "kuka2",
        age: 0,
        type: { id: 0, value: "default", name: EKukarachaType.default },
        color: "#000000",
    },
    {
        id: 3,
        name: "kuka3",
        age: 0,
        type: { id: 0, value: "default", name: EKukarachaType.default },
        color: "#000000",
    },
    {
        id: 4,
        name: "kuka4",
        age: 0,
        type: { id: 0, value: "default", name: EKukarachaType.default },
        color: "#000000",
    },
    {
        id: 5,
        name: "kuka5",
        type: { id: 0, value: "default", name: EKukarachaType.default },
        age: 0,
        color: "#000000",
    },
]

export const __kukarachesColors__: TKukarachaColors[] = [
    { id: 0, value: "default", name: EKukarachaColor.default },
    { id: 1, value: "blue", name: EKukarachaColor.blue },
    { id: 2, value: "green", name: EKukarachaColor.green },
    { id: 3, value: "orange", name: EKukarachaColor.orange },
    { id: 4, value: "pink", name: EKukarachaColor.pink },
    { id: 5, value: "red", name: EKukarachaColor.red },
]

export const __kukarachaColorValues__: Record<TKukarachaColor, string> = {
    green: "fill-[#00FFEC]",
    red: "fill-[#EC1C24]",
    blue: "fill-[#2805FF]",
    default: "fill-[#000000]",
    orange: "fill-[#FFA300]",
    pink: "fill-[#E600FF]",
}
