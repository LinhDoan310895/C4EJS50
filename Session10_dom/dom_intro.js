function login() {
    let inputEmail = document.getElementById("exampleInputEmail1").value;
    let inputPW = document.getElementById("exampleInputPassword1").value;
    if (inputEmail == "admin" && inputPW == "123456") {
        alert("dang nhap thanh cong.");
        window.location.href = "san-pham.html";
    }
    else {
        alert("dang nhap that bai.");
    }
}

let dssp = [
    {
        'imgLink': 'https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-600x600.jpg',
        'title': 'iPhone 11 Pro Max 512GB',
        'description': 43.999 * Math.pow(10, 6)
    },
    {
        'imgLink': 'https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-600x600.jpg',
        'title': 'iPhone 11 Pro Max 512GB',
        'description': 43.999 * Math.pow(10, 6)
    },
    {
        'imgLink': 'https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-600x600.jpg',
        'title': 'iPhone 11 Pro Max 512GB',
        'description': 43.999 * Math.pow(10, 6)
    },
]

