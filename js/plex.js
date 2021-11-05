
const width = 1280;
const height = 720;

const renderer = new THREE.WebGLRenderer({canvas: document.querySelector("#myCanvas")});
renderer.SetPixelRatio(width,height);
const scene = new THREE.Scene();
const camera = new THREE.ParspectiveCamera(45, width / height, 1, 10000);
camera.position.set(0,0,+10000);


const r = 10;
const geo = new THREE.BoxGeometry(r,r,r);
const mat = new THREE.MeshBasicMaterial;
const box = new THREE.Mesh(geo,mat);

const framebox = new THREE.BoxHelper(box,0x111111);
scene.add(framebox);