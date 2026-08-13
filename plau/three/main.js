import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// レンダラーを作成
let rotation_y = 0.0;

const canvas_element = document.querySelector('#canvas');
// サイズを指定
let width = canvas_element.clientWidth;
let height = canvas_element.clientHeight;

const renderer = new THREE.WebGLRenderer(
  {canvas: canvas_element,
    antialias: true});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(width, height);

window.addEventListener("resize",() => {
  width = canvas_element.clientWidth;
  height = canvas_element.clientHeight;
  console.log("resized",width,height);
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
})
// シーンを作成
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

// カメラを作成
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 100000);
camera.position.set(400, 1300, 4000);

// カメラコントローラーを作成
const controls = new OrbitControls(camera, canvas_element);
controls.target.set(-200, 1000, -1200);
controls.enableDamping = true;
controls.update();

// // 形状とマテリアルからメッシュを作成します
// const mesh = new THREE.Mesh(
//   new THREE.BoxGeometry(300, 300, 300),
//   new THREE.MeshNormalMaterial());
// scene.add(mesh);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);
const sunLight = new THREE.AmbientLight(0xffffff);
scene.add(sunLight);

const loader = new GLTFLoader();

let mixer;
let clock;
let model;

clock = new THREE.Clock();

loader.load("three/models/slide.glb", function ( gltf ) {
  mixer = new THREE.AnimationMixer(gltf.scene);
  model = gltf.scene;
  model.scale.set(1000,1000,1000);
  scene.add(model);
  gltf.animations.forEach( clip => {
    mixer.clipAction( clip ).loop = THREE.LoopRepeat;
    console.log("animation,", clip)
    mixer.clipAction(clip).play();
  } );
  console.log("model loaded");

}, undefined, function ( error ) {

	console.error( error );

} );

tick();

// 毎フレーム時に実行されるループイベントです
function tick() {
      console.log("tick");
      if(mixer) {
        console.log("update anim");
        mixer.update( clock.getDelta() );
      };
      if(model) {
        model.rotateY(rotation_y);
      }
      // レンダリング
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
}