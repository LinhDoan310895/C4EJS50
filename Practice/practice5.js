// 1
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
// 2
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
// 3
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
// 4
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
// 5
/* 
let a = parseFloat(prompt("Moi nhap vao gia tri a: "));
while (a <= 0) {
    a = prompt(`Gia tri ${a} cua a khong hop le. Moi nhap lai.`)
}
let b = parseFloat(prompt("Moi nhap vao gia tri b: "));
while (b <= 0) {
    b = prompt(`Gia tri ${b} cua b khong hop le. Moi nhap lai.`)
}
let c = parseFloat(prompt("Moi nhap vao gia tri c: "));
while (c <= 0) {
    c = prompt(`Gia tri ${c} cua c khong hop le. Moi nhap lai.`)
}
if (((a + b > c) && ((a - b < c) || (b - a < c)))
    && ((a + c > b) && ((a - c < b) || (c - a < b)))
    && ((c + b > a) && ((c - b < a) || (b - c < a)))) {
    console.log(`3 canh co gia tri ${a}, ${b}, ${c} CO tao thanh 1 tam giac.`);
    if (a == b && b == c) {
        console.log("Tam giac nay la tam giac deu.");
    }
    else {
        if (a == b || a == c || b == c) {
            console.log("Tam giac nay la tam giac can.");
        }
        if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)
            || Math.pow(a, 2) + Math.pow(c, 2) == Math.pow(b, 2)
            || Math.pow(b, 2) + Math.pow(c, 2) == Math.pow(a, 2)) {
            console.log("Tam giac nay la tam giac vuong.");
        }
        else {
            console.log("Tam giac nay la tam giac thuong.");
        }
    }
}
else {
    console.log(`3 canh co gia tri ${a}, ${b}, ${c} KHONG tao thanh 1 tam giac.`);
}
 */
// 6
/* 
let elecCon = prompt("Moi nhap vao so dien su dung cua ho trong 1 thang (Don vi: kWh): ");
let bill = 0;
let index = 1;
for (index; index <= 6; index++) {
    if (elecCon >= 50) {
        switch (index) {
            case 1:
                bill += 50 * 1678; // 83900
                elecCon -= 50;
                break;
            case 2:
                bill += 50 * 1734; // 86700
                elecCon -= 50;
                break;
            case 3:
                bill += 100 * 2014; // 201400
                elecCon -= 100;
                break;
            case 4:
                bill += 100 * 2536; // 253600
                elecCon -= 100;
                break;
            case 5:
                bill += 100 * 2834; // 283400
                elecCon -= 100;
                break;
            case 6:
                bill += elecCon * 2927;
                elecCon -= elecCon;
                break;
        }
    }
    else {
        switch (index) {
            case 1:
                bill += elecCon * 1678;
                elecCon -= elecCon;
                break;
            case 2:
                bill += elecCon * 1734;
                elecCon -= elecCon;
                break;
            case 3:
                bill += elecCon * 2014;
                elecCon -= elecCon;
                break;
            case 4:
                bill += elecCon * 2536;
                elecCon -= elecCon;
                break;
            case 5:
                bill += elecCon * 2834;
                elecCon -= elecCon;
                break;
            case 6:
                bill += elecCon * 2927;
                elecCon -= elecCon;
                break;
        }
        break;
    }
}
console.log(`Tong so tien dien ho gia dinh dung trong thang nay la: ${bill} VND`);
 */
// 7
/* 
let height = parseFloat(prompt("Moi nhap vao chieu cao (m): "));
let weight = parseFloat(prompt("Moi nhap vao can nang (kg): "));
let bmi = weight / Math.pow(height, 2);
console.log(`Chi so BMI cua ban la: ${bmi}.`);
if (bmi < 18.5) {
    console.log("Ban thuoc nhom: Can nang thap (gay).");
}
else if (bmi <= 24.9) {
    console.log("Ban thuoc nhom: Binh thuong.");
}
else if (bmi == 25) {
    console.log("Ban thuoc nhom: Thua can.");
}
else if (bmi <= 29.9) {
    console.log("Ban thuoc nhom: Tien beo phi.");
}
else if (bmi <= 34.9) {
    console.log("Ban thuoc nhom: Beo phi do I.");
}
else if (bmi <= 39.9) {
    console.log("Ban thuoc nhom: Beo phi do II.");
}
else if (bmi >= 40) {
    console.log("Ban thuoc nhom: Beo phi do III.");
}
 */
// 8
/* 
let n = prompt("Moi nhap vao so N: ");
// kiem tra so chinh phuong
let res = parseInt(Math.sqrt(n));
if (res * res == n) {
    console.log(`N = ${n} la So Chinh Phuong.`);
}
else { // kiem tra SNT
    let isSNT = true;
    if (n < 2) {
        isSNT = false;
    }
    else {
        for (let index = 2; index < parseFloat(Math.sqrt(n)); index++) {
            if (n % index == 0) {
                isSNT = false;
            }
        }
    }
    if (isSNT) {
        console.log(`N = ${n} la So Nguyen To.`);
    }
    else {
        let dsHS = [];
        for (let index = 2; index < n; index++) {
            if (n % index == 0) {
                dsHS.push(index);
            }
        }
        console.log(`N = ${n} la Hop So.`);
        console.log(`Danh sach cac uoc cua Hop So N = ${n} la: `);
        console.log(`${dsHS}`);
    }
}
 */