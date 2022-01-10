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
