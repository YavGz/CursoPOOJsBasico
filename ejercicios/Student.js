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
  }
}