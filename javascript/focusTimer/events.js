import * as elementos from "./elements.js"
import * as actions from "./actions.js"

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