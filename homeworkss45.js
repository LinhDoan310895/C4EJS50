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

/* 
let a = parseInt(prompt("Moi nhap vao gia tri a: "));
let str = '';
console.log(`a = ${a}`);
for (let i = 0; i < a; i++) {
    str += '*';
    console.log(str);
}
 */

/*
let passWord = prompt("Moi nhap vao mat khau cua ban: ");
while (passWord.length < 8) {
    passWord = prompt(`Mat khau chua du 8 ky tu. Moi nhap lai.`);
}
console.log(`Mat khau cua ban la: ${passWord}.
Tai khoan cua ban da bi hack!`);
 */

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

/* 
let year = parseInt(prompt("Moi nhap vao nam can kiem tra: "));

if (year % 400 === 0
    || (year % 4 === 0) && (year % 100 !== 0)) {
    console.log(`Nam ${year} co 366 ngay.`);
}
else {
    console.log(`Nam ${year} co 365 ngay.`);
}
 */

/* 
let month = parseInt(prompt("Moi nhap vao 1 thang trong nam can kiem tra: ")); 
let year = parseInt(prompt(`Ban muon kiem tra thang ${month} cua nam bao nhieu: `));

let check = false;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    check = true;
}

switch(month){
    case 1: 
    case 3: 
    case 5: 
    case 7: 
    case 8: 
    case 10: 
    case 12:
        console.log(`Thang ${month} co 31 ngay.`);
        break;
    case 4: 
    case 6: 
    case 9: 
    case 11:
        console.log(`Thang ${month} co 29 ngay.`);
        break;
    case 2:
        if(check === false){
            console.log(`Thang ${month} co 28 ngay.`);
        }
        else{
            console.log(`Thang ${month} co 29 ngay.`);
        }
        break;
    default:
        console.log(`Gia tri ${month} vua nhap vao khong phai mot thang.`);
        break;
}
 */

/* 
let month = parseInt(prompt("Moi nhap vao 1 thang trong nam can kiem tra: "));
switch (month) {
   case 12:
   case 1:
   case 2:
       console.log(`Thang ${month} thuoc mua Dong.`);
       break;
   case 3:
   case 4:
   case 5:
       console.log(`Thang ${month} thuoc mua Xuan.`);
       break;
   case 6:
   case 7:
   case 8:
       console.log(`Thang ${month} thuoc mua He.`);
       break;
   case 9:
   case 10:
   case 11:
       console.log(`Thang ${month} thuoc mua Thu.`);
       break;
   default:
       console.log(`Khong co thang ${month}. Moi ban chay lai va nhap gia tri khac.`);
}
*/

/* 
let a = parseFloat(prompt("Moi nhap vao gia tri so a: "));
let b = parseFloat(prompt("Moi nhap vao gia tri so b: "));
let c = parseFloat(prompt("Moi nhap vao gia tri so c: "));

if (a > b) {
    if (b > c) {
        console.log(`${c} < ${b} < ${a}`);
    }
    else if (c > b) {
        if (a > c) {
            console.log(`${b} < ${c} < ${a}`);
        }
        else if (c > a) {
            console.log(`${b} < ${a} < ${c}`);
        }
        else {
            console.log(`${b} < ${c} = ${a}`);
        }
    }
    else { // c = b
        console.log(`${c} = ${b} < ${a}`);
    }
}
else if (b > a) {
    if (a > c) {
        console.log(`${c} < ${a} < ${b}`);
    }
    else if (c > a) {
        if (b > c) {
            console.log(`${a} < ${c} < ${b}`);
        }
        else if (c > b) {
            console.log(`${a} < ${b} < ${c}`);
        }
        else{ // b = c
            console.log(`${a} < ${c} = ${b}`);
        }
    }
    else {
        console.log(`${c} = ${a} < ${b}`);
    }
}
else { // a = b
    if (b > c) {
        console.log(`${c} < ${b} = ${a}`);
    }
    else if (c > b) {
        console.log(`${b} = ${a} < ${c}`);
    }
    else { // a = b = c
        console.log(`${c} = ${b} = ${a}`);
    }
}
 */

let a = parseFloat(prompt("Moi nhap vao gia tri so a: "));
let b = parseFloat(prompt("Moi nhap vao gia tri so b: "));
let c = parseFloat(prompt("Moi nhap vao gia tri so c: "));

if (a <= 0) {
    console.log(`Gia tri cua a = ${a}. Moi nhap lai.`);
}
else if (b <= 0) {
    console.log(`Gia tri cua b = ${b}. Moi nhap lai.`);
}
else if (c <= 0) {
    console.log(`Gia tri cua c = ${c}. Moi nhap lai.`);
}

if (((a + b) < c)
    || ((a + c) > b)
    || ((b + c) < a)) {
    console.log(`Ba canh co do dai ${a}, ${b}, ${c} khong tao thanh mot tam giac.`);
}
else {
    console.log(`Ba canh co do dai ${a}, ${b}, ${c} tao thanh mot tam giac.`);
    if (Math.sqrt(a) + Math.sqrt(b) === Math.sqrt(c)
        || Math.sqrt(a) + Math.sqrt(c) === Math.sqrt(b)
        || Math.sqrt(b) + Math.sqrt(c) === Math.sqrt(a)) {
        console.log("Tam giac nay la tam giac vuong.");
    }
    else if (a === b || b === c || a === c) {
        console.log("Tam giac nay la tam giac can.");
    }
    else if (a == b == c) {
        console.log("Tam giac nay la tam giac deu.");
    }
    else {
        console.log("Tam giac nay la tam giac thuong.");
    }
}