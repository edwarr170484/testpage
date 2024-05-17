function addClickEvent(elements) {
  let menuToggler = document.getElementById("menu-toggler");

  if (elements) {
    elements.forEach((item, index, items) => {
      item.addEventListener("click", function (event) {
        items.forEach((item) => {
          item.classList.remove("active");
        });
        event.target.classList.add("active");
        menuToggler.setAttribute("data-after", event.target.innerHTML);
      });
    });
  }
}

let menu_items = [...document.getElementsByClassName("menu__item")];
let tabs = [...document.getElementsByClassName("tabs__item")];

addClickEvent(menu_items);
addClickEvent(tabs);

let validate = {
  text(control) {
    return control.value && true;
  },
  email(control) {
    let emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g;

    return this.text(control) && emailRegex.test(control.value);
  },
  textarea(control) {
    return this.text(control);
  },
};

document.getElementById("form").onsubmit = function (event) {
  let controls = [...event.target.children];
  let error = false;

  controls.forEach((control) => {
    if (control.required) {
      if (!validate[control.type](control)) {
        control.classList.add("form__control_error");
        error = true;
      } else {
        control.classList.remove("form__control_error");
      }
    }
  });

  if (!error) {
    this.submit();
  }

  return false;
};

document
  .getElementById("menu-toggler")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    let menu = document.getElementById("menu");
    menu.classList.toggle("opened");
  });
document.body.addEventListener("click", function () {
  let menu = document.getElementById("menu");
  menu.classList.remove("opened");
});
