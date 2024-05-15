var allProducts = document.querySelectorAll(".card");

var listItem = document.querySelector("#list_Item");

var btn = document.querySelector("#btn_show_price");

var fot = document.querySelector("#footer_");

var totalPrice = 0;
var numberOfItem = 0;
var num = 1;

var isTotalShown = false;

allProducts.forEach(function (item) {
    item.querySelector(".btn-add").onclick = function () {
            var price = parseFloat(item.querySelector("#item_price").textContent);
            var title = item.querySelector(".card-title").textContent;
    
            totalPrice += price;
            numberOfItem++;
    
            var items = listItem.querySelectorAll("tr");
            var newItem = null;
    
            items.forEach(function(item) {
                var titleCell = item.querySelector("td:nth-child(2)");
                if (titleCell && titleCell.textContent === title) {
                    newItem = item;
                }
            })
    
            if (newItem) {
                var qtyCell = newItem.querySelector("td:nth-child(3)");
                var qty = parseInt(qtyCell.textContent);
                qtyCell.textContent = qty + 1;
    
                var priceCell = newItem.querySelector("td:nth-child(5)");
                priceCell.textContent = (qty + 1) * price;
            } else {
                listItem.innerHTML += `<tr><td>${num}</td><td>${title}</td><td>1</td><td>${price}</td><td>${price}</td></tr>`;
                num++;
            }
    
            fot.style.display = "block";
    }
});

btn.onclick = function () {
    if (!isTotalShown) {
        listItem.innerHTML += `<tr><td></td><td>Total Price:</td><td>${numberOfItem}</td><td></td><td>${totalPrice}$</td></tr>`;
        isTotalShown = true;
        btn.textContent = "Rest"
        toggleButtonsVisibility(false);
    }else{
        listItem.innerHTML = "";
        totalPrice = 0;
        numberOfItem = 0;
        num = 1;
        isTotalShown = false;
        btn.textContent = "Show Total Price"
        fot.style.display = "none";
        toggleButtonsVisibility(true);
    }
}

function toggleButtonsVisibility(visible) {
    var displayValue = visible ? 'block' : 'none';
    allProducts.forEach(product => {
        product.querySelector(".btn-add").style.display = displayValue;
    })
}
