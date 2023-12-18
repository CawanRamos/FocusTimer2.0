import state from "./state.js";
import * as musics from "./music.js"
import * as elementos from "./elements.js"

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')
    console.log(state.isRunning)
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
}

export function musicTree() {
    state.musicOn = document.documentElement.classList.toggle('music-on')

    if(state.musicOn) {
        musics.musicTree.play()
        return
    }
    musics.musicTree.pause()
}

export function musicCloud() {
    state.musicOn = document.documentElement.classList.toggle('music-on')
    if(state.musicOn) {
        musics.musicCloud.play()
        return
    }
    musics.musicCloud.pause()
}

export function musicMarket() {
    state.musicOn = document.documentElement.classList.toggle('music-on')
    if(state.musicOn) {
        musics.musicMarket.play()
        return
    }
    musics.musicMarket.pause()
}

export function musicFire() {
    state.musicOn = document.documentElement.classList.toggle('music-on')
    if(state.musicOn) {
        musics.musicFire.play()
        return
    }
    musics.musicFire.pause()
}

