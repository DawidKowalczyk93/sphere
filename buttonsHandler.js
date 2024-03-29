import {mesh, updateContent, updateTexture} from './main.js'
import {planetNumber} from "./main.js";

const buttonPlusScale = document.getElementById('plusScale')
buttonPlusScale.addEventListener('click', () => {
    mesh.scale.x += 0.01
    mesh.scale.y += 0.01
    mesh.scale.z += 0.01
    updateContent()

})

const buttonMinusScale = document.getElementById('minusScale')
buttonMinusScale.addEventListener('click', () => {
    mesh.scale.x -= 0.01
    mesh.scale.y -= 0.01
    mesh.scale.z -= 0.01
    updateContent()
})


const buttonPlusRotation = document.getElementById('plusRotation')
export let rotationY = 0.001
buttonPlusRotation.addEventListener('click', () => {
    rotationY += 0.001
    updateContent()
})
const buttonMinusRotation = document.getElementById('minusRotation')
buttonMinusRotation.addEventListener('click', () => {
    rotationY -= 0.001
    updateContent()
})

const buttonNextPlanet = document.getElementById('next')
buttonNextPlanet.addEventListener('click', () => {
    planetNumber.number += 1
    console.log(planetNumber.number)
    updateTexture()
})

const buttonPreviousPlanet = document.getElementById('previous')
buttonPreviousPlanet.addEventListener('click', () => {
    planetNumber.number -= 1
    console.log(planetNumber.number)
    updateTexture()
})