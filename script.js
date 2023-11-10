const all = document.getElementsByTagName("*");

var textNodes = [];

for (var i = 0; i < all.length; i++) {
  const element = all[i];

  const excludedTags = [
    "SCRIPT", "STYLE", "HEAD", "META", "TITLE", "INPUT", "TEXTAREA", "FORM",
    "CODE"
  ];

  if (excludedTags.includes(element?.tagName)) {
    continue;
  }

  for (const child of element.childNodes) {
    if (child.nodeType === 3)
      textNodes.push(child);
  }
}

for (const textNode of textNodes) {
  const innerHTML = textNode.nodeValue.replace(new RegExp("epic", "ig"), '<span class="epicExtensionEpicText">epic</span>');
  const div = document.createElement('div');
  textNode.parentNode.insertBefore(div, textNode);
  div.insertAdjacentHTML('afterend', innerHTML);
  div.remove();
  textNode.remove();
}
