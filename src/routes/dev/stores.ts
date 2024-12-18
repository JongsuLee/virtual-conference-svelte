import { writable } from "svelte/store";

let isModalOn = writable(true);

export { isModalOn };
