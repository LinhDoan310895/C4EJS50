function timMax(arr) {
    let max = arr[0];
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] > max) {
            max = arr[index];
        }
    }
    return max;
}

arr = [1, 4, 2, 5, 3, 12, 33];
// let max = timMax(arr);
// console.log(max);

let n = 6;
function soLonHonN(arr, N) {
    let res = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > N) {
            res.push(arr[index]);
        }
    }
    return res;
}

let slhn = soLonHonN(arr, n);
console.log(slhn);

function getNow() {
    console.clear();
    let now = new Date();
    console.log(now.toString());
}
setInterval(getNow, 1 * 1000);