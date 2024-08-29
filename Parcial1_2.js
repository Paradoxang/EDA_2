// Creamos Person
class Person {
    constructor(fullName, birthDate) {
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.children = [];
    }
    addChild(child) {
        this.children.push(child);
    }
}

//preorden
function printPreOrder(person) {
    if (person === null) return;
    console.log(`${person.fullName} (${person.birthDate})`);
    person.children.forEach(child => printPreOrder(child));
}

//postorden
function printPostOrder(person) {
    if (person === null) return;
    person.children.forEach(child => printPostOrder(child));
    console.log(`${person.fullName} (${person.birthDate})`);
}

//InOrden
function printInOrder(person) {
    if (person === null) return;
    if (person.children.length > 0) {
        printInOrder(person.children[0]);
    }
    console.log(`${person.fullName} (${person.birthDate})`);
    for (let i = 1; i < person.children.length; i++) {
        printInOrder(person.children[i]);
    }
}

//Ejemplo de uso

//Abuelxs
const grandParent = new Person("Ana Eliza Maje", "10/05/1934");

//Padres
const parent1 = new Person("Mireya Ortiz", "28/11/1972");
const parent2 = new Person("Carlos Alberto Miranda", "09/04/1972");

//Hijos
const child1 = new Person("Sebastian Miranda", "06/05/1991");
const child2 = new Person("Santiago Miranda", "14/11/2002");

parent1.addChild(child1);
parent1.addChild(child2);

grandParent.addChild(parent1);
grandParent.addChild(parent2);

console.log("Pre-Order Traversal:");
printPreOrder(grandParent);

console.log("\nPost-Order Traversal:");
printPostOrder(grandParent);

console.log("\nIn-Order Traversal:");
printInOrder(grandParent);

// Función para calcular la altura de un árbol binario
function calculateHeight(person) {
    if (person === null) {
        return 0; // Un árbol vacío tiene altura 0
    }

    // Calcula la altura de cada hijo
    let maxHeight = 0;
    for (let child of person.children) {
        maxHeight = Math.max(maxHeight, calculateHeight(child));
    }

    // La altura del árbol es la altura máxima de los hijos + 1 (por el nodo actual)
    return maxHeight + 1;
}
console.log("Altura del árbol genealógico:");
console.log(calculateHeight(grandParent));
