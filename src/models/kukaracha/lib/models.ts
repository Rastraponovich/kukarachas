export type TKukarachaType = "default" | "fastfoot" | "sprinter" | "turkish" | "field" | "american"
export type TKukarachaColor = "default" | "red" | "blue" | "orange" | "green" | "pink"

export enum EKukarachaColor {
    default = "выбирите цвет",
    red = "красный",
    green = "зеленый",
    blue = "синий",
    orange = "оранжевый",
    pink = "розовый",
}

export enum EKukarachaType {
    default = "выбирите тип",

    fastfoot = "быстролап",
    sprinter = "спринтер",
    turkish = "туреций",
    field = "полевой",
    american = "американский",
}

export type TKukaracha = {
    id: number
    name: string
    type: TKukarachaTypes
    color: string
    age: number
}
export type TKukarachaColors = {
    id: number
    name: EKukarachaColor
    value: TKukarachaColor
}

export type TKukarachaTypes = {
    id: number
    name: EKukarachaType
    value: TKukarachaType
}
