$(document).ready(function(){
    let products = [
        { name: "هاتف ذكي", image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6341/6341346_sd.jpg", price: "500$", category: "electronics" },
        { name: "لابتوب", image: "https://th.bing.com/th/id/OIP.q4zO5kPOhGubckZpNjlMiwHaEB?rs=1&pid=ImgDetMain", price: "900$", category: "electronics" },
        { name: "تيشيرت", image: "https://th.bing.com/th/id/OIP.LDRxkD7lvEvlMEaUGBjDDwHaFj?rs=1&pid=ImgDetMain", price: "20$", category: "fashion" }
    ];

    let category = new URLSearchParams(window.location.search).get("category");

    let filteredProducts = category ? products.filter(p => p.category === category) : products;

    filteredProducts.forEach(product => {
        $("#product-list").append(`
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <a href="product-details.html?name=${product.name}" class="btn btn-primary">عرض التفاصيل</a>
                    </div>
                </div>
            </div>
        `);
    });
});
