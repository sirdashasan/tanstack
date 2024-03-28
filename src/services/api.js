import axios from "axios";

export const getUsers = async () => {
  let data = [];
  await axios.get("https://reqres.in/api/users").then((res) => {
    data = res.data.data;
  });
  return data;
};
