function addClickEvent(elements) {
  if (elements) {
    elements.forEach((item, index, items) => {
      item.addEventListener("click", function (event) {
        items.forEach((item) => {
          item.classList.remove("active");
        });
        event.target.classList.add("active");
      });
    });
  }
}

let menu_items = [...document.getElementsByClassName("menu__item")];
let tabs = [...document.getElementsByClassName("tabs__item")];

addClickEvent(menu_items);
addClickEvent(tabs);