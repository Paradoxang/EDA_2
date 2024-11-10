//Clase de nodo para la single list
class Node {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.next = null; // Points to the next node
  }
}

// Clase
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  // Se añadé un nodo al final de la lista
  addNode(title, description) {
    const newNode = new Node(title, description);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Printeo para todos los Todo's
  printTodos() {
    let current = this.head;
    let count = 1;
    while (current) {
      console.log(`TODO #${count}:`);
      console.log(`Title: ${current.title}`);
      console.log(`Description: ${current.description}`);
      console.log("----------------------------");
      current = current.next;
      count++;
    }
  }
}

// Creamos ejemplos
const singlyTodoList = new SinglyLinkedList();
singlyTodoList.addNode("Compra Viveres", "Necesito: leche, dos tomates y una libra de azúcar");
singlyTodoList.addNode("Estudiar para los parciales", "Realiza el metodo pomodoro para la matería de Redes de Datos");
singlyTodoList.addNode("GYM", "Ir al gimnasio");

console.log("Singly Linked List:");
singlyTodoList.printTodos();
