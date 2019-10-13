// let n = parseInt(prompt("Moi nhap vao so N: "));
// let m = parseInt(prompt("Moi nhap vao so M: "));
// for (let index = 0; ((index <= n) && (index % 2 === 0)); index += 2) {
//     console.log(index);
// }

// for (let index = n; ((index >= 0) && (index % 2 === 0)); index -= 2) {
//     console.log(index);
// }

// let n = parseInt(prompt("Moi nhap vao so N: "));
// let s = 0;

// for (let index = 1; index <= n; index++) {
//     s += index;
// }

// for (let index = 0; index <= n; index++) {
//     if (index % 2 === 0) {
//         s += index;
//     }
// }

// for (let index = 0; index <= n; index++) {
//     if (index % 2 !== 0) {
//         s += index;
//     }
// }

// for (let index = 0; index <= n; index++) {
//     if (s === 0) {
//         s = 1;
//     }
//     else{
//         s *= index;
//     }
// }

// for (let index = 1; index <= n; index++) {
//     s += parseFloat(1/index);
// }

// for (let index = 1; index <= n; index++) {
//     s += parseFloat(1 / 2 * index);
// }

// for (let index = 2; index <= n; index++) {
//     s += parseFloat(1 / (index * (index - 1)));
// }

// console.log(`S = ${s}`);

// let n = parseInt(prompt("Moi nhap vao mot so N: "));
// while (n < 8) {
//     n = parseInt(prompt("Nhap N lon hon 8: "));
// }
// console.log(`N = ${n}`);

let count = 0;
let n = parseInt(prompt("Moi nhap vao so can kiem tra: "));
if (n < 2) {
    console.log(`${n} khong phai SNT.`);
}
else {
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    if (count == 2) {
        console.log(`${n} la SNT.`);
    }
    else {
        console.log(`${n} khong phai SNT.`);
    }
}