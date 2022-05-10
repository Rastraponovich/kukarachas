export type TKukarachaType = "default" | "fastStep" | "sprinter" | "turkish" | "field" | "american"
export type TKukarachaColor = "default" | "red" | "blue" | "orange" | "green" | "pink"

export enum EKukarachaColor {
    red = "красный",
    green = "зеленый",
    blue = "синий",
    orange = "оранжевый",
    pink = "розовый",
}

export enum EKukarachaType {
    fastStep = "быстролап",
    sprinter = "спринтер",
    turkish = "туреций",
    field = "полевой",
    american = "американский",
}

export type TKukaracha = {
    image: string
    id: number
    name: string
    type: TKukarachaType
    color: TKukarachaColor
    age: number
}
