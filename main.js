const theProducts = items.results;

// console.log(theProducts)

const theProductsHTML = theProducts.map(function (item) {
  return `
    <div class = "product">
    <img src="${item.Images[0].url_fullxfull}" class ="product-bg">
 <p class="title">${item.title}</p> 
 <p class="shop">${item.Shop.shop_name}</p>
 
        <div class="stars">
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        </div>

        <span class="views"> views (${item.views})</span>
      
 
  <p class="price"><strong>${item.price}</strong></p>
   
    </div>`;
});

let nav = [
  "Valentine's Day",
  "Jewelry & Accessories</div>",
  "Clothing",
  "Home & Living",
  "Wedding & Party",
  "Toys & Entertainment",
  "Art & Collectibles",
  "Craft & Supplies",
  "Gifts & Gift Cards",
];

let navTitles = nav.map(function (titles) {
  return `<li>${titles}</li>`;
});

// let dropTitles = [
//   "All Jewelry & Accessories",
//   "Bags & Purses",
//   "Necklaces",
//   "Rings",
//   "Earrings",
//   "Bracelets",
//   "Body Jewelry",
//   "All Jewelry",
// ];

// let dropDown = dropTitles.map(function (titles) {
//   return `<li>${titles}</li>`;
// });

// document.querySelector(".dropDown").innerHTML = dropDown.join("");

document.querySelector("#navTitles").innerHTML = navTitles.join("");
document.querySelector("#grid").innerHTML = theProductsHTML.join("");

{
  //    <img src="${item.Images}[0].url_fullxfull"
}
