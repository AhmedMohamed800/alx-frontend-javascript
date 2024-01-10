interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student_one:Student = {
    firstName: "Dinamow",
    lastName: "Bn Shawerma",
    age: 40 / 2,
    location: "Alxanderia"
}

const student_two: Student = {
  firstName: "Noor",
  lastName: "Emad",
  age: 15,
  location: "Cairo",
};

const studentsList: Array<Student> = [student_one, student_two];


// render table
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const table = document.createElement('table');
const body = document.querySelector('body');

["firstName", "location"].forEach((key) => {
  const th = document.createElement("th");
  th.textContent = key;
  headerRow.appendChild(th);
});


thead.appendChild(headerRow);
table.appendChild(thead);

for (const student of studentsList) {
    const tr = document.createElement('tr');

    const tdFirstName = document.createElement('td');
    tdFirstName.textContent = student.firstName;
    tr.appendChild(tdFirstName);

    const tdLocation = document.createElement('td');
    tdLocation.textContent = student.location;
    tr.appendChild(tdLocation);

    table.appendChild(tr);
}


body.appendChild(table);