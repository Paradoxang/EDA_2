
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Función para fusionar las dos listas y luego organizar
function mergeAndSortLists(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;
    
    // Ascendente
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
    if (list1 !== null) {
        current.next = list1;
    } else if (list2 !== null) {
        current.next = list2;
    }
    return reverseList(dummy.next);
}

//Función para invertir la lista ya ordenada
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

function createLinkedList(arr) {
    let dummy = new ListNode(-1);
    let current = dummy;

    for (let i = 0; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return dummy.next;
}

function printLinkedList(head) {
    let current = head;
    let result = [];
    
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }

    console.log(result.join(" -> "));
}

//implementación de ejemplo
let list1 = createLinkedList([9, 7, 5, 3, 1]);  // Lista de mayor a menor
let list2 = createLinkedList([10, 8, 6, 4, 2]); // Lista de mayor a menor

console.log("Lista 1 (Mayor a Menor):");
printLinkedList(list1);

console.log("Lista 2 (Mayor a Menor):");
printLinkedList(list2);

let mergedList = mergeAndSortLists(list1, list2);

console.log("Lista fusionada y ordenada (Menor a Mayor):");
printLinkedList(mergedList);
