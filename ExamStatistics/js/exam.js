class Exam {
  constructor(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
  }

  getExamInfo() {
    return this.subject.getSubjectName() + " " + this.student.getStudentData() + " " + this.grade;
  }

  hasPassed(grd) {
    if (grd > 5) {
      return true;
    } else {
      return false;
    }
  }

}

class Statistics {
  constructor() {
    this.failedStudents = [];
    this.passedStudents = [];
  };

  getTotalPassed() {
    return this.passedStudents.length;
  }

  getTotalFailed() {
    return this.failedStudents.length;
  }

  getTotalStudents() {
    return this.passedStudents.length + this.failedStudents.length;
  }
}