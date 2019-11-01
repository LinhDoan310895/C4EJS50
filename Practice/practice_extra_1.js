// function reverseString(str) {
//     let res = '';
//     for (let index = str.length - 1; index >= 0; index--) {
//         res += str.charAt(index);
//     }
//     console.log(`String: ${str}\nReversed String: ${res}`);
// }
// let string = prompt("Moi nhap vao 1 chuoi ky tu: ");
// reverseString(string);

danGa = [1, 1.4, 1.7, 2.1, 3, 2.4, 5.5, 1.5, 4.1, 3.9];
console.log(danGa);

function upWeight2Weeks(arr) {
    for (let index = 0; index < arr.length; index++) {
        arr[index] = (arr[index] * 1.5).toFixed(2);
    }
}

// upWeight2Weeks(danGa);
// console.log(danGa);

function heaviestChicken() {
    let max = arr[0];
    let num = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > max) {
            max = arr[index];
            num = index + 1;
        }
    }
    console.log(`Con ga nang nhat la con so ${num} voi can nang: ${max}`);
}

// heaviestChicken(danGa);

function removeChicken(arr) {
    // giet random 1 con ga
    randomDead = Math.floor(Math.random() * arr.length);
    arr.splice(randomDead, 1);
}
function h5n1(arr) {
    for (let index = 0; index < 3; index++) {
        removeChicken(arr);
    }

    for (let index = 0; index < arr.length; index++) {
        arr[index] = (arr[index] * 0.5).toFixed(2);
    }
}

h5n1(danGa);
console.log(danGa);
