import state from "./state.js";
import * as musics from "./music.js"
import * as timer from "./timer.js"
import * as elementos from "./elements.js"

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countDown()
    console.log(state.isRunning)
}

export function set(){
    elementos.minutes.setAttribute('contenteditable', true)
    elementos.minutes.focus()
}

export function reset(){
    state.isRunning = false
    timer.updateDisplay()
    document.documentElement.classList.remove('running')
}

export function sum () {
    let minutes = Number(elementos.minutes.textContent)

    if ( minutes >= 55) {
        elementos.minutes.textContent = '60'
        elementos.seconds.textContent = '00'
        return
    }
    let sum = minutes + 5 
    elementos.minutes.textContent = sum
}

export function subtraction(){
    let minutes = Number(elementos.minutes.textContent)
    let sum = minutes - 5 
    if ( minutes <= 4) {
        return
    }  
    elementos.minutes.textContent = sum
}

export function musicTree() {
    state.musicOn = document.documentElement.classList.toggle('music-on')
    elementos.buttonMusic[0].classList.toggle('colorClick')
    if(state.musicOn) {
        musics.musicTree.play()
        return
    }
    musics.musicTree.pause()
}

export function musicCloud() {
    state.musicOn = document.documentElement.classList.toggle('music-on')
    elementos.buttonMusic[1].classList.toggle('colorClick')
    if(state.musicOn) {
        musics.musicCloud.play()
        return
    }
    musics.musicCloud.pause()
}

export function musicMarket() {
    state.musicOn = document.documentElement.classList.toggle('music-on')
    elementos.buttonMusic[2].classList.toggle('colorClick')
    if(state.musicOn) {
        musics.musicMarket.play()
        return
    }
    musics.musicMarket.pause()
}

export function musicFire() {
    state.musicOn = document.documentElement.classList.toggle('music-on')
    elementos.buttonMusic[3].classList.toggle('colorClick')
    if(state.musicOn) {
        musics.musicFire.play()
        return
    }
    musics.musicFire.pause()
}

