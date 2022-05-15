import { createStore, sample } from "effector"
import { useStore } from "effector-react"
import { raceModel } from "entities/game"
import { TTrack } from "entities/game/lib"

const $isRaceStarted = createStore<boolean>(false)

sample({
    clock: raceModel.stores.$raceIsStarted,

    target: $isRaceStarted,
})

const useRaceIsStarted = () => useStore($isRaceStarted)

export const selectors = { useRaceIsStarted }
