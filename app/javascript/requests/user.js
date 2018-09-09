import {BASE_URL} from "./config";

const User = {
  current() {
      return fetch(`${BASE_URL}/users/current`, {
        credentials: "include"
      })
      .then(
        res => res.json()
      );
    },
  create(params) {
    return fetch(`${BASE_URL}/users`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
    .then(
      res => res.json()
    );
  },
}

export default User;
