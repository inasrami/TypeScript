const firstName: string = "pen4o";
const lastName: string = "min4ov";
const age: number = 30;
const hasGraduated: boolean = false;

const coursesTaken: string[] = ["dasda", "dsdasa", "ddsadsad"];

enum toDoStatues {
  NotStarted,
  inProgerss,
  completed,
}

// console.log(toDoStatues);


function printFullName(firstName: string, lastName: string, middleName?: string): void{
 const fullName = middleName? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
 console.log(`Hello, ${fullName}`)
}
printFullName('Pen4o', 'Min4ov', 'Marin4ov')