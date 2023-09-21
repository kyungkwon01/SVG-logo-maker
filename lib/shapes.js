class Shape {
	constructor(color) {
		this.color = color;
	}
}

class Circle extends Shape {
	constructor(color) {
		super(color);
	}

	render() {
		return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
	}
}

class Triangle extends Shape {
	constructor(color) {
		super(color);
	}

	render() {
		return `<polygon points="150,20 220,170 80,170" fill="${this.color}" />`;
	}
}

class Square extends Shape {
	constructor(color) {
		super(color);
	}

	render() {
		return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
	}
}

module.exports = {
	Circle,
	Triangle,
	Square,
};
