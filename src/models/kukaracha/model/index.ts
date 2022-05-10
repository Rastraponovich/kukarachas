import { createStore } from "effector"
import { TKukaracha } from "../lib"
import { __kukarachas__ } from "../lib/helpers"

const $kukarachas = createStore<TKukaracha[]>(__kukarachas__)

export const stores = {
    $kukarachas,
}
