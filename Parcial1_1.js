// Definición de un nodo de la lista enlazada
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Función para fusionar dos listas enlazadas ordenadas de mayor a menor
// y devolver una nueva lista ordenada de menor a mayor
function mergeAndSortLists(list1, list2) {
    let dummy = new ListNode(-1); // Nodo ficticio para facilitar la operación
    let current = dummy;
    
    // Fusionar las listas en orden ascendente
    while (list1 !== null && list2 !== null) {
        if (list1.value >= list2.value) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Si quedan nodos en alguna de las listas, se añaden al final
    if (list1 !== null) {
        current.next = list1;
    } else if (list2 !== null) {
        current.next = list2;
    }

    // La lista resultante está ahora en orden ascendente, pero necesitamos invertirla
    return reverseList(dummy.next);
}

// Función para invertir una lista enlazada
function reverseList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

// Función para crear una lista enlazada desde un array
// El array se asume que está ordenado de mayor a menor
function createLinkedList(arr) {
    let dummy = new ListNode(-1);
    let current = dummy;

    for (let i = 0; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return dummy.next;
}

// Función para imprimir la lista enlazada
function printLinkedList(head) {
    let current = head;
    let result = [];
    
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }

    console.log(result.join(" -> "));
}

// Ejemplo de uso
let list1 = createLinkedList([9, 7, 5, 3, 1]);  // Lista de mayor a menor
let list2 = createLinkedList([10, 8, 6, 4, 2]); // Lista de mayor a menor

console.log("Lista 1 (Mayor a Menor):");
printLinkedList(list1);

console.log("Lista 2 (Mayor a Menor):");
printLinkedList(list2);

let mergedList = mergeAndSortLists(list1, list2);

console.log("Lista fusionada y ordenada (Menor a Mayor):");
printLinkedList(mergedList);
