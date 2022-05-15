import { createEffect, createEvent, createStore, sample, scopeBind } from "effector"
import type { IKukarachaRace, TTrack } from "entities/game/lib"
import { debug } from "patronum"

interface TrackFactory {
    track: TTrack
    started: boolean
}
export const createTrackFactory = ({ track, started }: TrackFactory) => {
    const startMove = createEvent()
    const stopMove = createEvent()

    const { value, kukaracha, favorite, ...raceTrack } = track
    const $started = createStore(started)

    sample({
        clock: $started,
        filter: (state) => state,
        target: startMove,
    })

    sample({
        clock: $started,
        filter: (state) => !state,
        target: stopMove,
    })

    const $value = createStore<TTrack["value"]>(value)
    debug($value)

    sample({
        clock: startMove,
        source: $value,
        fn: (val, _) => val + Math.floor(Math.random() * (3 - 1 + 1) + 1),
        target: $value,
    })

    const $isFavorite = createStore<TTrack["favorite"]>(favorite)
    const $kukaracha = createStore<IKukarachaRace>(kukaracha)

    const startMoveFx = createEffect(() => {
        const callUpdate = scopeBind(startMove)
        return setInterval(() => {
            const interval = setInterval(() => {
                callUpdate()
            }, 300)
        })
    })

    const $timerId = createStore<number | null | NodeJS.Timer>(null).on(
        startMoveFx.doneData,
        (_, timerId) => timerId
    )

    sample({
        clock: stopMove,
        source: $timerId,
        fn: clearInterval,
    })

    const $track = createStore<Partial<TTrack>>(raceTrack)

    return { $track, $value }
}
