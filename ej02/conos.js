var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);


//CONO
lados = []
var geometry = new THREE.ConeGeometry(1, 3, 10);
var material = new THREE.MeshPhongMaterial({ color: 0xbfac31 });
var cono = new THREE.Mesh(geometry, material);
scene.add(cono)

cono.positionZ = 1.5;

geometry.rotateX (Math.PI/2);
                                    //ROTACION EN X , Y
geometry.rotateY (Math.PI/2);


geometry.translate(1.5, 1, 0);
                                      //TRASLACION
geometry.rotateZ(5.96029); //ANGULO

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();