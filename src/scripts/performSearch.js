import { getMessage } from "./getMessage";
import { setLoadingState } from "./setLoadingState";
import { setMessage } from "./setMessage";
import { setSearchResult } from "./setSearchResult";

const USERS_API = "https://api.github.com/search/users?q=";

export const performSearch = (searchTerm, isUsersChecked) => {
  getMessage() && setMessage("");
  const queryType = isUsersChecked ? "+type:user" : "+type:org";

  if (!searchTerm.trim()) {
    setMessage("Please fill out the search field");
    return;
  }

  setLoadingState(true);

  fetch(`${USERS_API}${searchTerm}${queryType}`)
    .then((result) => result.json())
    .then((res) => setSearchResult(res.items))
    .finally(() => setLoadingState(false));
};
