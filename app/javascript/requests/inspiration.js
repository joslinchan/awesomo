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
    .then(
      res => res.json()
    );
  },
  destroy(id) {
    return fetch(`${BASE_URL}/inspirations/${id}`, {
      method: "DELETE",
      credentials: "include"
    })
    .then(
      res => res.json()
    );
  },
  search(term) {
    return fetch(`${BASE_URL}/inspirations/search?query=${term}`, {
      credentials: "include"
    })
    .then(
      res => res.json()
    );
  }
};

export default Inspiration;
