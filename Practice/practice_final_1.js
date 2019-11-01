// 1a

/* function s1Cal(x, n) {
    let s = 0;
    for (let index = 0; index <= n; index++) {
        s += Math.pow(x, index);
    }
    console.log(`Voi x = ${x}, N = ${n} ta co: S = ${s}`);
}

let x = prompt("Moi nhap vao gia tri cua x: ");
let n = prompt("Moi nhap vao gia tri cua N: ");
s1Cal(x, n); */

// 1b

/* function s2Cal(n) {
    let s = 0;
    let res = 1;
    for (let index = 1; index <= n; index++) {
        res *= index;
        s += res;
    }
    console.log(`Voi N = ${n} ta co: S = ${s}`);
}

let n = prompt("Moi nhap vao gia tri cua N: ");
s2Cal(n); */

// 2

/* let s = 0;
let n = 0;
while (s <= 1000) {
    n++;
    s += n;
}
console.log(n); // s = 1035 */

// 3

/* function ucln(a, b) {
    let tempA = a, tempB = b;
    if (a == 0) {
        console.log(`UCLN cua ${tempA} va ${tempB} la: ${b}`);
    }
    else if (b == 0) {
        console.log(`UCLN cua ${tempA} va ${tempB} la: ${a}`);
    }
    else {
        while (a != b) {
            if (a > b) {
                a -= b;
            }
            else {
                b -= a;
            }
        }
        console.log(`UCLN cua ${tempA} va ${tempB} la: ${a}`);
    }
}

function bcnn(a, b) {
    let res = max = step = 0;
    if (a > b) {
        max = step = a;
    }
    else {
        max = step = b;
    }

    while (1) {
        if (max % a == 0 && max % b == 0) {
            res = max;
            break;
        }
        max += step;
    }
    console.log(`BCNN cua ${a} va ${b} la: ${res}`);
}

let a = parseInt(prompt("Moi nhap gia tri so a: "));
let b = parseInt(prompt("Moi nhap gia tri so b: "));
ucln(a, b);
bcnn(a, b); */

// 4

/* function nSpelling(n) {
    let res = "";
    if (n >= 0 && n <= 9) {
        switch (n) {
            case '0':
                res += "Khong";
                break;
            case '1':
                res += "Mot";
                break;
            case '2':
                res += "Hai";
                break;
            case '3':
                res += "Ba";
                break;
            case '4':
                res += "Bon";
                break;
            case '5':
                res += "Nam";
                break;
            case '6':
                res += "Sau";
                break;
            case '7':
                res += "Bay";
                break;
            case '8':
                res += "Tam";
                break;
            case '9':
                res += "Chin";
                break;
        }
    }
    else if (n <= 99) {
        switch (n.charAt(0)) {
            case '1':
                res += "Muoi";
                break;
            case '2':
                res += "Hai Muoi";
                break;
            case '3':
                res += "Ba Muoi";
                break;
            case '4':
                res += "Bon Muoi";
                break;
            case '5':
                res += "Nam Muoi";
                break;
            case '6':
                res += "Sau Muoi";
                break;
            case '7':
                res += "Bay Muoi";
                break;
            case '8':
                res += "Tam Muoi";
                break;
            case '9':
                res += "Chin Muoi";
                break;
        }
        switch (n.charAt(1)) {
            case '0':
                res += "";
                break;
            case '1':
                res += " Mot";
                break;
            case '2':
                res += " Hai";
                break;
            case '3':
                res += " Ba";
                break;
            case '4':
                res += " Bon";
                break;
            case '5':
                res += " Nam";
                break;
            case '6':
                res += " Sau";
                break;
            case '7':
                res += " Bay";
                break;
            case '8':
                res += " Tam";
                break;
            case '9':
                res += " Chin";
                break;
        }
    }
    console.log(res);
}

let n = prompt("Moi nhap vao so N: ");
nSpelling(n); */

// 5

let images = {
    "name": "images",
    "isFolder": true,
    "content": [
        {
            "name": "background.jpg",
            "isFolder": false,
            "content": []
        },
        {
            "name": "forceground.jpg",
            "isFolder": false,
            "content": []
        },
        {
            "name": "my travel",
            "isFolder": true,
            "content": [
                {
                    "name": "ha noi",
                    "isFolder": true,
                    "content": [
                        {
                            "name": "pho-co.jpg",
                            "isFolder": false,
                            "content": []
                        },
                        {
                            "name": "ho-guom.jpg",
                            "isFolder": false,
                            "content": []
                        }
                    ]
                },
                {
                    "name": "check-in.jpg",
                    "isFolder": false,
                    "content": []
                }
            ]
        }
    ]
}

function nameSearch(txt) {
    txt.toLocaleLowerCase();
    let res = [];
    let count = 0;
    if (images.name.toLocaleLowerCase().include(txt) == true) {
        res.push(images);
        count++;
    } // dung while - do
    if (images.content != []) {
        for (let index = 0; index < images.content.length; index++) {
            if (images.content[index].name.toLocaleLowerCase().includes(txt) == true) {
                res.push(images.content[index]);
                count++;
            }
            // unfinished
        }
    }
}

let txt = prompt("Moi nhap vao tu khoa can tim kiem: ");
nameSearch(txt);