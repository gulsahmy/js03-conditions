

console.log("*** CONDITIONS ***")


// const num1 = Number(prompt("Bir sayi giriniz:"))
 const num1 = 5
// console.log(num1, typeof num1);
// console.log("Toplam:", num1 + num2);

if (num1 < 0) {
    console.log("Girilen sayı negatiftir");
}
else if (num1 > 0) {
    console.log("Girilen sayı pozitiftir")
}
else {
    console.log("Girilen sayi sıfırdır")
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

 const sayi1 = 5
 const sayi2 = 6
 const sayi3 = 7

 let enBuyuk = sayi1

 if (sayi2 > enBuyuk ) {
    enBuyuk = sayi2
 }

 if (sayi3 > enBuyuk) {
    enBuyuk = sayi3
 }

 console.log("EnBuyuk:", enBuyuk)



























