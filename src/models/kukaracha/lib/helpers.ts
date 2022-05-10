import type { TKukaracha, TKukarachaColors, TKukarachaTypes } from "./models"
import { EKukarachaColor, EKukarachaType } from "./models"

export const __kukarachas__: TKukaracha[] = [
    {
        id: 1,
        name: "kuka1",
        image: "default-kukaracha.svg",
        age: 0,
        type: { id: 0, value: "default", name: EKukarachaType.default },
        color: { id: 0, value: "default", name: EKukarachaColor.default },
    },
    {
        id: 2,
        name: "kuka2",
        image: "default-kukaracha.svg",
        age: 0,
        type: { id: 0, value: "default", name: EKukarachaType.default },
        color: { id: 0, value: "default", name: EKukarachaColor.default },
    },
    {
        id: 3,
        name: "kuka3",
        image: "default-kukaracha.svg",
        age: 0,
        type: { id: 0, value: "default", name: EKukarachaType.default },
        color: { id: 0, value: "default", name: EKukarachaColor.default },
    },
    {
        id: 4,
        name: "kuka4",
        image: "default-kukaracha.svg",
        age: 0,
        type: { id: 0, value: "default", name: EKukarachaType.default },
        color: { id: 0, value: "default", name: EKukarachaColor.default },
    },
    {
        id: 5,
        name: "kuka5",
        image: "default-kukaracha.svg",
        type: { id: 0, value: "default", name: EKukarachaType.default },
        age: 0,
        color: { id: 0, value: "default", name: EKukarachaColor.default },
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

export const __kukarachesTypes__: TKukarachaTypes[] = [
    { id: 0, value: "default", name: EKukarachaType.default },
    { id: 1, value: "american", name: EKukarachaType.american },
    { id: 2, value: "fastStep", name: EKukarachaType.fastStep },
    { id: 3, value: "field", name: EKukarachaType.field },
    { id: 4, value: "sprinter", name: EKukarachaType.sprinter },
    { id: 5, value: "turkish", name: EKukarachaType.turkish },
]
