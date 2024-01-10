/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Teacher.ts" />



// cTeacher object
const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};


export const cpp = new Subjects.Cpp(cTeacher);
export const java = new Subjects.Java(cTeacher);
export const react = new Subjects.React(cTeacher);



// Cpp Subject
cpp.setTeacher(cTeacher);
console.log("C++:");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java Subject
java.setTeacher(cTeacher);
console.log("\nJava:");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React Subject
react.setTeacher(cTeacher);
console.log("\nReact:");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());