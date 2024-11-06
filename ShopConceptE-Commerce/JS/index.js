const fashionItems = [
  { imgSrc: "Images/Shirts.jpeg", title: "Men's Wear", detail1: "Formal Shirts", detail2: "Stylish T-Shirts", link: "Mens Wear.html" },
  { imgSrc: "Images/women.jpg", title: "Women's Wear", detail1: "Beautiful Sarees", detail2: "Churidaars", link: "Mens Wear.html" },
  { imgSrc: "Images/kids.png", title: "Kid's Wear", detail1: "Boys Stylish Outfits", detail2: "Girls Beautiful Outfits", link: "Mens Wear.html" },
  { imgSrc: "Images/watches.png", title: "Watches & Bracelets", detail1: "Unisex Watches", detail2: "Silver Bracelets", link: "Mens Wear.html" },
  { imgSrc: "Images/jewellery.jpeg", title: "Designed Jewellery", detail1: "Perfect Platinum", detail2: "Finely Finished", link: "Mens Wear.html" },
  { imgSrc: "Images/shoes.jpg", title: "Stylish Footwear", detail1: "Branded Shoes", detail2: "Sandals & Slippers", link: "Mens Wear.html" }
];

const electronicsItems = [
  { imgSrc: "Images/mobiles.png", title: "Smart Phones", detail1: "All Brands", detail2: "New Arrivals", link: "Mens Wear.html" },
  { imgSrc: "Images/earpods.png", title: "Earpods & Earbuds", detail1: "Touch Controls", detail2: "Noise Cancellation", link: "Mens Wear.html" },
  { imgSrc: "Images/laptops.jpg", title: "PCs & Laptops", detail1: "2 Year Warranty", detail2: "Student Discounts", link: "Mens Wear.html" },
  { imgSrc: "Images/Fit Bands.jpg", title: "Fitness Trackers", detail1: "Smart Watches", detail2: "Fit Bands", link: "Mens Wear.html" },
  { imgSrc: "Images/pendrives.png", title: "CDs & Pendrives", detail1: "Hp, Sandisk, Sony", detail2: "2gb - 128gb", link: "Mens Wear.html" },
  { imgSrc: "Images/routers.jpg", title: "Internet Routers", detail1: "Wired & Wireless", detail2: "Access Networking", link: "Mens Wear.html" }
];

function createCardItem({ imgSrc, title, detail1, detail2, link }) {
  return `
      <div class="card-item">
          <a href="${link}">
              <img src="${imgSrc}" alt="${title}">
          </a>
          <div class="lines">
              <p class="text">${title}</p>
              <p class="textcenter">${detail1}</p>
              <p class="textcenter">${detail2}</p>
          </div>
      </div>
  `;
}

const fashionSection = document.getElementById('fashion-section');
const electronicsSection = document.getElementById('electronics-section');

fashionItems.forEach(item => {
  fashionSection.innerHTML += createCardItem(item);
});

electronicsItems.forEach(item => {
  electronicsSection.innerHTML += createCardItem(item);
});