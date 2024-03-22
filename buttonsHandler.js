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
buttonPlusRotation.addEventListener('click', () => {
    mesh.rotation.x += 10
})
const buttonMinussRotation = document.getElementById('minusRotation')
buttonPlusRotation.addEventListener('click', () => {
    mesh.rotation.x += 10
    console.log(mesh.rotation.x)
})