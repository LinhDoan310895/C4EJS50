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
let a = parseInt(prompt("Moi nhap vao so tien X la boi cua 10.000 VND:"));
let tramNghin = Math.floor(a / 100000);
let chucNghin1 = a - tramNghin * 100000;
let chucNghin2 = a - tramNghin * 100000 - chucNghin1 * 50000;
let chucNghin3 = a - tramNghin * 100000 - chucNghin1 * 50000 - chucNghin2 * 20000;
console.log(`${a} VND = ${tramNghin} to 100.000 VND
     + ${chucNghin1} to 50.000 VND
      + ${chucNghin2} to 20.000 VND
       + ${chucNghin3} o 10.000 VND`);
 */

/*
let x = parseInt(prompt("Moi nhap vao 1 so co 3 chu so: "));
let hangTram = Math.floor(x / 100);
let hangChuc = Math.floor((x - hangTram * 100) / 10);
let hangDonVi = x - hangTram * 100 - hangChuc * 10;
let tong = hangTram + hangChuc + hangDonVi;
console.log(`Gia tri cua tong cac chu so cua so ${x} la: ${hangTram} + ${hangChuc} + ${hangDonVi} = ${tong}`);
 */