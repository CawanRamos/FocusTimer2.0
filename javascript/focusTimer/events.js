import * as elementos from "./elements.js"
import * as actions from "./actions.js"
import * as timer from "./timer.js"
import state from "./state.js"


export function registerControlsLeft(){
    elementos.controlsLeft.addEventListener('click', (event) => {
        const action  = event.target.dataset.action
        if(actions[action]() != 'function'){
            return
        }
        actions[action]()
    })
}

export function registerControlsRigth(){
    elementos.controlsRight.addEventListener('click', (event) => {
        const action  = event.target.dataset.action
        if(actions[action]() != 'function'){
            return 
        }
        actions[action]()
    })
}

export function setMinutes(){
    elementos.minutes.addEventListener('focus', () => {
        elementos.minutes.textContent = ''
    })

    elementos.minutes.onkeypress = (event) => /\d/.test(event.key)

    elementos.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent

        if(time == 0){
            state.minutes = 25

        } else {
            time = time > 60 ? 60 : time
            state.minutes = time
            state.secondes = 0
            time = time > 60 ? 60 : time
            state.minutes = time
            state.secondes = 0
        }
        timer.updateDisplay()
        state.minutes=25
        elementos.minutes.removeAttribute('contenteditable')
    })
} 
