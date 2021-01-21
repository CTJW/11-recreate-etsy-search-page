const theProducts = items.results;

// console.log(theProducts)

const theProductsHTML = theProducts.map(function (item) {
  return `
    <div class = "product">
    <img src="${item.Images[0].url_fullxfull}">
    <h2>
 ${item.title} ${item.price}
    </h2>
    </div>`;
});

// console.log(theProducts1)

document.querySelector("#grid").innerHTML = theProductsHTML.join("");

{
  //    <img src="${item.Images}[0].url_fullxfull"
}
