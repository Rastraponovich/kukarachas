import { createEvent, createStore, sample } from "effector"
import { useStore } from "effector-react"
import { TKukaracha } from "entities/kukaracha/lib"
import { __kukarachasInRace__ } from "../lib"

const toggleOpenedWindow = createEvent()
const $isOpenedWindow = createStore<boolean>(false).on(toggleOpenedWindow, (state, _) => !state)

const selectKukarachaId = createEvent<TKukaracha["id"]>()
const $selectedKukarachaId = createStore<TKukaracha["id"] | null>(null).on(
    selectKukarachaId,
    (selected, event) => {
        if (selected === event) return null
        return event
    }
)

const toggleRaceEnded = createEvent()
const $isRaceEnded = createStore<boolean>(false).on(toggleRaceEnded, (state, _) => !state)

const $kukarachasInRace = createStore<typeof __kukarachasInRace__>(__kukarachasInRace__)

sample({
    clock: $isRaceEnded,
    source: $kukarachasInRace,

    fn: (kukarachas, raceEnded) => {
        if (raceEnded) return [...kukarachas].sort((a, b) => a.place - b.place)

        return __kukarachasInRace__
    },
    target: $kukarachasInRace,
})

const useIsOpenedWindow = () => useStore($isOpenedWindow)
const useSelectedKukarachaId = () => useStore($selectedKukarachaId)
const useIsRaceEnded = () => useStore($isRaceEnded)

const useKukarachasInRace = () => useStore($kukarachasInRace)
export const selectors = {
    useIsOpenedWindow,
    useSelectedKukarachaId,
    useIsRaceEnded,
    useKukarachasInRace,
}
export const events = {
    toggleOpenedWindow,
    selectKukarachaId,
    toggleRaceEnded,
}
