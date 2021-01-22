const theProducts = items.results;

// console.log(theProducts)

const theProductsHTML = theProducts.map(function (item) {
  return `
    <div class = "product">
    <img src="${item.Images[0].url_fullxfull}" class ="product-bg">
 <p class="title">${item.title}</p> 
 <p class="shop">${item.Shop.shop_name}</p>
  <p class="price">${item.price}</p>
   
    </div>`;
});

let nav = [
  `${"Valentine's Day"}  
  ${"Jewelry & Accessories"} 
  ${"Clothing"}
  ${"Home & Living"}
  ${"Wedding & Party"}
  ${"Toys & Entertainment"}
  ${"Art & Collectibles"}
  ${"Craft & Supplies"},
  ${"Gifts & Gift Cards"}`,
];

let navTitles = nav.map(function (titles) {
  return `<li>${titles}</li>`;
});

// console.log(theProducts1)

document.querySelector("#navTitles").innerHTML = nav.join("");
document.querySelector("#grid").innerHTML = theProductsHTML.join("");

{
  //    <img src="${item.Images}[0].url_fullxfull"
}
