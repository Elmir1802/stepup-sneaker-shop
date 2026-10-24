let cartCount = 0;

const cartNumber = document.getElementById("cartCount");
const buttons = document.querySelectorAll(".add-button");
buttons.forEach(function(button) {
    button.addEventListener("click",function() {
        cartCount++;
        cartNumber.textContent = cartCount;
        const productName = button.dataset.name;
        alert(productName +"Добавлены в корзину!");
    });
});


    