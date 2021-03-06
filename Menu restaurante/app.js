const menu = [
  {
    id: 1,
    title: "panquecas",
    category: "lanche rapido",
    price: 10.00,
    img: "./images/item-1.jpeg",
    desc: `panquecas americanas`,
  },
  {
    id: 2,
    title: "hamburger e batatas",
    category: "jantar",
    price: 12.00,
    img: "./images/item-2.jpeg",
    desc: `hamburger e batatas fritas da casa `,
  },
  {
    id: 3,
    title: "milkshake de morango",
    category: "milkshake",
    price: 5.00,
    img: "./images/item-3.jpeg",
    desc: `milkshake de morango artesanal`,
  },
 
  {
    id: 4,
    title: "X-tudo",
    category: "lanche",
    price: 20.00,
    img: "./images/item-4.jpeg",
    desc: `sanduiche feito com hamburguer artesanal, chedar, bacon, tomate e alface.`,
  },
  
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
