const available = [
  { imgSrc: "Images/Men/f5.png", title: "Shirts", targetId: "one"},
  { imgSrc: "Images/Men/k3.jpg", title: "Kurtas", targetId: "two"},
  { imgSrc: "Images/Men/p6.png", title: "Jeans", targetId: "three"},
  { imgSrc: "Images/Men/d6.png", title: "Suits", targetId: "four"},
  { imgSrc: "Images/Men/sho3.jpeg", title: "Shorts", targetId: "five"},
  { imgSrc: "Images/Men/t8.png", title: "T-Shirts", targetId: "six"},
  { imgSrc: "Images/Men/shirt03.png", title: "Half Sleeves", targetId: "seven"},
  { imgSrc: "Images/Men/t2.png", title: "Full Sleeves", targetId: "eight"}
];

const shirts = [
  { name: "Shirt 01", imgSrc: "Images/Men/sh01.jpeg", price: 900 },
  { name: "Shirt 02", imgSrc: "Images/Men/sh02.jpeg", price: 950 },
  { name: "Shirt 03", imgSrc: "Images/Men/sh03.jpeg", price: 870 },
  { name: "Shirt 04", imgSrc: "Images/Men/sh04.jpeg", price: 920 },
  { name: "Shirt 05", imgSrc: "Images/Men/sh05.jpeg", price: 880 },
  { name: "Shirt 06", imgSrc: "Images/Men/sh06.jpg", price: 910 }
];

const kurtas = [
  { name: "Kurta 01", imgSrc: "Images/Men/k1.jpeg", price: 900 },
  { name: "Kurta 02", imgSrc: "Images/Men/k2.jpg", price: 950 },
  { name: "Kurta 03", imgSrc: "Images/Men/k3.jpg", price: 870 },
  { name: "Kurta 04", imgSrc: "Images/Men/k4.jpeg", price: 920 },
  { name: "Kurta 05", imgSrc: "Images/Men/k5.jpg", price: 880 },
  { name: "Kurta 06", imgSrc: "Images/Men/k6.jpg", price: 910 }
];

const Jeans = [
  { name: "Jeans 01", imgSrc: "Images/Men/p3.png", price: 900 },
  { name: "Jeans 02", imgSrc: "Images/Men/p4.png", price: 950 },
  { name: "Jeans 03", imgSrc: "Images/Men/p5.png", price: 870 },
  { name: "Jeans 04", imgSrc: "Images/Men/p6.png", price: 920 },
  { name: "Jeans 05", imgSrc: "Images/Men/p7.png", price: 880 },
  { name: "Jeans 06", imgSrc: "Images/Men/p8.png", price: 910 }
];

const Suits = [
  { name: "Suit 01", imgSrc: "Images/Men/su1.jpeg", price: 900 },
  { name: "Suit 02", imgSrc: "Images/Men/su2.jpeg", price: 950 },
  { name: "Suit 03", imgSrc: "Images/Men/su3.jpg", price: 870 },
  { name: "Suit 04", imgSrc: "Images/Men/su4.jpeg", price: 920 },
  { name: "Suit 05", imgSrc: "Images/Men/su5.jpeg", price: 880 },
  { name: "Suit 06", imgSrc: "Images/Men/su6.jpeg", price: 910 }
];

const shorts = [
  { name: "Short 01", imgSrc: "Images/Men/sho1.jpeg", price: 900 },
  { name: "Short 02", imgSrc: "Images/Men/sho2.jpeg", price: 950 },
  { name: "Short 03", imgSrc: "Images/Men/sho3.jpeg", price: 870 },
  { name: "Short 04", imgSrc: "Images/Men/sho4.png", price: 920 },
  { name: "Short 05", imgSrc: "Images/Men/sho5.jpeg", price: 880 },
  { name: "Short 06", imgSrc: "Images/Men/sho6.png", price: 910 }
];

const tShirts = [
  { name: "T-Shirt 01", imgSrc: "Images/Men/ts1.jpg", price: 900 },
  { name: "T-Shirt 02", imgSrc: "Images/Men/ts2.jpeg", price: 950 },
  { name: "T-Shirt 03", imgSrc: "Images/Men/ts3.jpg", price: 870 },
  { name: "T-Shirt 04", imgSrc: "Images/Men/ts4.jpg", price: 920 },
  { name: "T-Shirt 05", imgSrc: "Images/Men/ts5.png", price: 880 },
  { name: "T-Shirt 06", imgSrc: "Images/Men/ts6.jpg", price: 910 }
];

const hss = [
  { name: "Half Sleeve Shirt 01", imgSrc: "Images/Men/shirt01.png", price: 900 },
  { name: "Half Sleeve Shirt 02", imgSrc: "Images/Men/shirt02.png", price: 950 },
  { name: "Half Sleeve Shirt 03", imgSrc: "Images/Men/shirt03.png", price: 870 },
  { name: "Half Sleeve Shirt 04", imgSrc: "Images/Men/shirt04.png", price: 920 },
  { name: "Half Sleeve Shirt 05", imgSrc: "Images/Men/shirt05.png", price: 880 },
  { name: "Half Sleeve Shirt 06", imgSrc: "Images/Men/shirt06.png", price: 910 }
];

const fss = [
  { name: "Full Sleeve T-Shirt 01", imgSrc: "Images/Men/fs1.jpeg", price: 900 },
  { name: "Full Sleeve T-Shirt 02", imgSrc: "Images/Men/fs2.jpeg", price: 950 },
  { name: "Full Sleeve T-Shirt 03", imgSrc: "Images/Men/fs3.jpeg", price: 870 },
  { name: "Full Sleeve T-Shirt 04", imgSrc: "Images/Men/fs4.jpeg", price: 920 },
  { name: "Full Sleeve T-Shirt 05", imgSrc: "Images/Men/fs5.jpeg", price: 880 },
  { name: "Full Sleeve T-Shirt 06", imgSrc: "Images/Men/fs6.jpeg", price: 910 }
];

function availableItems({ imgSrc, title, targetId }) {
  return `
      <div class="item">
          <a href="#${targetId}" target="_self">
              <img src="${imgSrc}" alt="">
          </a>
          <p>${title}</p>
      </div>
  `;
}

function createCardItem({ name, imgSrc, price }) {
  return `
      <div class="card-item">
          <img src="${imgSrc}" alt="">
          <div class="add">
              <button class="addbtn" onclick="addItem(this)">Buy</button>
          </div>
          <div class="counter" style="display: none;">
              <button class="decrement" onclick="decrement(this)">-</button>
              <span class="count">1</span>
              <button class="increment" onclick="increment(this)">+</button>
          </div>
          <div class="lines">
              <p class="textcenter">${name}</p>
              <div class="rating">
                  <img src="Images/rating1.png" alt="">
                  <p>4.5</p>
              </div>
              <div class="buy">
                  <p>₹${price}</p>
              </div>           
          </div>
      </div>
  `;
}

function addItem(button) {
  const cardItem = button.closest('.card-item'); 
  const counterDiv = cardItem.querySelector('.counter'); 
  const countElement = counterDiv.querySelector('.count');

  button.style.display = 'none'; 
  counterDiv.style.display = 'flex';

  countElement.innerText = 1;
}

function increment(button) {
  const countElement = button.previousElementSibling;
  let count = parseInt(countElement.innerText, 10);
  count += 1;
  countElement.innerText = count;
}

function decrement(button) {
  const countElement = button.nextElementSibling;
  let count = parseInt(countElement.innerText, 10);
  if (count > 0) { 
    count -= 1;
  }
  else{
    count=1;
  }
  countElement.innerText = count; 
  const counterDiv = button.closest('.counter'); 
  const addButton = counterDiv.previousElementSibling.querySelector('.addbtn'); 

 
  if (count === 0) { 
    counterDiv.style.display = 'none'; 
    addButton.style.display = 'block'; 
  } 
  else {
    counterDiv.style.display = 'flex';
  }
}



const items = document.getElementById('availableitemslist');

available.forEach(item => {
  items.innerHTML += availableItems(item); 
});

const cardContainer = [];
for (let i = 1; i <= 8; i++) {
  cardContainer[i] = document.getElementById(`card-container-${i}`);
}

const categories = [shirts, kurtas, Jeans, Suits, shorts, tShirts, hss, fss];

categories.forEach((category, index) => {
  category.forEach(item => {
      cardContainer[index + 1].innerHTML += createCardItem(item);
  });
});
