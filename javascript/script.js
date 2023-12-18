import * as events from "./focusTimer/events.js"
import * as elementos from "./focusTimer/elements.js"
import state from "./focusTimer/state.js"

start()


function start() {
    elementos.minutes.textContent = state.minutes
    events.registerControlsRigth()
    events.registerControlsLeft()
    events.setMinutes()
}