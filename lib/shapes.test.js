const { Circle, Square, Triangle } = require('./shapes');

// describe circle test
describe('Circle', () => {
	test('pass', () => {
		const color = 'blue';
		const currentShape = new Circle(color);
		expect(currentShape.render()).toBe(
			`<circle cx="150" cy="100" r="50" fill="${color}" />`
		);
	});
});

// describe triangle test
describe('Triangle', () => {
	test('pass', () => {
		const color = 'red';
		const currentShape = new Triangle(color);
		expect(currentShape.render()).toBe(
			`<polygon points="150,20 220,170 80,170" fill="${color}" />`
		);
	});
});

// describe square test
describe('Square', () => {
	test('pass', () => {
		const color = 'green';
		const currentShape = new Square(color);
		expect(currentShape.render()).toBe(
			`<rect x="100" y="50" width="100" height="100" fill="${color}" />`
		);
	});
});
