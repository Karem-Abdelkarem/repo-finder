import { messageElement } from "./elements";

export const setMessage = (message) => {
  messageElement.innerText = message ? `*${message}` : "";
};
