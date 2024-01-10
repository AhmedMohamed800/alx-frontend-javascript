interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: "Dinamow",
    lastName: "Bn Shawerma",
    age: 40 / 2,
    location: "Alxanderia"
}

const studentTwo: Student = {
  firstName: "Noor",
  lastName: "Emad",
  age: 15,
  location: "Cairo",
};

const studentsList: Array<Student> = [studentOne, studentTwo];


// render table
const thead: HTMLHeadElement = document.createElement('thead');
const headerRow: HTMLTableRowElement = document.createElement('tr');
const table: HTMLTableElement = document.createElement("table");
const body: HTMLBodyElement = document.querySelector('body');

["firstName", "location"].forEach((key) => {
  const th: HTMLTableCellElement = document.createElement("th");
  th.textContent = key;
  headerRow.appendChild(th);
});


thead.appendChild(headerRow);
table.appendChild(thead);

for (const student of studentsList) {
    const tr: HTMLTableRowElement = document.createElement("tr");

    const tdFirstName: HTMLTableCellElement = document.createElement("td");
    tdFirstName.textContent = student.firstName;
    tr.appendChild(tdFirstName);

    const tdLocation: HTMLTableCellElement = document.createElement("td");
    tdLocation.textContent = student.location;
    tr.appendChild(tdLocation);

    table.appendChild(tr);
}


body.appendChild(table);