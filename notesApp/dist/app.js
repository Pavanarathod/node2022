import { printMe } from "./utils";
import { validateEmail } from "./validate";
const command = process.argv[2];
printMe();
console.log(validateEmail("hello@gmail.com"));
console.log(process.argv[2]);
