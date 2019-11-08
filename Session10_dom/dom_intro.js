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

function showItem() {
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
    for (let index = 0; index < dssp.length; index++) {
        document.getElementById("danh-sach-sp").innerHTML += `<div class="row">
    <div class="col-4">
        <div class="card" style="width: 18rem;">
            <img src=${dssp[index].imgLink} class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${dssp[index].title}</h5>
                <p class="card-text">${dssp[index].description}</p>
                <div class="nav">
                    <a href="#" class="btn btn-danger">Them vao Gio hang</a>
                    <a href="#" class="btn btn-dark">Chi tiet</a>
                </div>
            </div>
        </div>
    </div>
</div>`
    }
}
showItem();