import * as THREE from  'three';
import { OrbitControls } from '../build/jsm/controls/OrbitControls.js';
import {initRenderer, 
        initCamera,
        initDefaultBasicLight,
        createGroundPlaneWired,
        setDefaultMaterial,
        InfoBox,
        onWindowResize,
        createGroundPlaneXZ} from "../libs/util/util.js";

let scene, renderer, camera, material, light, orbit; // Initial variables
scene = new THREE.Scene();    // Create main scene
renderer = initRenderer();    // Init a basic renderer
camera = initCamera(new THREE.Vector3(0, 15, 30)); // Init camera in this position
// material = setDefaultMaterial(); // create a basic material
light = initDefaultBasicLight(scene); // Create a basic light to illuminate the scene
orbit = new OrbitControls( camera, renderer.domElement ); // Enable mouse rotation, pan, zoom etc.

// Listen window size changes
window.addEventListener( 'resize', function(){onWindowResize(camera, renderer)}, false );

// Show axes (parameter is size of each axis)
let axesHelper = new THREE.AxesHelper( 12 );
scene.add( axesHelper );

// create the ground plane
  let plane = createGroundPlaneWired(20, 20);
  let plane2 = createGroundPlaneWired(20, 20);
  let plane3 = createGroundPlaneWired(20, 20);
  let plane4 = createGroundPlaneWired(20, 20);

  plane2.position.set(0, 0, -20)
  plane3.position.set(0, 0, -40)
  plane4.position.set(0, 0, -60)
  
  
  scene.add(plane);
  scene.add(plane2);
  scene.add(plane3);
  scene.add(plane4);



// create a cube
let posCubo;
function criaCubo(op){
  let cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  let materialCube = setDefaultMaterial("orange", op)
  let cube = new THREE.Mesh(cubeGeometry, materialCube);
  let cube2 = new THREE.Mesh(cubeGeometry, materialCube);
  // position the cube
  cube.position.set(0.0, 2.0, -50.0);
  cube2.position.set(0.0, 2.0, -5.0);

  // add the cube to the scene
  scene.add(cube);
  scene.add(cube2)

  posCubo = -cube.position.z;
}







// Use this to show information onscreen
let controls = new InfoBox();
controls.add("Basic Scene");
controls.addParagraph();
controls.add("Use mouse to interact:");
controls.add("* Left button to rotate");
controls.add("* Right button to translate (pan)");
controls.add("* Scroll to zoom in/out.");
controls.show();

render();
function render()
{
  console.log()
  requestAnimationFrame(render);
  renderer.render(scene, camera) // Render scene
}