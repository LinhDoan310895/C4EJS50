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
        if (passWord.charAt(i) === '.'
            || passWord.charAt(i) === '@'
            || passWord.charAt(i) === '#') {
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
        passWord = prompt("Mat khau phai chua it nhat 1 ky tu dac biet (. @ #). Moi nhap lai.");
    }
} while (check === false);
console.log(`Mat khau cua ban la: ${passWord}. Tai khoan cua ban da bi hack!`);
 */
