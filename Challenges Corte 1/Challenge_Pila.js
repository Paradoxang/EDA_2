class Book {
  constructor(nombre, autor, editorial, isbn) {
    this.nombre = nombre;
    this.autor = autor;
    this.editorial = editorial;
    this.isbn = isbn;
  }
}
class BookStack{
  constructor(){
    this.stack={};
    this.count=0;
  }

 push(element){
  this.stack[this.count] = element;
  this.count++;
  return this.stack;
}

 pop() {
  this.count--;
  const element = this.stack[this.count];
  delete this.stack[this.count];
  return element;
}

 peek(){
  return this.stack[this.count - 1];
}

 size(){
  return this.count;
}

 print(){
  console.log(this.stack);
}
}

const bookStack = new BookStack();
const book1 = new Book('The Final Empire', 'Brandon Sanderson', 'NOVA', '9781234567897');
console.log(bookStack.size()); // 0
console.log(bookStack.push(book1)); // { '0': Book { nombre: 'The Final Empire', autor: 'Brandon Sanderson', editorial: 'NOVA', isbn: '9781234567897' } }
console.log(bookStack.size()); // 1
console.log(bookStack.peek()); // Book { nombre: 'The Final Empire', autor: 'Brandon Sanderson', editorial: 'NOVA', isbn: '9781234567897' }
console.log(bookStack.pop()); // Book { nombre: 'The Final Empire', autor: 'Brandon Sanderson', editorial: 'NOVA', isbn: '9781234567897' }
console.log(bookStack.size()); // 0
