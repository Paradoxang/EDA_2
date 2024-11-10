// Nodo Personaa
class Personaa {
    constructor(nombre, edad, ciudad) {
      this.nombre = nombre;
      this.edad = edad;
      this.ciudad = ciudad;  // Reference to a Ciudad node
    }
  }
  
  // Nodo Ciudad
  class Ciudad {
    constructor(nombre) {
      this.nombre = nombre;
      this.civil = [];  // List of residents who live in this Ciudad
    }
  
    // Añadir persona a ciudad
    addResident(persona) {
      this.civil.push(persona);
    }
  }
  
  // Graph Clase para manejar ciudades y civiles
  class Graph {
    constructor() {
      this.ciudades = new Map();  // Map to store cities by name
      this.civil = [];            // List of all people in the graph
    }
  
    // Add a city to the graph
    addCiudad(ciudadnombre) {
      const ciudad = new Ciudad(ciudadnombre);
      this.ciudades.set(ciudadnombre, ciudad);
      return ciudad;
    }
  
    // Añadir persona y asignar a ciudad
    addPersona(nombre, edad, ciudadnombre) {
      const ciudad = this.ciudades.get(ciudadnombre);
      if (!ciudad) {
        console.log(`Ciudad '${ciudadnombre}' not found!`);
        return;
      }
      const persona = new Personaa(nombre, edad, ciudad);
      ciudad.addResident(persona);  // Link the persona to the ciudad
      this.civil.push(persona);
    }
  
    // Printeo de toda persona de una ciudad especifica
    printResidents(ciudadnombre) {
      const ciudad = this.ciudades.get(ciudadnombre);
      if (!ciudad) {
        console.log(`Ciudad '${ciudadnombre}' not found!`);
        return;
      }
  
      if (ciudad.civil.length === 0) {
        console.log(`No hay residentes en: ${ciudadnombre}.`);
      } else {
        console.log(`Residentes de: ${ciudadnombre}:`);
        ciudad.civil.forEach((persona, index) => {
          console.log(`${index + 1}. Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
        });
      }
    }
  }
  
  // Creamos Grafo
  const myGraph = new Graph();
  
  // Añadimos ciudades
  myGraph.addCiudad("Bogotá");
  myGraph.addCiudad("Medellín");
  myGraph.addCiudad("Cali");
  myGraph.addCiudad("Cartagena");
  
  // Añadimos ciudadanos a las ciudades
  myGraph.addPersona("Juan", 25, "Bogotá");
  myGraph.addPersona("Sara", 30, "Medellín");
  myGraph.addPersona("Miguel", 35, "Cali");
  myGraph.addPersona("Ana", 22, "Cartagena");
  
  // Printeamos
  myGraph.printResidents("Bogotá");
  myGraph.printResidents("Medellín");
  myGraph.printResidents("Cali");
  myGraph.printResidents("Cartagena");
  myGraph.printResidents("Barranquilla");  // City that doesn't exist
  