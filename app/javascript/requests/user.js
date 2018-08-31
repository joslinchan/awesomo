import {BASE_URL} from "./config";

const User = {
  current() {
      return fetch(`${BASE_URL}/users/current`, {
        credentials: "include"
      })
      .then(
        res => res.json()
      );
    }
}

export default User;
