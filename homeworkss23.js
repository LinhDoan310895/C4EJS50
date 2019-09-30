/*
let a = parseInt(prompt("Moi nhap vao so a: "));
let b = parseInt(prompt("Moi nhap vao so b: "));
let c = parseInt(prompt("Moi nhap vao so c: "));

let max = a;

if (b > max) {
    max = b;
    if (c > max) {
        max = c;
        console.log(`So lon nhat trong 3 so la: c, co gia tri la ${max}`);
    }
    else{
        console.log(`So lon nhat trong 3 so la: b, co gia tri la ${max}`);
    }
}
else if (c > max) {
    max = c;
    console.log(`So lon nhat trong 3 so la: c, co gia tri la ${max}`);
}
else {
    console.log(`So lon nhat trong 3 so la: a, co gia tri la ${max}`);
}
*/

/*
let year = parseInt(prompt("Moi nhap vao 1 nam bat ky: "));
let month = parseInt(prompt(`Moi nhap vao 1 thang trong nam ${year}: `));

let check = false;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    check = true;
}

if (month === 2) {
    if (check === false){
        console.log(`Thang ${month} co 28 ngay.`);
    }
    else{
        console.log(`Thang ${month} co 29 ngay.`);
    }
}
else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    console.log(`Thang ${month} co 31 ngay.`);
}
else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log(`Thang ${month} co 30 ngay.`);
}
else {
    console.log(`Gia tri ${month} vua nhap vao khong phai mot thang.`);
}
*/

/* 
const pi = 3.14;
let banKinh = parseInt(prompt("Moi nhap vao ban kinh hinh tron: "));
let chuVi = 2 * banKinh * pi;
let dienTich=banKinh*banKinh*pi;
console.log(`Hinh tron co ban kinh ${banKinh}`);
console.log(`Hinh tron co chu vi: ${chuVi}`);
console.log(`Hinh tron co dien tich: ${dienTich}`);

let chieuDai = parseInt(prompt("Moi nhap vao chieu dai hinh chu nhat: "));
let chieuRong = parseInt(prompt("Moi nhap vao chieu rong hinh chu nhat: "));
let chuVi = 2 * (chieuDai + chieuRong);
let dienTich = chieuDai * chieuRong;
console.log(`Hinh chu nhat co chu vi: ${chuVi}`);
console.log(`Hinh chu nhat co dien tich: ${dienTich}`);
 */

/*
let x = parseFloat(prompt("Moi nhap vao gia tri cua x: "));
let y1 = parseFloat(4 * (Math.pow(x, 2) + 10 * x * Math.sqrt(x) + 3 * x + 1));
let y2 = parseFloat(Math.sin(Math.pow(x, 2) * Math.PI) + Math.sqrt(Math.pow(x, 2) + 1) / (Math.pow(Math.E, 2 * x) + Math.cos(x * Math.pi / 4)));
console.log(`Gia tri bieu thuc y1 = ${y1}`);
console.log(`Gia tri bieu thuc y2 = ${y2}`);
*/

/*
let a = parseInt(20000);
let tramNghin = parseInt((Math.floor(a/100000)));
let chucNghin = parseInt(a%100000);
if(chucNghin === 50000){
    console.log(`${a} VND = ${tramNghin} to 100.000 VND + 1 to 50.000 VND + 0 to 20.000 VND + 0 o 10.000 VND`);
}
else if(chucNghin === 20000){
    console.log(`${a} VND = ${tramNghin} to 100.000 VND + 0 to 50.000 VND + 1 to 20.000 VND + 0 o 10.000 VND`);
}
else{
    console.log(`${a} VND = ${tramNghin} to 100.000 VND + 0 to 50.000 VND + 0 to 20.000 VND + 1 o 10.000 VND`);
}
*/

/*
let x = parseInt(prompt("Moi nhap vao 1 so co 3 chu so: "));
let hangTram = Math.floor(x / 100);
let hangChuc = Math.floor((x - hangTram * 100) / 10);
let hangDonVi = x - hangTram * 100 - hangChuc * 10;
let tong = hangTram + hangChuc + hangDonVi;
console.log(`So ${x} co tong cac chu so la: ${hangTram} + ${hangChuc} + ${hangDonVi} = ${tong}`);
*/