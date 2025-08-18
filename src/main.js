import "./style.scss";
import {
  buttonElement,
  searchInput,
  userInputElement,
} from "./scripts/elements";
import { performSearch } from "./scripts/performSearch";

buttonElement.addEventListener("click", (e) => {
  e.preventDefault();
  performSearch(searchInput.value, userInputElement.checked);
});
