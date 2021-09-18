class Comment {
  constructor({
    content, 
    studentName,
    studentRole = "studiante"
  }){
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole
    this.likes = 0
  }

  publicar () {
    
  }
}