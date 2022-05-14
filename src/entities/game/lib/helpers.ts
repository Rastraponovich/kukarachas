import { EKukarachaType } from "entities/kukaracha/lib"
import { TTrack } from "./models"

export const __tracks__: TTrack[] = [
    {
        id: 1,
        firstLetter: "с",
        lastLetter: "ф",
        kukaracha: {
            id: 1,
            avgSpeed: null,
            speed: null,
            place: null,
            type: { id: 1, value: "turkish", name: EKukarachaType.turkish },
            color: "blue",
            value: 0,
        },

        favorite: false,
    },
    {
        id: 2,
        firstLetter: "т",
        lastLetter: "и",
        kukaracha: {
            id: 1,
            avgSpeed: null,
            speed: null,
            place: null,
            type: { id: 1, value: "american", name: EKukarachaType.american },
            color: "cyan",
            value: 0,
        },

        favorite: false,
    },
    {
        id: 3,
        firstLetter: "а",
        lastLetter: "н",
        kukaracha: {
            id: 1,
            avgSpeed: null,
            speed: null,
            place: null,
            type: { id: 1, value: "sprinter", name: EKukarachaType.sprinter },
            color: "orange",
            value: 0,
        },

        favorite: false,
    },
    {
        id: 5,
        firstLetter: "т",
        lastLetter: "ш",
        kukaracha: {
            id: 1,
            avgSpeed: null,
            speed: null,
            place: null,
            type: { id: 1, value: "fastfoot", name: EKukarachaType.fastfoot },
            color: "black",
            value: 0,
        },

        favorite: false,
    },
    {
        id: 4,
        firstLetter: "р",
        lastLetter: "и",
        kukaracha: {
            id: 1,
            avgSpeed: null,
            speed: null,
            place: null,
            type: { id: 1, value: "field", name: EKukarachaType.field },
            color: "red",
            value: 0,
        },
        favorite: true,
    },
]
