import {BASE_URL} from "./config";

const Inspiration = {
  all() {
   return fetch(`${BASE_URL}/inspirations`, {
     credentials: "include"
   })
   .then(
     res => res.json()
   );
  },
  one(id) {
    return fetch(`${BASE_URL}/inspirations/${id}`, {
      credentials: "include"
    })
    .then (
      res => res.json()
    );
  },
  create(params) {
    return fetch(`${BASE_URL}/inspirations`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
    .then (
      res => re.json()
    );
  }
};

export default Inspiration;
