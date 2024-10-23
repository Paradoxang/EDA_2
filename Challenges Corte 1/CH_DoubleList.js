
class DoublyNode {
    constructor(title, description) {
      this.title = title;
      this.description = description;
      this.next = null;   
      this.prev = null;    
    }
  }
  
  // Doubly Linked List class
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    addNode(title, description) {
      const newNode = new DoublyNode(title, description);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
  
    printTodosForward() {
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
  

    printTodosBackward() {
      let current = this.tail;
      let count = 1;
      while (current) {
        console.log(`TODO #${count}:`);
        console.log(`Title: ${current.title}`);
        console.log(`Description: ${current.description}`);
        console.log("----------------------------");
        current = current.prev;
        count++;
      }
    }
  }
  
  // Create and test Doubly Linked List
  const doublyTodoList = new DoublyLinkedList();
  doublyTodoList.addNode("Compra Viveres", "Necesito: leche, dos tomates y una libra de azúcar");
  doublyTodoList.addNode("Estudiar para los parciales", "Realiza el metodo pomodoro para la matería de Redes de Datos");
  doublyTodoList.addNode("GYM", "Ir al gimnasio");
  
  console.log("\nDoubly Linked List (Forward):");
  doublyTodoList.printTodosForward();
  
  