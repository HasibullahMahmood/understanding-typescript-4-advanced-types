// intersection
type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

const e1: Admin & Employee = {
	name: 'Ahmed',
	privileges: ['create-server'],
	startDate: new Date(),
};

// types
// primitive type -> typeof
// object -> in
// class -> instanceof

// discriminated unions

interface Bird {
	type: 'bird';
	flyingSpeed: number;
}

interface Horse {
	type: 'horse';
	runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
	let speed: number;
	switch (animal.type) {
		case 'bird':
			speed = animal.flyingSpeed;
			break;
		case 'horse':
			speed = animal.runningSpeed;
			break;
	}
	console.log('Moving at speed: ' + speed);
}

moveAnimal({ type: 'horse', runningSpeed: 1000 });

// const userInput = document.getElementById('user-input') as HTMLInputElement;
const userInput = <HTMLInputElement>document.getElementById('user-input');

userInput.value = 'Some input';

interface ErrorsContainer {
	[key: string]: string;
}

const myError: ErrorsContainer = {
	email: 'Please enter a valid email!',
	username: 'username must start with a number!',
};

type Combinable = string | number;
function add(a: number, b: number): number; // function overloads
function add(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString();
	}
	return a + b;
}

const result = add(5, 10);

const data = null;
// ?? means: if data is undefined or null then default otherwise data
console.log(data ?? 'DEFAULT');
