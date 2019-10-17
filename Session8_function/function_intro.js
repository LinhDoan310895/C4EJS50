// function helloWorldFunction() {
//     console.log("Hello World!");
// }
// helloWorldFunction();

// function bmiCalculator(height, weight) {
//     let bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
//     console.log(`Chi so BMI cua ban la: ${bmi}`);
//     if (bmi < 18.5) {
//         console.log("Ban thuoc nhom: Can nang thap (gay).");
//     }
//     else if (bmi <= 24.9) {
//         console.log("Ban thuoc nhom: Binh thuong.");
//     }
//     else if (bmi == 25) {
//         console.log("Ban thuoc nhom: Thua can.");
//     }
//     else if (bmi <= 29.9) {
//         console.log("Ban thuoc nhom: Tien beo phi.");
//     }
//     else if (bmi <= 34.9) {
//         console.log("Ban thuoc nhom: Beo phi do I.");
//     }
//     else if (bmi <= 39.9) {
//         console.log("Ban thuoc nhom: Beo phi do II.");
//     }
//     else if (bmi >= 40) {
//         console.log("Ban thuoc nhom: Beo phi do III.");
//     }
// }

// bmiCalculator(167, 68);

// function print2(message) {
//     console.log(message);
// }
// m = "hello";
// print2(m);

// function print3(a, b) {
//     console.log(`a = ${a}`);
//     console.log(`b = ${b}`);
// }

// let a = 5, b = 3;
// print3(a, b);
// print3(a, b, 9);

function tong(a, b) {
    console.log(`Tong cua ${a} + ${b} = ${a + b}`);
}
function hieu(a, b) {
    console.log(`Hieu cua ${a} - ${b} = ${a - b}`);
}
function tich(a, b) {
    console.log(`Tich cua ${a} * ${b} = ${a * b}`);
}
function thuong(a, b) {
    console.log(`Thuong cua ${a} / ${b} = ${(a / b).toFixed(2)}`);
}
thuong(2, 3);

function ptBac1(a, b) {
    console.log(`Nghiem cua PT: ${a} * x + ${b} = ${(-b / a).toFixed(2)}`);
}
ptBac1(3, 2);

function ptBac2(a, b, c) {
    let delta = Math.pow(b, 2) - 4 * a * c;
    if (a + b + c == 0) {
        console.log(`PT: (${a}x^2) + (${b}x) + (${c}) = 0 co 2 nghiem: x1 = 1, x2 = ${c / a}`);
    }
    else if (a - b + c == 0) {
        console.log(`PT: (${a}x^2) - (${b}x) + (${c}) = 0 co 2 nghiem: x1 = -1, x2 = ${((-1) * c) / a}`);
    }
    else if (delta < 0) {
        console.log(`PT: (${a}x^2) + (${b}x) + (${c}) = 0 vo nghiem.`);
    }
    else if (delta == 0) {
        console.log(`PT: (${a}x^2) + (${b}x) + (${c}) = 0 co nghiem kep: x1 = x2 = ${(-1) * b / (2 * a)}`);
    }
    else if (delta > 0) {
        console.log(`PT: (${a}x^2) + (${b}x) + (${c}) = 0 co 2 nghiem phan biet: x1 = ${((-1) * b + Math.sqrt(delta)) / (2 * a)}; x2 = ${((-1) * b - Math.sqrt(delta)) / (2 * a)}`);
    }
}
ptBac2(4, -6, 2);