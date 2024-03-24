import {mesh, updateContent} from './main.js'

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