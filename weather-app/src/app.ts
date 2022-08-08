import { API, USER_KEY } from "./config/config";
import fetch from "node-fetch";

const get = async () => {
  const data = await fetch(
    `${API}?access_key=${USER_KEY}&query=13.929930,75.568100&units=f`
  );
  const result = await data.json();
  console.log(result);
  console.log(
    `It is currently ${result.current.temperature} degrees out. There is ${result.current.feelslike}% chance of rain.`
  );
};

get();
