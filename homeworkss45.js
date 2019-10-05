/* 
let n = parseInt(prompt("Moi nhap vao so N: "));
for (let index = n; ((index >= 0) && (index % 2 === 0)); index -= 2) {
    console.log(index);
}
 */

let n = parseInt(prompt("Moi nhap vao so N: "));
let tong = 0;
for (let index = 0; index < n; index++) {
    tong += index;
}