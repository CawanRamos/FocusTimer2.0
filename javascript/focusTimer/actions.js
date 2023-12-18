import state from "./state.js";

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
    console.log(state.isRunning)
}

