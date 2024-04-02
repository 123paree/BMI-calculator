#! /usr/bin/env node
//BMI Calculator
import inquirer from "inquirer";
import chalk from "chalk";
const ask = [
    { type: 'number', name: 'weight', message: 'weight(kg):' },
    { type: 'number', name: 'height', message: 'height(m):' },
];
const calculateBMI = (weight, height) => weight / (height * height);
const bmiCalculator = async () => {
    const { weight, height } = await inquirer.prompt(ask);
    const bmi = calculateBMI(weight, height);
    console.log(`Your BMI is: ${calculateBMI(weight, height).toFixed(2)}`);
    if (bmi < 18.5) {
        console.log(chalk.blue("UNDERWEIGHT"));
    }
    else if (bmi >= 18.5 && bmi < 25) {
        console.log(chalk.greenBright("NORMAL"));
    }
    else if (bmi >= 25 && bmi < 30) {
        console.log(chalk.yellowBright("OVERWEIGHT"));
    }
    else if (bmi >= 30 && bmi < 40) {
        console.log(chalk.red("OBESE"));
    }
    else {
        console.log(chalk.redBright("EXTREMELY OBESE"));
    }
};
bmiCalculator();
