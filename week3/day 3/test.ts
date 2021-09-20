interface User {
	name: string;
	id: number;
}

const user: User = {
	name: "Hayes",
	id: 0,
};

const user2: User = {
	name: "joe145",
	id: 1,
};

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 6000n;

let numArray: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

let someValue1: unknown = "this is a string";

let strLength1: number = (someValue1 as string).length;

let someValue2: unknown = "this is a string";

let strLength2: number = (<string>someValue2).length;

interface LabeledValue {
	label: string;
}

function printLabel(labeledObj: LabeledValue) {
	console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
