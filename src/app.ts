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
