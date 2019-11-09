

// lay ra danh sach dien thoai
let DSDT = JSON.parse(localStorage.getItem("DSDT"));
// lay id dien thoai nguoi dung vua click
let dtSelected_ID = localStorage.getItem("DTselected");
// tim dien thoai ng dung dan chon
let dtSelected;
for (let index = 0; index < dssp.length; index++) {
    const dt = dssp[index];
    if(dt.id === dt.dtSelected_ID){
        dtSelected = dt;
        break;
    }
}

let name = `<h5 class="card-title">${deSelected.title}</h5>`;
let img = `<img src=${deSelected.imgLink} class="card-img-top" alt="">`
document.getElementById('danh-sach-sp').innerHTML += img;
document.getElementById('danh-sach-sp').innerHTML += title;
