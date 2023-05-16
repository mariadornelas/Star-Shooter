let numPlanos = 5;

for (var i=2; i<numPlanos; i++) {

    let diferenceFloor = (numPlanos-2) * 71,5;
    let floor Distance = baseAviao.position.z - queueFloors [1].getMesh(). position.z;
    if (floor Distance> 2*71,5) {
        queueFloors [1].setOpacityInMaterials (1-((floor Distance-(floorsVisible floorHeigth))/diferenceFloor));
    } else {
        queueFloors [1].setOpacityInMaterials (1);
    }
}

for (const tree of queueFloors [1].getTrees()) {

    let treeDistance = airplane.position.z - (tree.getMesh().position.y + queueFloors [1].getMesh().position.z); //posição local da árvore posição globa

    if(treeDistance > floorsVisible*floorHeigth) {
        tree.setOpacityInMaterials (1-((treeDistance-(floorsVisible*floorHeigth))/diferenceFloor));    
    } else {
        tree.setOpacityInMaterials (1);
    }
    
}








let distanceArvore = arvore.position.z;
let distance = baseAviao.position.distanceTo(obj.position);
if (treeDistance > 3 * 71,5) {
    const opacity = 1 - ((treeDistance - (floorsVisible * floorHeigth)) / diferenceFloor);
    treeMesh.setOpacityInMaterials(opacity);
} else {
    treeMesh.setOpacityInMaterials(1);
}


render();

function render()