import * as elementos from "./elements.js"
import state from "./state.js"
import * as actions from "./actions.js"


export function countDown(){

    clearTimeout(state.countDownId)

    if(!state.isRunning){
        return
    }
 
    let minutes = Number(elementos.minutes.textContent)
    let seconds = Number(elementos.seconds.textContent)

    seconds--

    if (seconds < 0){
        seconds = 59
        minutes--
    }
    
    if(minutes < 0 ) {
        actions.reset()
        return
    }

    updateDisplay(minutes, seconds)
    state.countDownId = setTimeout (() => {countDown()}, 1000)
}

export function updateDisplay (minutes, seconds) {
    minutes = minutes ?? state.minutes  /* nullish coalesing operator */
    /*Se eu não passar nenhum minuto, ele vai pegar os minutis padrões da minha aplicação*/
    seconds = seconds ?? state.secondes

    elementos.minutes.textContent = String(minutes).padStart(2,'0') /* Estou falando que meu valor vai ter sempre duas casa, e caso n tenha, ele colocará o 0 na frente*/
    elementos.seconds.textContent = String(seconds).padStart(2,'0')
}

