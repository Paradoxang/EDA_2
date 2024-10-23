class Persona {
    constructor(nombreCompleto, fechaNacimiento) {
      this.nombreCompleto = nombreCompleto; 
      this.fechaNacimiento = fechaNacimiento;
      this.hijos = [];
    }
  
    agregarHijo(hijo) {
      this.hijos.push(hijo);
    }
  }
  
  // Clase del Árbol Genealógico
  class ArbolGenealogico {
    constructor(raiz) {
      this.raiz = raiz;
    }
  
    // Recorrido en Pre-orden (Raíz -> Izquierda -> Derecha)
    preOrden(nodo) {
      if (!nodo) return;
      console.log(`Nombre: ${nodo.nombreCompleto}, Fecha de nacimiento: ${nodo.fechaNacimiento}`);
      nodo.hijos.forEach(hijo => {
        this.preOrden(hijo);
      });
    }
  
    // Recorrido en In-orden (Izquierda -> Raíz -> Derecha)
    inOrden(nodo) {
      if (!nodo) return;
      const mitad = Math.floor(nodo.hijos.length / 2);
      for (let i = 0; i < mitad; i++) {
        this.inOrden(nodo.hijos[i]);
      }
      console.log(`Nombre: ${nodo.nombreCompleto}, Fecha de nacimiento: ${nodo.fechaNacimiento}`);
      for (let i = mitad; i < nodo.hijos.length; i++) {
        this.inOrden(nodo.hijos[i]);
      }
    }
  
    // Recorrido en Post-orden (Izquierda -> Derecha -> Raíz)
    postOrden(nodo) {
      if (!nodo) return;
      nodo.hijos.forEach(hijo => {
        this.postOrden(hijo);
      });
      console.log(`Nombre: ${nodo.nombreCompleto}, Fecha de nacimiento: ${nodo.fechaNacimiento}`);
    }
  }
  
  // Crear las personas del árbol genealógico
  
  // Bisabuelos Paternos
  const bisabueloPaterno1 = new Persona("José García", "1920-06-15");
  const bisabuelaPaterna1 = new Persona("María Rodríguez", "1923-03-22");
  
  // Bisabuelos Maternos
  const bisabueloMaterno1 = new Persona("Antonio Pérez", "1918-02-10");
  const bisabuelaMaterna1 = new Persona("Lucía Fernández", "1921-12-05");
  
  // Abuelos Paternos
  const abueloPaterno = new Persona("Carlos García", "1950-08-25");
  const abuelaPaterna = new Persona("Ana López", "1952-11-11");
  
  // Abuelos Maternos
  const abueloMaterno = new Persona("Luis Pérez", "1948-09-30");
  const abuelaMaterna = new Persona("Elena Ramírez", "1950-04-20");
  
  // Padres
  const padre = new Persona("Miguel García", "1975-05-15");
  const madre = new Persona("Laura Pérez", "1978-07-25");
  
  // Hijo (Raíz del árbol)
  const hijo = new Persona("Santiago García Pérez", "2000-10-15");
  
  // Crear la estructura del árbol genealógico
  
  // Agregar padres del hijo
  padre.agregarHijo(hijo);
  madre.agregarHijo(hijo);
  
  // Agregar abuelos paternos y maternos a los padres
  abueloPaterno.agregarHijo(padre);
  abuelaPaterna.agregarHijo(padre);
  
  abueloMaterno.agregarHijo(madre);
  abuelaMaterna.agregarHijo(madre);
  
  // Agregar bisabuelos paternos y maternos a los abuelos
  bisabueloPaterno1.agregarHijo(abueloPaterno);
  bisabuelaPaterna1.agregarHijo(abueloPaterno);
  
  bisabueloMaterno1.agregarHijo(abueloMaterno);
  bisabuelaMaterna1.agregarHijo(abueloMaterno);
  
  // Crear el árbol genealógico
  const arbolFamilia = new ArbolGenealogico(hijo);
  
  // Imprimir el árbol genealógico en diferentes órdenes
  console.log("Recorrido en Pre-orden:");
  arbolFamilia.preOrden(arbolFamilia.raiz);
  
  console.log("\nRecorrido en In-orden:");
  arbolFamilia.inOrden(arbolFamilia.raiz);
  
  console.log("\nRecorrido en Post-orden:");
  arbolFamilia.postOrden(arbolFamilia.raiz);
  