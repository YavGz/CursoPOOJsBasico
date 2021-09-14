class Course {
  #name;
  constructor({
    name, 
    clases = []
  }){
    this.#name = name;
    this.clases = clases;
  }

  get name(){
    return this.#name;
  }

  set name(newName){
    if ( newName === "Curso pesimo de programacion basica") {
      console.error("Web... no")
    } else {
      this.#name = newName;
    }
  }
}


const cursoProgBasica = new Course ({
  name: "Curso gratis de Programación Basica",
  clases: [
   clase1ProgBasica,
   clase2ProgBasica,
   clase3ProgBasica,
   clase4ProgBasica,
   clase5ProgBasica,
  ]
});

const cursoDefHTML = new Course ({
  name: "Curso Definitivo de HTML y CSS",
  clases: [
    class1HTML,
    class2HTML,
    class3HTML,
    class4HTML,
    class5HTML
  ]
});

const cursoPractHTML = new Course ({
  name: "Curso Practico de HTML y CSS",
  clases: [
    class1HTML,
    class2HTML,
    class3HTML,
    class4HTML,
    class5HTML
  ]
});

const cursoEstrategiasInglés = new Course ({
  name: "Curso De estrategias para aprender Inglés Online",
  clases: [
   clase1EstrgtOnlineEng,
   clase2EstrgtOnlineEng,
   clase3EstrgtOnlineEng,
   clase6EstrgtOnlineEng,
   clase7EstrgtOnlineEng,
  ]
});

const cursoInglésPrincipiantes = new Course ({
  name: "Curso De Inglés para principiantes",
  clases: [
   class1English,
   class2English,
   class3English,
   class4English,
   class5English,
   class6English,
   class7English
  ]
});
