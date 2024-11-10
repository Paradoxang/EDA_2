//Las Arrow Functions ofrecen una sintaxis más concisa y un comportamiento de this más predecible, 
//ya que no tienen su propio this, arguments, super, o new.target. Sin embargo, las Regular Functions 
//siguen siendo necesarias cuando se necesita el comportamiento clásico de this, arguments, o la capacidad 
//de usar la función como un constructor con new.

//1.SINTAXIS

//ArrowFunctions:
const add = (a, b) => a + b;

//RegularFunction:
function add(a, b) {
    return a + b;
  }

//2.Binding de "this" 

//Arrow
function Person() {
    this.age = 0;
  
    setInterval(() => {
      this.age++; // `this` se refiere al objeto `Person`
    }, 1000);
  }
  
  const p = new Person();
  
//Regular
function Person() {
    this.age = 0;
  
    setInterval(function() {
      this.age++; // `this` no se refiere al objeto `Person`, sino al contexto de la llamada
    }, 1000);
  }
  
  const p = new Person();

//3."arguments" Object

//Arrow, No tienen el objeto arguments. Si se necesita acceder a los argumentos, se puede usar el operador rest ...args para capturarlos.
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2, 3)); // 6

//Regular, Tienen acceso al objeto arguments, que es una pseudo-matriz que contiene todos los argumentos pasados a la función.

function sum() {
    return Array.from(arguments).reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sum(1, 2, 3)); // 6

  
//4.Uso de "new"

//Arrow, No pueden ser usadas como constructores y no pueden ser llamadas con new. No tienen el método interno [[Construct]]
const Person = () => {};
const p = new Person(); // Error: Person is not a constructor

//Regular, Pueden ser usadas como constructores. Cuando se invocan con new, crean una nueva instancia de un objeto.
function Person() {}
const p = new Person(); // p es una nueva instancia de Person

//5."property" Property

//Arrow Functions: No tienen la propiedad prototype.

//Regular Functions: Tienen la propiedad prototype, que es utilizada cuando se crean instancias con new.




