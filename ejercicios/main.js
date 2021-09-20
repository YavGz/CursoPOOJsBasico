const miguel = new freeStudent({
  name: "Miguel",
  email: "miguelin@gmail.com",
  userName: "Miguelon",
  learningPaths: [
    SchoolWeb,
    EnglishSchool
  ],
});

const javi = new expertStudent({
  name: "Javier Gutierrez",
  email: "jav@gmail.com",
  userName: "Yav Gz",
  learningPaths: [
    SchoolWeb,
    EnglishSchool
  ],
  approvedCourses: [
    cursoDefHTML,
    cursoPractHTML,
    cursoProgBasica,
    cursoEstrategiasInglés,
  ]
});


const freddy = new teacherStudent({
  name: "Freddy Vega",
  email: "freddy@gmail.com",
  userName: "Freddier",
  twitter: "@Freddier",
});
