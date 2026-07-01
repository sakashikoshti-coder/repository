
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  
  checkResult() {
    if (this.grade >= 40) {
      console.log(`${this.name} has passed with grade ${this.grade}.`);
    } else {
      console.log(`${this.name} has failed with grade ${this.grade}.`);
    }
  }
}


const student1 = new Student("Alice", 85);
const student2 = new Student("Bob", 35);

student1.checkResult(); 
student2.checkResult(); 