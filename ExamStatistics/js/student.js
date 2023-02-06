class Student{
    constructor(name,lastname){
        this.studentName = name;
        this.studentLastName = lastname;
    }
    getStudentData(){
        return this.studentName +" "+this.studentLastName;
    }
};