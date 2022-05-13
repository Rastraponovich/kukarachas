import { TKukaracha } from "models/kukaracha/lib"

export type TTrack = {
    id: number
    firstLetter: string
    lastLetter: string
    favorite: boolean
    kukaracha: IKukarachaRace
}

export interface IKukarachaRace extends Partial<TKukaracha> {
    place: number | null
    speed: number | null
    avgSpeed: number | null
    value: number
}
