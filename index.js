// imports and defining required modules
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

// user prompt questions using inquirer

function createLogo() {
	inquirer
		.prompt([
			{
				type: 'list',
				name: 'userShape',
				message: 'Which shape would you like?',
				choices: ['Circle', 'Triangle', 'Square'],
			},
			{
				type: 'list',
				name: 'userShapeColor',
				message: 'Which color should the shape be?',
				choices: ['Red', 'Blue', 'Green', 'Black', 'White'],
			},
			{
				type: 'input',
				name: 'userThreeLetters',
				message: 'Enter three letters that you want in the SVG.',
				validate: (input) => {
					if (input.length === 3) {
						return true;
					}
					return 'Please enter three letters!';
				},
			},
			{
				type: 'list',
				name: 'userLetterColor',
				message: 'Which color should the text be?',
				choices: ['Red', 'Blue', 'Green', 'Black', 'White'],
			},
		])
		// defining svgContent with user's answers from inquirer prompt

		.then((answers) => {
			console.log(answers);
			const currentShape = new shapes[answers.userShape](
				answers.userShapeColor
			);
			const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${currentShape.getSvgCode()}
      <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" font-size="30" fill="${
			answers.userLetterColor
		}">${answers.userThreeLetters}</text>
    </svg>`;
			// write the SVG file using fs

			fs.writeFile('logo.svg', svgContent, (err) => {
				if (err) {
					console.log('Error writing SVG file', err);
				}
				console.log('SVG created');
			});
		});
}

createLogo();
