window.addEventListener("click", (e) => {
  if (!e.ctrlKey)
    return;

  var element = e.target;

  if (element?.innerText?.toLowerCase().includes("epic")) {
    element.innerHTML = element.innerHTML.replace(new RegExp("epic", "ig"),
      '<span class="epicExtensionEpicText">epic</span>');
  }
});

// var all = document.getElementsByTagName("div");
//
// for (var i = 0; i < all.length; i++) {
//   var element = all[i];
// }
