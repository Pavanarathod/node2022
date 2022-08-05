import validator from "validator";
import chalk from "chalk";
const validateEmail = function (email) {
    const reuslt = validator.isEmail(email);
    if (!reuslt) {
        return chalk.bgRed.white(" Invalid email please check your email address ");
    }
    return chalk.bgGreen.black.bold(" Valid email address ");
};
console.log(validateEmail("pavandasgmail.com"));
