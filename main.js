var template = `
<div class="product">
<img src="" alt="">
<h3 class="itemname">Name</h3>
<div class="info">
    <p class="maker">Maker</p>
    <p class="price">Price</p>
</div>
</div>
`

const html = items.results.map(item => {
    if (item.currency_code === "USD") {
        item.currency_code = "$"
    } else if (item.currency_code == "EUR") {
        item.currency_code = "&euro;"
    } else if (item.currency_code == "GBP") {
        item.currency_code = "&pound"
    }
    return `
    <div class="product">
    <img src="${item.Images[0].url_fullxfull}" alt="">
    <p class="itemname">${item.title}</p>
    <div class="info">
        <p class="stock">${item.quantity} left in stock</p>
        <div id="rating">
            <div class="rate"><p>(${item.views})</p></div>
        </div>
        <p class="price">${item.currency_code}${item.price}</p>
    </div>
    </div>
    `
}).join("")

document.querySelector("#products").innerHTML = html

// var example = items.map(item => {
//     return `${item.results.title}`
// })

// console.log(items.results[0].currency_code)

console.log(items.results[0])
