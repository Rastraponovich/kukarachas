// import { IKukarachaRace } from "entities/game/lib";
import { EKukarachaType, TKukaracha } from "entities/kukaracha/lib"

interface IKukarachaRace extends TKukaracha {
    place?: number
    finished?: boolean
    time?: number
}

export const __kukarachasInRace__: Array<IKukarachaRace> = [
    {
        id: 1,
        type: { id: 1, name: EKukarachaType.american, value: "american" },
        color: "black",
        age: 18,
        name: "sample1",
        place: 2,
        finished: true,
        time: 32,
    },
    {
        id: 2,
        type: { id: 2, name: EKukarachaType.turkish, value: "turkish" },
        color: "blue",
        age: 18,
        name: "sample2",
        place: 3,
        finished: true,

        time: 44,
    },
    {
        id: 3,
        type: { id: 3, name: EKukarachaType.sprinter, value: "sprinter" },
        color: "yellow",
        age: 18,
        name: "sample3",
        place: 1,
        finished: true,

        time: 29,
    },
    {
        id: 4,
        type: { id: 4, name: EKukarachaType.field, value: "field" },
        color: "green",
        age: 18,
        name: "sample4sample4sample4",
        place: 4,
        finished: false,

        time: null,
    },
    {
        id: 5,
        type: { id: 5, name: EKukarachaType.fastfoot, value: "fastfoot" },
        color: "orange",
        age: 18,
        name: "sample5",
        place: 5,
        finished: false,

        time: null,
    },
]
