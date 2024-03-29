import * as THREE from 'three';
import './style.css'
import {gsap} from "gsap";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import './buttonsHandler.js'
import {rotationY} from "./buttonsHandler.js";
import {planets} from "./planets.js";
//Planets Array

export let planetNumber = {
    number: 0
};

const scene = new THREE.Scene();

const loader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(3, 5 )
const material = new THREE.MeshStandardMaterial({
    map: loader.load(planets[planetNumber.number].url)
})


export const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

//Light
const light = new THREE.HemisphereLight(0xffffff, 0xaa5500)
light.position.set(10, 10, 10)
scene.add(light) // Dodanie światła do sceny

//Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height)
camera.position.z = 20
scene.add(camera)

//Render
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(2)
renderer.render(scene, camera)

//Controls
const controls = new OrbitControls( camera, canvas)
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false

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
    controls.update()
    mesh.rotation.y += rotationY;
    renderer.render(scene, camera)
    window.requestAnimationFrame(loop)
}
loop()

//Timeline magiccc
const tl = gsap.timeline( {defaults: { duration: 1 } })
tl.fromTo(mesh.scale, {z: 0, x: 0, y: 0}, {z: 1, x: 1, y: 1} )

export const updateContent = () => {
    const scaleValue = document.getElementById('scaleValue')
    scaleValue.innerHTML = Math.floor(mesh.scale.x * 100 ) / 100;
    const rotationValue = document.getElementById('rotationValue')
    rotationValue.innerHTML = Math.floor(mesh.rotation.y * 100 ) / 100;
}
export const updateTexture = () => {
    scene.remove(mesh)
    const newMaterial = new THREE.MeshStandardMaterial({
        map: loader.load(planets[planetNumber.number].url)
    })
    const newRadius = new THREE.IcosahedronGeometry(planets[planetNumber.number].radius, 5 )
    mesh.material = newMaterial
    mesh.geometry = newRadius
    scene.add(mesh)

}