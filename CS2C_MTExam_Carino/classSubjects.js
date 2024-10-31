class UserSubject {
  constructor(subjectTitle, classSchedule, classroom, classInstructor, studentName) {
    this.subjectTitle = subjectTitle;
    this.classSchedule = classSchedule;
    this.classroom = classroom;
    this.classInstructor = classInstructor;
    this.studentName = studentName;
  }

  user() {
    console.log(${this.studentName} is currently enrolled in ${this.subjectTitle} with a class schedule of ${this.classSchedule} at room ${this.classroom}. The instructor for the subject is ${this.classInstructor});
  }
}

let subjectTitle = prompt("Enter the subject title:");
let classSchedule = prompt("Enter the class schedule (e.g., MWF 8-10 AM):");
let classroom = prompt("Enter the classroom:");
let classInstructor = prompt("Enter the class instructor's name:");
let studentName = prompt("Enter your name:");

let userSubject = new UserSubject(subjectTitle, classSchedule, classroom, classInstructor, studentName);
userSubject.user();