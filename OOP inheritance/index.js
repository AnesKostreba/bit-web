class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    getfullName(){
        return this.name+' '+this.surname;
    }
}

class Employee extends Person{
    constructor(name,surname,job,salary){
        super(name,surname);
        this.job = job;
        this.salary = salary;
    }

    getData(){
        return super.getfullName() +' '+this.job+' '+this.salary;
    }

    getSalary(){
        return this.salary;
    }
    increaseSalary(){
        return this.salary+(this.salary/10);
    }
}


class Developer extends Employee{
    constructor(name,surname,job,salary,specialization){
        super(name,surname,job,salary);
        this.specialization = specialization;
    }

    getSpecialization(){
        for(var i=0;i<this.Developer.length;i++){
            console.log(Developer[i]);
        }

        return Developer[i];
    }
}



class Manager extends Employee{
    constructor(name,surname,job,salary,department){
        super(name,surname,job,salary);
        this.department = department;
    }
    getDepartment(){
        return this.department;
    }
    changeDepartment(department){
        this.department = department;
    }
}

var manager = new Manager("Jovan","Davidovic","Student",143000,"any");

manager.changeDepartment("Nesto");
console.log(manager.getDepartment());

var n = new Developer("Anes",'Kostreba','Front End Developer',500000,"DB");

console.log(n.getSpecialization());


var employee = new Employee('Anes','Kostreba','Front End Developer',500000);
console.log(employee.getData()); 
console.log(employee.increaseSalary());
