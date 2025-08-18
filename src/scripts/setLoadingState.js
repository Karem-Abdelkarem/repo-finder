import { loadingElement } from "./elements";
import { setSearchResult } from "./setSearchResult";

export const setLoadingState = (loadingStates) => {
  loadingElement.classList.toggle("hidden", !loadingStates);
  loadingStates && setSearchResult(null);
};
