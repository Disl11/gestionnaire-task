export const createAndAddElement = (
  tag,
  parent,
  content = "",
  attributes = {},
  beforeElement = null
) => {
  const newElement = document.createElement(tag);

  if (content !== null && content !== undefined) {
    newElement.textContent = String(content);
  }

  for (const cle in attributes) {
    newElement.setAttribute(cle, attributes[cle]);
  }

  if (beforeElement && parent.contains(beforeElement)) {
    parent.insertBefore(newElement, beforeElement);
  } else {
    parent.appendChild(newElement);
  }

  return newElement;
};
