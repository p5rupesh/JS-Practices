const products = [{
    title: 'Tshirt 1',
    price: 500,
    rating: 3
}, {
    title: 'Tshirt 2',
    price: 800,
    rating: 1
}, {
    title: 'Tshirt 3',
    price: 900,
    rating: 2
}, {
    title: 'Tshirt 4',
    price: 1200,
    rating: 5
}, {
    title: 'Tshirt 5',
    price: 1000,
    rating: 4
}, {
    title: 'Tshirt 6',
    price: 600,
    rating: 4
}, {
    title: 'Tshirt 7',
    price: 500,
    rating: 2
}, ];


let productsContainer = document.querySelector('.products-container');
let listSort = document.querySelector('.list-sort');

const addProducts = function(array) {
    let html = ``;
    array.forEach((product) => {

        html += `
    <div class="product">
        <img src="/images/210x280.png" alt="" class="product-img"></img>
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">Rs. ${product.price}</p>
        <span class="product-rating">${product.rating}/5</span>
    </div>
    `;

    });
    productsContainer.innerHTML = html;
};
addProducts(products);


listSort.addEventListener('change', (ev) => {
    let sortedResults;
    let index = ev.target.options.selectedIndex;
    let category = ev.target.children[index].value;
    console.log(ev.target.options.selectedIndex);
    console.log(ev.target.children[index].value);

    switch (category) {
        case 'price-lth':
            sortedResults = products.sort((a, b) => a.price - b.price);
            break;
        case 'price-htl':
            sortedResults = products.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sortedResults = products.sort((a, b) => b.rating - a.rating);
            break;
    }
    addProducts(sortedResults);

});