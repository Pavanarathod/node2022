import { API, USER_KEY } from "./config/config";
import fetch from "node-fetch";

const get = async () => {
  const data = await fetch(
    `${API}?access_key=${USER_KEY}&query=12.120000, 76.680000`
  );
  const result = await data.json();
  console.log(result);
};

get();
