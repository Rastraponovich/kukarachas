import { createEvent, createStore } from "effector"
import { useStore } from "effector-react"
import type { TTrack } from "../lib"
import { __tracks__ } from "../lib"

const startedRaceButtonClicked = createEvent()
const $raceIsStarted = createStore<boolean>(false).on(
    startedRaceButtonClicked,
    (state, _) => !state
)

const $tracks = createStore<TTrack[]>(__tracks__)

const $tracksId = $tracks.map((tracks) => tracks.map((item) => item.id))

const useTrackList = () => useStore($tracksId)
const useGetTrack = (id: number) => useStore($tracks).find((track) => track.id === id)

const useRaceIsStarted = () => useStore($raceIsStarted)
export const selectors = {
    useTrackList,
    useGetTrack,
    useRaceIsStarted,
}
export const events = {
    startedRaceButtonClicked,
}
export const stores = {}
