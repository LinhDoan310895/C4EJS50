// let person = {
//     "name": "Linh",
//     "age": 24,
//     "school": "Thang Long"
// }
// console.log(person);
// // person[prompt("Moi nhap them thong tin: ")] = prompt("Moi nhap gia tri cua thong tin do: ");
// // console.log(person);
// // for (const key in person) {
// //     if (person.hasOwnProperty(key)) {
// //         const element = person[key];
// //         console.log(`${key}: ${element}`);
// //     }
// // }
// let keyKT = prompt("Moi nhap vao key kiem tra: ");
// let hasKey = true;
// for (const key in person) {
//     if (person.hasOwnProperty(keyKT)) {
//         hasKey === true;
//         break;
//     }
//     else {
//         hasKey === false;
//     }
// }
// if (hasKey) {
//     console.log(`Co ton tai key "${keyKT}"`);
// }
// else {
//     console.log(`Khong ton tai key "${keyKT}"`);
// }

// let sinhVien = {
//     "name": "Linh",
//     "age": 24,
//     "school": "Thang Long",
//     "hobby": ["Danh guitar", "choi game"],
//     class: {
//         "classId": "TI26",
//         "className": "c1"
//     }
// }
// console.log(sinhVien.name);
// console.log(sinhVien.age);
// console.log(sinhVien.school);
// console.log(sinhVien.hobby);
// console.log(sinhVien.class);

// sinhVien.age += 2;
// console.log(sinhVien.age);
// sinhVien.hobby.push("Tap gym");
// console.log(sinhVien.hobby);
// sinhVien.class.className = "a2";
// sinhVien.class.teacher = "Mai Nga";
// console.log(sinhVien.class);

let phones = [
    {
        'name': 'iPhone X',
        'price': 21 * Math.pow(10, 6),
        'factory': 'Apple'
    },
    {
        'name': 'Note 10',
        'price': 27 * Math.pow(10, 6),
        'factory': 'Samsung'
    },
    {
        'name': 'Xperia 2',
        'price': 0,
        'factory': 'Sony'
    },
    {
        'name': 'N1200',
        'price': 200 * Math.pow(10, 3),
        'factory': 'Nokia'
    },
]
// // 1
// console.log("Danh sach thong tin dien thoai: ");
// for (let index = 0; index < phones.length; index++) {
//     console.log(`${index + 1}.
//     Ten DT: ${phones[index].name}`);
//     if (phones[index].price === -1) {
//         console.log("Gia: Ngung kinh doanh");
//     }
//     else if (phones[index].price === 0) {
//         console.log("Gia: Chua co gia");
//     }
//     else {
//         console.log(`Gia: ${phones[index].price} VND`);
//     }
//     console.log(`NSX: ${phones[index].factory}
//     -------------------------------`);
// }
// // 2
// let newName = prompt("Moi nhap ten cua dien thoai moi: ");
// let newPrice = parseInt(prompt("Moi nhap gia cua dien thoai moi: "));
// while (newPrice < -1) {
//     newPrice = prompt("Gia tien khong hop le. Moi nhap lai. (0: Chua co gia. -1: Ngung kinh doanh.)");
// }
// let newFactory = prompt("Moi nhap NSX cua dien thoai moi: ");
// phones.push({'name': newName, 'price': newPrice, 'factory': newFactory });

// console.log("Danh sach thong tin dien thoai: ");
// for (let index = 0; index < phones.length; index++) {
//     console.log(`${index + 1}.
//     Ten DT: ${phones[index].name}`);
//     if (phones[index].price === -1) {
//         console.log("Gia: Ngung kinh doanh");
//     }
//     else if (phones[index].price === 0) {
//         console.log("Gia: Chua co gia");
//     }
//     else {
//         console.log(`Gia: ${phones[index].price} VND`);
//     }
//     console.log(`NSX: ${phones[index].factory}
//     -------------------------------`);
// }
// // 3
// let modPhones = prompt("Moi nhap vao modPhones dien thoai muon sua: ");
// while (modPhones < 1 || modPhones > phones.length) {
//     modPhones = prompt("modPhones vua nhap vao khong hop le. Moi nhap lai.");
// }
// phones[modPhones - 1].name = prompt("Moi nhap vao ten dien thoai moi: ");
// phones[modPhones - 1].price = prompt("Moi nhap vao gia dien thoai moi: ");
// phones[modPhones - 1].factory = prompt("Moi nhap vao NSX dien thoai moi: ");
//
// console.log("Danh sach thong tin dien thoai: ");
// for (let index = 0; index < phones.length; index++) {
//     console.log(`${index + 1}.
//     Ten DT: ${phones[index].name}`);
//     if (phones[index].price === -1) {
//         console.log("Gia: Ngung kinh doanh");
//     }
//     else if (phones[index].price === 0) {
//         console.log("Gia: Chua co gia");
//     }
//     else {
//         console.log(`Gia: ${phones[index].price} VND`);
//     }
//     console.log(`NSX: ${phones[index].factory}
//     -------------------------------`);
// }
// // 4
// let delNum = prompt("Moi nhap vao STT dien thoai muon xoa: ");
// while (delNum < 1 || delNum > phones.length) {
//     delNum = prompt("STT khong hop le. Moi nhap lai.");
// }
// phones.splice(delNum - 1, 1);
// console.log(`Dien thoai o STT ${delNum} da bi xoa bo.`);

// console.log("Danh sach thong tin dien thoai: ");
// for (let index = 0; index < phones.length; index++) {
//     console.log(`${index + 1}.
//     Ten DT: ${phones[index].name}`);
//     if (phones[index].price === -1) {
//         console.log("Gia: Ngung kinh doanh");
//     }
//     else if (phones[index].price === 0) {
//         console.log("Gia: Chua co gia");
//     }
//     else {
//         console.log(`Gia: ${phones[index].price} VND`);
//     }
//     console.log(`NSX: ${phones[index].factory}
//     -------------------------------`);
// }
// // 5
// let search = prompt("Moi nhap vao tu khoa muon tim kiem: ").toLocaleLowerCase();
// let res = [];
// for (let index = 0; index < phones.length; index++) {
//     if (phones[index].name.toLocaleLowerCase().includes(search) == true
//         || phones[index].factory.toLocaleLowerCase().includes(search) == true
//         || phones[index].price.toString().includes(search) == true) {
//         res.push(phones[index]);
//     }
// }
// if (res.length == 0) {
//     console.log(`Khong co ket qua voi tu khoa ${search}`);
// }
// else {
//     console.log("Danh sach thong tin dien thoai: ");
//     for (let index = 0; index < res.length; index++) {
//         console.log(`${index + 1}.
//     Ten DT: ${res[index].name}`);
//         if (res[index].price === -1) {
//             console.log("Gia: Ngung kinh doanh");
//         }
//         else if (res[index].price === 0) {
//             console.log("Gia: Chua co gia");
//         }
//         else {
//             console.log(`Gia: ${res[index].price} VND`);
//         }
//         console.log(`NSX: ${res[index].factory}
//     -------------------------------`);
//     }
// }
// 6
let priceFrom = parseInt(prompt("Moi ban nhap vao khoang gia can tim kiem tu (don vi trieu): "));
let priceTo = parseInt(prompt("Moi ban nhap vao khoang gia can tim kiem den (don vi trieu): "));
let res = [];
for (let index = 0; index < phones.length; index++) {
    if (priceFrom * Math.pow(10, 6) >= phones[index].price) {
        res.push(phones[index]);
    }
}
for (let index = 0; index < phones.length; index++) {
    if (priceTo * Math.pow(10, 6) <= phones[index].price) {
        res.push(phones[index]);
    }
}
console.log("Danh sach thong tin dien thoai: ");
for (let index = 0; index < res.length; index++) {
    console.log(`${index + 1}.
    Ten DT: ${res[index].name}`);
    if (res[index].price === -1) {
        console.log("Gia: Ngung kinh doanh");
    }
    else if (res[index].price === 0) {
        console.log("Gia: Chua co gia");
    }
    else {
        console.log(`Gia: ${res[index].price} VND`);
    }
    console.log(`NSX: ${res[index].factory}
    -------------------------------`);
}