const Natalia = {/*Objeto literal*/
  name: "natalia",
  age: 20,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Practico de HTML y CSS"
  ],

  //Creando un metodo
  // aprobarCurso: function (){
    //ambas opciones son validas
  // },
  aprobarCurso(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
  }

}


// Crear un prototipo

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;

  /* Metodo dento del objeto
  this.aprobarCurso = function(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  } */
}

// Metodo fuera del objeto. 

Student.prototype.aprobarCurso = function(nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student(
  "Juanita Alejandra",
  16, 
  [
    "Introduccion a los videojuegos"
  ]
);


//Prororipos con la sintaxis de clases

class Student2 {
  constructor( {
    name,
    age,
    cursosAprobados = [],
    email,
    facebook
  }) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    this.email = email;
    this.facebook = facebook
  }

  aprobarCurso(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso)
  }

}

const miguel = new Student2({
  name: "Miguel", 
  email: "ejemplo@email.com",
  age: 20
});

