import {BASE_URL} from "../requests/config";

const Search = {
  all() {
    return fetch(`${BASE_URL}/searches`, {
      credentials: "include"
    })
    .then(
      res => res.json()
    );
   }
};

export default Search;
