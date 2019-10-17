// 10
/* 
let n = parseInt(prompt("Moi nhap vao N: "));
let f1 = 1, f2 = 1;
let f3 = 0;
let s = 2;

for (let i = 2; i < n; i++) {
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
    s += f3;
}
    console.log(`Phan tu thu ${n} cua day so la: ${f3}`);
    console.log(`Tong ${n} phan tu dau tien cua day bang: ${s}`);
 */
// 11
/* 
let a = parseInt(prompt("Moi nhap chieu dai a: "));
let b = parseInt(prompt("Moi nhap chieu rong b: "));

console.log(`Chieu dai a = ${a}`);
console.log(`Chieu rong b = ${b}`);
for (let i = 0; i < b; i++) {
    let str = '';
    for (let j = 0; j < a; j++) {
        str += '*';
    }
    console.log(str);
}
 */
// 12
/* 
let a = parseInt(prompt("Moi nhap vao gia tri a: "));
let str = '';
console.log(`a = ${a}`);
for (let i = 0; i < a; i++) {
    str += '*';
    console.log(str);
}
 */
// 13
/*
let passWord = prompt("Moi nhap vao mat khau cua ban: ");
while (passWord.length < 8) {
    passWord = prompt(`Mat khau chua du 8 ky tu. Moi nhap lai.`);
}
console.log(`Mat khau cua ban la: ${passWord}.
Tai khoan cua ban da bi hack!`);
 */
// 15
/* 
let passWord = prompt("Moi nhap vao mat khau cua ban: ");
while (passWord.length < 8) {
    passWord = prompt("Mat khau chua du 8 ky tu. Moi nhap lai.");
}

let check = true;

do {
    for (let i = 0; i < passWord.length; i++) {
        if (passWord.charAt(i) === '$'
            || passWord.charAt(i) === '%'
            || passWord.charAt(i) === '_') {
            check = true;
            break;
        }
        else {
            check = false;
        }
    }
    if (check === true) {
        break;
    }
    else {
        passWord = prompt("Mat khau phai chua it nhat 1 ky tu dac biet ($ % _). Moi nhap lai.");
    }
} while (check === false);
console.log(`Mat khau cua ban la: ${passWord}. Tai khoan cua ban da bi hack!`);
 */