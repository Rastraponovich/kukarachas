import { createEvent, createStore, sample } from "effector"
import { useStore } from "effector-react"
import type { ChangeEvent } from "react"
import type { TKukaracha, TKukarachaColors, TKukarachaTypes } from "../lib"
import { EKukarachaColor, EKukarachaType } from "../lib"

import { __kukarachas__, __kukarachesColors__, __kukarachesTypes__ } from "../lib/helpers"

const __bulkKukaracha__: TKukaracha = {
    id: 0,
    name: "",
    age: 0,
    image: "default-kukaracha.svg",
    type: { id: 0, name: EKukarachaType.default, value: "default" },
    color: { id: 0, name: EKukarachaColor.default, value: "default" },
}

const $canSubmitTeam = createStore<boolean>(false)

const addedKukaracha = createEvent<TKukaracha>()
const $kukarachas = createStore<TKukaracha[]>([]).on(addedKukaracha, (state, kukaracha) => [
    ...state,
    kukaracha,
])

const $kukarachasColors = createStore<TKukarachaColors[]>(__kukarachesColors__)
const $kukarachasTypes = createStore<TKukarachaTypes[]>(__kukarachesTypes__)

const setKukaracha = createEvent<ChangeEvent<HTMLInputElement>>()

const selectType = createEvent<TKukarachaTypes>()
const selectColor = createEvent<TKukarachaColors>()

const $currentKukaracha = createStore<TKukaracha>(__bulkKukaracha__)
    .reset(addedKukaracha)
    .on(setKukaracha, (state, event) => ({
        ...state,
        [event.target.id]: event.target.value,
    }))
    .on(selectColor, (state, payload) => ({ ...state, color: payload }))
    .on(selectType, (state, payload) => ({ ...state, type: payload }))

const submitKukaracha = createEvent()

sample({
    clock: $kukarachas,
    filter: (kukarachas) => kukarachas.length === 5,
    fn: () => true,
    target: $canSubmitTeam,
})

sample({
    clock: $kukarachas,
    filter: (kukarachas) => kukarachas.length < 5,
    fn: () => false,
    target: $canSubmitTeam,
})

sample({
    clock: submitKukaracha,
    source: [$currentKukaracha, $canSubmitTeam],
    filter: ([current, allow]) => !allow,
    fn: ([current, allow], _) => current as TKukaracha,
    target: addedKukaracha,
})

const selectKukaracha = createEvent<TKukaracha["id"]>()

const $selectedKukaracha = createStore<TKukaracha | null>(null)

sample({
    clock: selectKukaracha,
    source: $kukarachas,
    fn: (kukarachas, id) => kukarachas.find((kukaracha) => kukaracha.id === id),
    target: $selectedKukaracha,
})

const submitTeam = createEvent()

export const events = {
    selectKukaracha,
    setKukaracha,
    selectType,
    selectColor,
    submitKukaracha,
    submitTeam,
}

export const stores = {
    $kukarachas,
    $kukarachasColors,
    $kukarachasTypes,
    $currentKukaracha,
}

const useKukarachas = () => useStore($kukarachas)
const useKukarachasColors = () => useStore($kukarachasColors)
const useKukarachasTypes = () => useStore($kukarachasTypes)

const useCurrentKukaracha = () => useStore($currentKukaracha)
const useAllowSubmitTeam = () => useStore($canSubmitTeam)

const useSelectedKukaracha = () => useStore($selectedKukaracha)

export const selectors = {
    useKukarachas,
    useKukarachasColors,
    useKukarachasTypes,
    useCurrentKukaracha,
    useAllowSubmitTeam,
    useSelectedKukaracha,
}
