interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

type school = Director | Teacher
type subject = "Math" | "History";

export class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}


export function createEmployee(salary: number | string): school {
  if (Number(salary) < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}


export function isDirector(employee: school): employee is Director {
  return employee instanceof Director;
}

export function executeWork(executeWork: school):void {
  if(isDirector(executeWork)){
    console.log(executeWork.workDirectorTasks());
  } else{
    console.log(executeWork.workTeacherTasks());
  }
}


export function teachClass(todayClass: subject): string {
  if (todayClass === "Math"){
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History ";
  }
  return "false"
}

