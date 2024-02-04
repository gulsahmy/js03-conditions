console.log("*** CONDITIONS ***");

// const num1 = Number(prompt("Bir sayi giriniz:"))
const num1 = 5;
// console.log(num1, typeof num1);
// console.log("Toplam:", num1 + num2);

if (num1 < 0) {
  console.log("Girilen sayı negatiftir");
} else if (num1 > 0) {
  console.log("Girilen sayı pozitiftir");
} else {
  console.log("Girilen sayi sıfırdır");
}

//
// const enBuyuk = Math.max(sayi1, sayi2, sayi3)
// console.log("EnBuyuk:", enBuyuk)

// if (sayi1 >= sayi2) {
//     if(sayi1 >= sayi3){
//         console.log("Enbuyuk:", sayi1)
//     }
// }
// if (sayi2 >= sayi1) {
//     if(sayi2 >= sayi3){
//         console.log("Enbuyuk:", sayi2)
//     }
// }
// if (sayi3 >= sayi1) {
//     if(sayi3 >= sayi2){
//         console.log("Enbuyuk:", sayi3)
//     }
// }

// if (sayi1 >= sayi2 && sayi1 >= sayi3) {
//     console.log("Enbuyuk:", sayi1);
// }
// if (sayi2 >= sayi1 && sayi2 >= sayi3) {
//     console.log("Enbuyuk:", sayi2);
// }
// if (sayi3 >= sayi2 && sayi3 >= sayi1) {
//     console.log("Enbuyuk:", sayi3);
// }

//  const sayi1 = 5
//  const sayi2 = 6
//  const sayi3 = 7

//  let enBuyuk = sayi1

//  if (sayi2 > enBuyuk ) {
//     enBuyuk = sayi2
//  }

//  if (sayi3 > enBuyuk) {
//     enBuyuk = sayi3
//  }

//  console.log("EnBuyuk:", enBuyuk)

const yaş = 20;
const cinsiyet = "Erkek";
const sağlıklı = true;
const koşul =
  yaş >= 18 && cinsiyet.toLowerCase() === "erkek" && sağlıklı === true;

if (koşul === true) {
  console.log("askerlik yapmalı");
} else {
  console.log("askerlik yapması gerekmez");
}

const cumle = "Bugün günlerden Cumartesi";
const kucukHarfler = cumle.toLowerCase();
const buyukHarfler = cumle.toUpperCase();
console.log(kucukHarfler);
console.log(buyukHarfler);

const yas = 15;
//? Ternary
yas >= 18 ? console.log("askerlik yapmalı") : console.log("askerlik yapmaz");

//? if-else
if (yas > 18) {
  console.log("askerlik yapmalı");
} else {
  console.log("askerlik yapmaz");
}

const age = 30;

const sonuc = age <= 14 ? "cocuk" : age <= 18 ? "ergen" : "yetişkin";

console.log(sonuc);

//? if-else hali

let durum = "";
if (age <= 14) {
  durum = "cocuk";
} else if (age <= 18) {
  durum = "ergen";
} else {
  durum = "yetiskin";
}
console.log(durum);

//! ornek
const calismaSuresi = 10;
let maas = 30000;

// calismaSuresi >= 10 ? (maas = maas * 1.5) : "";

maas = calismaSuresi >= 10 ? maas * 1.5 : maas
console.log("MAAS:" , maas);

let salary = 40000
let year = 5
let marriage = true

// year >= 10 && marriage === true && (salary = salary * 1.5) // 2 condition ve tek durum

year >= 10 && (salary = salary * 1.5) // tek condition tek durum

console.log("Salary:", salary);

const sene = 14
let result = "ahmet"

sene >= 18 || (result = "cocuk")
console.log(result);

//false ise çalışır
result = ""
let myVar = result || "noname"
console.log(myVar);


const s1 = +prompt("1.sayiyi giriniz:")
const islem = prompt("islemi giriniz: +, -, /, *")
const s2 = +prompt("2.sayiyi giriniz")

// if (!s1) {
//   alert("lütfen geçerli bir sayi giriniz")
// }

if (isNaN(s1) || isNaN(s2)) {
  alert("Lütfen geçerli bir sayı giriniz:")
}

if (islem === "/" && s2 === 0){
  alert("sıfıra bolme hatası")
}

let yekun = 0

switch (islem) {
  case "+" :
    yekun = s1 + s2
    break 
  case "-" :
    yekun = s1 - s2
    break 
  case "/" :
    yekun = s1 / s2
    break 
  case "*" :
    yekun = s1 * s2
    break
  default:
    alert("yanlıs islem")
    break  
}

console.log(`${s1} ${islem} ${s2} = ${yekun.toFixed(2)}`);