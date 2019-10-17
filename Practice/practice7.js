// 1
let person = {
    'name': 'Pham Van A',
    'age': 20,
    'subject': ['Javascript', 'Html', 'css'],
}
// 2
person.school = 'DH Quoc Gia HN';
// 3
let newKey = prompt("Moi nhap mot key moi: ");
let newValue = [];
let isEmpty = false;
do {
    newValue.push(prompt("Moi nhap vao value cua key moi (nhap 0 neu khong muon nhap them): "));
    if (newValue[newValue.length - 1] == '0') {
        isEmpty = true;
        newValue.pop();
    }
} while (isEmpty == false);
person[newKey] = newValue;
console.log(person);
