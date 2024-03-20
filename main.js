import * as THREE from 'three';
import './style.css'

const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry(3, 64, 64)
const material = new THREE.MeshStandardMaterial({color: 0xffff00})

const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}


//Light
const light = new THREE.PointLight(0xffffff, 200, 100)
light.position.set(10, 10, 10)
scene.add(light) // Dodanie światła do sceny

const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height)
camera.position.z = 20
scene.add(camera)

//Render
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

//Resize
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    //Update camera
    camera.updateProjectionMatrix()
    camera.aspect = sizes.width / sizes.height
    renderer.setSize(sizes.width, sizes.height)
})

const loop = () => {
    renderer.render(scene, camera)
    window.requestAnimationFrame(loop)
}
loop()