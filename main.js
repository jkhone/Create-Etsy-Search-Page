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

// const html = items.results.map(item => {
//     return `
//     <div class="product">
//     <img src="" alt="">
//     <h3 class="itemname">${item.results.currency_code}</h3>
//     <div class="info">
//         <p class="maker">Maker</p>
//         <p class="price">Price</p>
//     </div>
//     </div>
//     `
// }).join("")

// console.log(html)

// document.querySelector("#products").innerHTML = html

// var example = items.map(item => {
//     return `${item.results.title}`
// })

// console.log(items.results[0].currency_code)

const example = items.map(item => {
    return `${item.results}`
})

console.log(example)