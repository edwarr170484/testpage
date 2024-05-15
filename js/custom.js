let menu_items = [...document.getElementsByClassName("menu__item")];

if (menu_items) {
  menu_items.forEach((item, index, items) => {
    console.log(items);

    item.addEventListener("click", function (event) {
      items.forEach((item) => {
        item.classList.remove("active");
      });
      event.target.classList.add("active");
    });
  });
}
