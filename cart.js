const btn = document.querySelectorAll("button")
btn.forEach(function (button) {
    button.addEventListener("click", function (event) {
        {
            let btnItem = event.target;
            let product = btnItem.parentElement;
            let productImg = product.querySelector("img").src;
            console.log(productImg)
            let productName = product.querySelector("h1").innerHTML;
            let productPrice = product.querySelector("span").innerHTML;
            addCart(productImg, productPrice, productName);
        }
    })
})

//thêm vào giỏ hàng
function addCart(productImg, productPrice, productName) {
    let addTr = document.createElement("tr");
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML === productName) {
            alert("Sản phẩm của bạn đã có trong giỏ hàng ")
            return;
        }
    }
    addTr.innerHTML = '<td><img style="width: 70px"  src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td> <td><span class="prices">'+productPrice+'</span></td> <td><input style="width: 30px;outline: none" type="number" value="1" min="1"></td> <td style="cursor: pointer"><span class="delete-cart">Xóa</span></td>';
    let cartTable = document.querySelector("tbody");
    cartTable.append(addTr);
    cartTotal()
    deleteCart()

}

// hàm tính tổng
function cartTotal() {
    let cartItem = document.querySelectorAll("tbody tr");
    let totalC = 0;
    let totalA;
    let totalD;
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = parseInt(cartItem[i].querySelector("input").value);
        let productPrice = parseInt(cartItem[i].querySelector(".prices").innerHTML);
        totalA = inputValue * productPrice;
        totalC = totalC + totalA;

    }
    let cartTotalA = document.querySelector(".price-total span")
    totalD = totalC.toLocaleString('de-DE')
    cartTotalA.innerHTML = totalD;
    inputChange()
}


// hàm xóa
function deleteCart() {
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let productT = document.querySelectorAll(".delete-cart")
        productT[i].addEventListener("click", function (event) {
            let cartDelete = event.target;
            let cartItemR = cartDelete.parentElement.parentElement;
            cartItemR.remove();
            cartTotal()
        })
    }
}

function inputChange() {
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change", function () {
            cartTotal()
        })
    }
}


