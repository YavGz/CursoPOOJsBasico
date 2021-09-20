// import Comment from "./Comment" ;

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.twitter = twitter;
    this.instagram = instagram;
    this.facebook = facebook;
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;  
  };

  approveCourse (newCourse) {
    this.approvedCourses.push(newCourse)
  };

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    })
    comment.publicar();
  };

};


class freeStudent  extends Student{
  constructor(props){
    super(props);
  }

  approveCourse(newCourse){
    if (newCourse.isfree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(`Lo sentimos ${this.name}, solo puedes tomar cursos abiertos`)
    }
  }
}

class basicStudent extends Student{
  constructor(props){
    super(props);
  }

  approveCourse(newCourse){
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(`Lo sentimos ${this.name}, no puedes tomar cursos en inglés`)
    }
  }
}

class expertStudent  extends Student{
  constructor(props){
    super(props);
  }

  approveCourse(newCourse){
    this.approvedCourses.push(newCourse);
  }
}

class teacherStudent  extends Student{
  constructor(props){
    super(props);
  }

  approveCourse(newCourse){
    this.approvedCourses.push(newCourse);
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "Profesor"
    })
    comment.publicar();
  };

}