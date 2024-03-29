//BMI Calculator
import inquirer from "inquirer"
const ask = [
    {type: 'number', name: 'weight', message: 'weight(kg):'},
    {type: 'number', name: 'height', message:'height(m):'},
];
const calculateBMI = (weight: number, height: number): number => weight/(height*height);
const bmiCalculator = async () => {
    const {weight,height} = await inquirer.prompt(ask);
    const bmi = calculateBMI(weight, height);

    console.log(`Your BMI is: ${calculateBMI(weight,height).toFixed(2)}`)

if (bmi < 18.5){
    console.log("UNDERWEIGHT");
}
else if  (bmi >= 18.5 && bmi < 25){
    console.log("NORMAL");
}
else if (bmi >= 25 && bmi < 30){
    console.log("OVERWEIGHT");
}
else if (bmi >= 30 && bmi < 40){
    console.log("OBESE");
}
else {
    console.log("EXTREMELY OBESE");
}
};
bmiCalculator();