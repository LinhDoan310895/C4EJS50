// let arr = [1, 2, 3, 4, 5, 6];
// let names = ["Hang", "Quang", "Hien"];

// console.log(names[1]);

// let numbers = [1, 4, 7, 9, 3, 7, 9, 5, 8, 5, 3, 5];

// for (let index = numbers.length - 1; index >= 0; index--) {
//     let element = numbers[index];
//     console.log(element);
// }

// let s = 0, tbc = 0.0;
// for (let index = 0; index < numbers.length; index++) {
//     s += numbers[index];
// }
// tbc = s / numbers.length;
// console.log(`TBC gia tri cac so trong day la: ${tbc}`);

// // 1
// let phones = ["iPhone X", "Note 10", "Xperia 2", "Nokia 1200", "A", "Z"];
// // In danh sach
// console.log("Danh sach cac model dien thoai (#1): ");
// console.log("STT Ten dien thoai");
// for (let index = 0; index < phones.length; index++) {
//     console.log(`0${index + 1}. ${phones[index]}`);
// }
// // 2
// phones.push(prompt("Moi ban nhap them ten 1 model dien thoai: "));
// // In danh sach
// console.log("Danh sach cac model dien thoai (#2): ");
// console.log("STT Ten dien thoai");
// for (let index = 0; index < phones.length; index++) {
//     console.log(`${index + 1}. ${phones[index]}`);
// }
// // 3
// let stt = prompt("Moi nhap vao STT muon sua: ");
// while (stt < 1 || stt > phones.length) {
//     stt = prompt("STT vua nhap vao khong hop le. Moi nhap lai STT muon sua: ");
// }
// phones[stt - 1] = prompt("Moi nhap ten model dien thoai muon sua: ");
// // In danh sach
// console.log("Danh sach cac model dien thoai (#3): ");
// console.log("STT Ten dien thoai");
// for (let index = 0; index < phones.length; index++) {
//     console.log(`${index + 1}. ${phones[index]}`);
// }
// // 4
// let stt2 = prompt("Moi nhap vao STT muon xoa: ");
// while (stt2 < 1 || stt2 > phones.length) {
//     stt2 = prompt("STT vua nhap vao khong hop le. Moi nhap lai STT muon xoa: ");
// }
// phones.splice(stt2 - 1, 1);
// // In danh sach
// console.log("Danh sach cac model dien thoai (#4): ");
// console.log("STT Ten dien thoai");
// for (let index = 0; index < phones.length; index++) {
//     console.log(`${index + 1}. ${phones[index]}`);
// }
// 5
let tuKhoa = prompt("Moi nhap vao 1 ky tu can tim kiem: ").toLocaleLowerCase();
console.log(`Danh sach cac model dien thoai co lien quan den "${tuKhoa}": `);
console.log("STT Ten dien thoai");
for (let index = 0; index < phones.length; index++) {
    if (phones[index].toLowerCase().includes(tuKhoa) == true) {
        console.log(`${index + 1}. ${phones[index]}`);
    }
}
// // 6
// console.log("Danh sach cac model dien thoai (Da sap xep): ");
// console.log("STT Ten dien thoai");
// let phonesLC = phones;
// for (let index = 0; index < phones.length; index++) {
//     phonesLC[index] = phones[index].toLowerCase();
// }
// phonesLC.sort();
// for (let index = 0; index < phonesLC.length; index++) {
//     console.log(`${index + 1}. ${phonesLC[index]}`);
// }