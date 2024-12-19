import { writable } from "svelte/store";

let isModalOn = writable(true);
let isCameraOn = writable(false);
let isMicOn = writable(true);
let isEffectOn = writable(false);

export { isModalOn, isCameraOn, isMicOn, isEffectOn };
