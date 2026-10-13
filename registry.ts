type Student = {
	id: number;
	firstName: string;
	lastName: string;
	age: number;
	isActive: boolean;
	studyPoints: number;
};

let students: Student[] = [
	{ id: 101, firstName: "Alice", lastName: "Smith", age: 19, isActive: true, studyPoints: 80 },
	{ id: 102, firstName: "Bob", lastName: "Jones", age: 20, isActive: false, studyPoints: 55 },
	{ id: 103, firstName: "Charlie", lastName: "Brown", age: 18, isActive: true, studyPoints: 95 },
	{ id: 104, firstName: "Diana", lastName: "Lee", age: 21, isActive: true, studyPoints: 70 }
];

console.log("\nPart A");
console.log(students[0].firstName, students[0].lastName);
console.log(students[students.length - 1].id);
students[0]["isActive"]; // Bracket notation
// students[0] is the entire first student
// students[0].firstName is the first name of the student
// students.length is the number of students.

console.log("\nPart B");
students.push({
	id: 105,
	firstName: "Eve",
	lastName: "Davis",
	age: 19,
	isActive: true,
	studyPoints: 88
});
students[1].studyPoints = 65;
students[2].lastName = "Wilson";
for (const student of students) console.log(`#${student.id} ${student.firstName} ${student.lastName}`);

console.log("\nPart C");
console.log("Students above 80:")
let active = 0;
let inactive = 0;
let totalAge = 0;
let totalActivePoints = 0;
let topStudents: Student[] | null = null;
for (const student of students) {
	if (student.isActive) active++;
	else inactive++;

	totalAge += student.age;
	if (student.isActive) totalActivePoints += student.studyPoints;
	if (!topStudents || topStudents[0].studyPoints < student.studyPoints) {
		topStudents = [student];
	} else if (topStudents[0].studyPoints === student.studyPoints) {
		topStudents.push(student);
	}
	if (student.studyPoints >= 80) console.log(student.firstName, student.lastName);
}
console.log(`Active: ${active}  Inactive: ${inactive}`);
const averageAge = students.length ? totalAge / students.length : 0;
console.log(`Total age: ${totalAge}  Average Age: ${averageAge}`, students.length ? "" : "(No students)");
const averagePoints = active ? totalActivePoints / active : 0;
console.log(`Average points: ${averagePoints}`, active ? "" : "(No active students)");
if (topStudents) {
	console.log(`Highest study points (${topStudents[0].studyPoints}):`);
	for (const student of topStudents) console.log(student.firstName, student.lastName);
} else {
	console.log("No top students");
}

console.log("\nPart D");

let s103: Student | null = null;
for (const student of students) {
	if (student.id === 103) s103 = student;
}
s103 ? console.log(s103?.firstName, s103.lastName) : console.log("Student 103 not found");

let s999: Student | null = null;
for (const student of students) {
	if (student.id === 999) s999 = student;
}
s999 ? console.log(s999?.firstName, s999.lastName) : console.log("Student 999 not found");

let newStudent: Student = {
	id: 106,
	firstName: "New",
	lastName: "Student",
	age: 18,
	isActive: false,
	studyPoints: 0,
}

for (let i = 0; i <= students.length; i++) {
	// One extra loop at the end. If no student caused a break, then add the new student.
	if (i === students.length) {
		students.push(newStudent);
		console.log(`Added student with id ${newStudent.id}`);
		break;
	}
	if (students[i].id === newStudent.id) {
		console.log(`Id ${newStudent.id} already exists`);
		break;
	}
}

for (const student of students) {
	if (student.age < 0) {
		console.warn(`Student #${student.id} has age <0`);
	}
	if (student.studyPoints < 0 || student.studyPoints > 100) {
		console.warn(`Student #${student.id} has studyPoints outside 0-100`);
	}
}

// Part E
// "nineteen" for age gives:
//   TS2322: Type 'string' is not assignable to type 'number'.
//     The expected type comes from property 'age' which is declared here on type 'Student'
// Omiting isActive gives
//   TS2741: Property 'isActive' is missing in type '{ id: number; firstName: string; lastName: string; age: number; studyPoints: number; }' but required in type 'Student'.
// students[0].studyPoints = "excellent" gives
//   TS2322: Type 'string' is not assignable to type 'number'.
// because studyPoints should be a number (between 0 and 100);
