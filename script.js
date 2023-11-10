const all = document.getElementsByTagName("*");

var textNodes = [];

for (var i = 0; i < all.length; i++) {
  const element = all[i];

  if (element?.tag === "SCRIPT" || element?.tag === "STYLE" || element?.tag === "HEAD" || element?.tag === "NOSCRIPT") {
    continue;
  }

  for (const child of element.childNodes) {
    if (child.nodeType === 3) {
      textNodes.push(child);
    }
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
