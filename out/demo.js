"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firstName = "pen4o";
const lastName = "min4ov";
const age = 30;
const hasGraduated = false;
const coursesTaken = ["dasda", "dsdasa", "ddsadsad"];
var toDoStatues;
(function (toDoStatues) {
    toDoStatues[toDoStatues["NotStarted"] = 0] = "NotStarted";
    toDoStatues[toDoStatues["inProgerss"] = 1] = "inProgerss";
    toDoStatues[toDoStatues["completed"] = 2] = "completed";
})(toDoStatues || (toDoStatues = {}));
// console.log(toDoStatues);
function printFullName(firstName, lastName, middleName) {
    const fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
    console.log(`Hello, ${fullName}`);
}
printFullName('Pen4o', 'Min4ov', 'Marin4ov');
//# sourceMappingURL=demo.js.map