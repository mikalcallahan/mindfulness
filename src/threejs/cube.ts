import * as THREE from 'three/src/Three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene: THREE.Scene = new THREE.Scene()
scene.background = new THREE.Color(0x553224)

const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, (window.innerWidth / 2) / (window.innerHeight / 2), 0.1, 1000)

const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer()
renderer.setSize((window.innerWidth / 2), (window.innerHeight / 2))
const canvas: HTMLCanvasElement = document.body.appendChild(renderer.domElement)
canvas.width = (window.innerWidth / 2)
canvas.height = (window.innerHeight / 2)

const controls = new OrbitControls(camera, renderer.domElement)

const geometry: THREE.BoxGeometry = new THREE.BoxGeometry()
const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })

const cube: THREE.Mesh = new THREE.Mesh(geometry, material)

scene.add(cube)
camera.position.z = 2

function onWindowResize () {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5)
}

window.addEventListener('resize', onWindowResize, false)

const animate = function () {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}

animate()
