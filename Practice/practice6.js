// 1
/* 
let arr = [1, 2, 5, 8, 23, 6, 3];
let s = 0;
for (let index = 0; index < arr.length; index++) {
    s += arr[index];
}
console.log(`Tong gia tri cac phan tu trong mang bang: ${s}`);
 */
// 2
/* 
let arr = [1, 2, 5, 8, 23, 6, 3];
let s = 0;
for (let index = 0; index < arr.length; index++) {
    s += arr[index];
}
let avg = parseFloat(s / arr.length).toFixed(2);
console.log(`TBC cac phan tu trong bang bang: ${avg}`);
 */
// 3
/* 
let arr = [1, 2, 5, 8, 23, 6, 3];
let max = arr[0];
let min = arr[0];
for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
        max = arr[index];
    }
    if (arr[index] < min) {
        min = arr[index];
    }
}
console.log(arr);
console.log(`MAX = ${max}, MIN = ${min}`);
 */
// 4
/* 
let arr = [4, 1, 5, 8, 23, 6, 3];
let swapped = false;
n = arr.length;
do {
    swapped = false;
    for (let index = 1; index < n; index++) {
        if (arr[index - 1] > arr[index]) {
            let temp = arr[index];
            arr[index] = arr[index - 1];
            arr[index - 1] = temp;
            swapped = true;
        }
    }
    n--;
} while (swapped == true);
console.log(arr);
 */
// 5
/* 
let arr = [4, 1, 5, 8, 23, 6, 3];
let swapped = false;
n = arr.length;
do {
    swapped = false;
    for (let index = 1; index < n; index++) {
        if (arr[index - 1] > arr[index]) {
            let temp = arr[index];
            arr[index] = arr[index - 1];
            arr[index - 1] = temp;
            swapped = true;
        }
    }
    n--;
} while (swapped == true);
console.log(`So lon thu 2 cua mang la: ${arr[arr.length - 2]}`);
console.log(`So nho thu 2 cua mang la: ${arr[1]}`);
 */
// 6
/* 
let arr = ["Javascript", "Html", "Css", "Pascal"];
let search = prompt("Moi nhap vao tu khoa tim kiem: ");
let hasSearch = false;
let res = [];
for (let index = 0; index < arr.length; index++) {
    if (arr[index].toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
        res.push(arr[index]);
        hasSearch = true;
    }
}
if (hasSearch) {
    console.log(`Ket qua tim kiem phu hop voi tu khoa ${search}`);
    console.log(res);
}
else {
    console.log(`Khong tim thay ket qua phu hop voi tu khoa ${search}`);
}
 */