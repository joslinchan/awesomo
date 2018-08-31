import {BASE_URL} from "./config";

const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
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
  destroy() {
    return fetch(`${BASE_URL}/session`, {
      method: "DELETE",
      credentials: "include"
    })
    .then(
      res => res.json()
    );
  }
};

export default Session;
