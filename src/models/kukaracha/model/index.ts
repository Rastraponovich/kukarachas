import type { ChangeEvent, FormEvent } from "react"
import { useStore } from "effector-react"
import { createEvent, createStore, sample } from "effector"

import { EKukarachaType } from "../lib"
import type { TKukaracha, TKukarachaColors, TKukarachaTypes } from "../lib"

import { __kukarachas__, __kukarachesColors__, __kukarachesTypes__ } from "../lib/helpers"

const __bulkKukaracha__: TKukaracha = {
    id: 0,
    name: "",
    age: 0,
    type: { id: 0, name: EKukarachaType.default, value: "default" },
    color: "#000000",
}

const $canSubmitTeam = createStore<boolean>(false)
const $canSubmitKukaracha = createStore<boolean>(false)

const addedKukaracha = createEvent<TKukaracha>()

const addedKukarachaButtonClicked = createEvent()
const $kukarachas = createStore<TKukaracha[]>([])

const $kukarachasColors = createStore<TKukarachaColors[]>(__kukarachesColors__)
const $kukarachasTypes = createStore<TKukarachaTypes[]>(__kukarachesTypes__)

const setKukaracha = createEvent<ChangeEvent<HTMLInputElement>>()

const selectType = createEvent<TKukarachaTypes>()

const $currentKukaracha = createStore<TKukaracha>(__bulkKukaracha__)
    .reset(addedKukaracha)
    .on(setKukaracha, (state, event) => ({
        ...state,
        [event.target.id]: event.target.value,
    }))
    .on(selectType, (state, payload) => ({ ...state, type: payload }))

sample({
    clock: addedKukarachaButtonClicked,
    source: $kukarachas,
    fn: (kukarachas, _) => ({ ...__bulkKukaracha__, id: kukarachas.length }),
    target: $currentKukaracha,
})

sample({
    clock: $currentKukaracha,

    fn: (currentKukaracha) => {
        const nameConditon = currentKukaracha.name.length > 0
        const ageCondition = currentKukaracha.age >= 18 && currentKukaracha.age <= 75
        if (nameConditon && ageCondition) return true
        return false
    },
    target: $canSubmitKukaracha,
})

const submitKukaracha = createEvent<FormEvent<HTMLFormElement>>()
submitKukaracha.watch((e) => e.preventDefault())

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
    source: [$currentKukaracha, $canSubmitKukaracha],
    filter: ([current, allow]: [TKukaracha, boolean]) => allow as boolean,
    fn: ([current, allow], _) => current as TKukaracha,
    target: addedKukaracha,
})

const selectKukaracha = createEvent<TKukaracha["id"]>()

const $selectedKukaracha = createStore<TKukaracha["id"] | null>(null).reset($kukarachas)

sample({
    clock: selectKukaracha,
    source: $kukarachas,
    fn: (kukarachas, id) => kukarachas.find((kukaracha) => kukaracha.id === id).id,
    target: $selectedKukaracha,
})

sample({
    clock: selectKukaracha,
    source: $kukarachas,
    filter: (kukarachas) => kukarachas.length > 0,
    fn: (kukarachas, id) => kukarachas.find((item) => item.id === id),
    target: $currentKukaracha,
})

sample({
    clock: addedKukaracha,
    source: [$selectedKukaracha, $kukarachas],
    filter: ([selectedKukaracha, _], payload) => selectedKukaracha === null,
    fn: ([_, kukarachas]: [TKukaracha["id"], TKukaracha[]], event) => [
        ...kukarachas,
        { ...event, id: kukarachas.length },
    ],
    target: $kukarachas,
})

sample({
    clock: addedKukaracha,
    source: [$selectedKukaracha, $kukarachas],
    filter: ([selectedKukarachaId, _], payload) => selectedKukarachaId !== null,
    fn: ([selectedKukarachaId, kukarachas]: [TKukaracha["id"], TKukaracha[]], event) =>
        kukarachas.map((kuka) => {
            if (kuka.id === selectedKukarachaId) return event
            return kuka
        }),
    target: $kukarachas,
})

const submitTeam = createEvent()

export const events = {
    selectKukaracha,
    setKukaracha,
    selectType,
    submitKukaracha,
    submitTeam,
    addedKukarachaButtonClicked,
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
const useCanSubmitKukaracha = () => useStore($canSubmitKukaracha)

export const selectors = {
    useKukarachas,
    useKukarachasColors,
    useKukarachasTypes,
    useCurrentKukaracha,
    useAllowSubmitTeam,
    useSelectedKukaracha,
    useCanSubmitKukaracha,
}
