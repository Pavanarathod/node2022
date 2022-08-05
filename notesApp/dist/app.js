import validator from "validator";
import chalk from "chalk";
const validateEmail = function (email) {
    const reuslt = validator.isEmail(email);
    if (!reuslt) {
        return chalk.bgRed.white(" Invalid email please check your email address ");
    }
    return chalk.bgGreenBright.white.bold(" Valid email address ");
};
const command = process.argv[2];
if (command) {
    console.log(validateEmail(command));
}
console.log(process.argv[2]);
