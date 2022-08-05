import chalk from "chalk";
import validator from "validator";

export const validateEmail = function (email: string): string {
  const reuslt = validator.isEmail(email);
  if (!reuslt) {
    return chalk.bgRed.white(" Invalid email please check your email address ");
  }
  return chalk.bgGreenBright.white.bold(" Valid email address ");
};
