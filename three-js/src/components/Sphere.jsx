import * as THREE from 'three';

//scene
const scene = new THREE.scene();


//create a spear -- geometry is just the shape of the object - it does not have any properties
const geometry = new THREE.SphereGeometry(3, 64,64); // (radius, segment1 - width, segment2 - height )

//to change how it looks like - material
const material = new THREE.MeshBasicMaterial({

  color: "#00ff83",
});


//combination of geometry and material is mesh
const mesh =  new THREE.Mesh(geometry, material);
//add the mesh to the scene
scene.add(mesh)

//Adding a camera
const camera = new THREE.PerspectiveCamera(45, 800, 600)
scene.add(camera)

//renderer


const Sphere = () => {
  return (
    <div>
      
    </div>
  )
}

export default Sphere
