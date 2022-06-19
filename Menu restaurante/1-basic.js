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
    price: 22.00,
    img: "./images/item-4.jpeg",
    desc: `sanduiche feito com hamburguer artesanal, chedar, bacon, tomate e alface. `,
  },
 
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
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
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
});
