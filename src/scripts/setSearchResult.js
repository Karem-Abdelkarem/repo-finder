import { cardsElement, searchInput } from "./elements";

export const setSearchResult = (data) => {
  let result = "";

  if (data?.length === 0) {
    result = "<p>No Result Found.</p>";
  } else if (data === null) {
    result = "";
  } else if (data?.length) {
    data.map((item) => {
      result += `
    <article class="card">
        <img class="img" src="${item.avatar_url}" alt="user image" loading="lazy">
        <h2 class="name">${item.login}</h2>
      </article>
    `;
    });
  }

  cardsElement.innerHTML = result;
  searchInput.value = "";
};
