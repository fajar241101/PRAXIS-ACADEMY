// var angka = 8;
// console.log('<< perandingan sama dengan >>');
// console.log(angka == 8);
// console.log(angka == 5);
// console.log('<< akhir dari perandingan sama dengan >>');
// console.log('<< != >>');
// console.log(angka != 8);
// console.log(angka != 0);
// var angkaBeda = "1";
// console.log(angkaBeda === 2);
// console.log(angkaBeda === 8);
// console.log(angkaBeda === "1");
// var angkaBeda = "9";
// console.log(angkaBeda == 1);
// console.log(angkaBeda != 3);
// console.log(angkaBeda === 9);
// console.log(angkaBeda !== 8);
// var angka = 100;
// console.log(angka <= 75);
// console.log(angka >= 100);
// console.log(angka < 90);
// console.log(angka > 100);
// console.log(true || false);
// console.log(false || false);
// console.log(true || true);
// console.log(false && true && false);
// console.log(true && true && false);
// console.log(true && true);
// var tampung = 3;
// if(tampung === 5){
//     console.log("angka yang ditampung adalah 5!");
// }
// else{
//     console.log("angka yang ditampung bukan 5!");
//     if(tampung > 5){
//         console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5");
//     }
//     else{
//         console.log("angka yang ditampung bukan 5, tapi lebih kecil dari 5");
//     }
// }
// var tampung = 4;
// if(tampung == 5){
//     console.log("angka yang ditampung adalah 5");
// }
// else if(tampung < 5){
//     console.log("angka yang ditampung bukan 5, tapi lebih kecil dari 5");
// }
// else{
//     console.log("angka yang ditampung bukan 5, tapi lebih besar dari 5");
// }

// tampung == 5 ? console.log("angka yang ditampung adalah 5") : console.log("angka yang ditampung bukan 5"); 

// var buttonPushed = 2;
// switch (buttonPushed) {
//     case 1: {console.log('matikan TV'); break;}
//     case 2: {console.log('turunkan volume'); break;}
//     case 3: {console.log('naikkan volume'); break;}    
//     case 4: {console.log('matikan suara TV'); break;}    
//     default: {console.log('tidak terjadi apa-apa');}
// }

// var angka = 1;
// while (angka <= 10) {
//     console.log('angkanya ' + angka);
//     angka++
// }
// console.log(typeof (angka));

// var deret = 5;
// var jumlah = 1;
// while (deret > 0) {
//     jumlah += deret;
//     deret--;
//     console.log('jumlah saat ini' + jumlah);
// }
// console.log(jumlah);

for(var angka = 2; angka <= 10; angka++){
    console.log(angka);
    console.log(`${angka}`);
    }

// for (let i = 0; i < 10; i+=2) {
//     console.log('iterasi dengan increment counter 2: ' + i);
// }

// console.log('------------------');
// for (let j = 15; j > 0; j-=3) {
//     console.log('iterasi dengan decrement counter 3: ' + j);
// }

// var flag = 1;
// while (flag < 10) {
//     console.log('iterasi ke-' + flag);
// }

// let flag =1
// flag += 1
// flag = flag + 1
// flag+2
// console.log(flag);

// function tampilkan() {
//     console.log("halo!");
// }
// tampilkan();

// function munculkanAngkaDua() {
//     return 2
// }
// var angka = munculkanAngkaDua();
// console.log(angka);

// function kalikanSepuluh(angka) {
//     return angka * 10
// }
// var tampung = kalikanSepuluh(1);
// console.log(tampung);

// function tampilkanAngka(angkaPertama, angkaKedua) {
//     return angkaPertama + angkaKedua
// }
// console.log(tampilkanAngka(4,9));

// function tampilkanAngka(angka = 1) {
//     return angka
// }
// console.log(tampilkanAngka(9));
// console.log(tampilkanAngka());

// var fungsiPerkalian = function(angkaPertama, angkaKedua) {
//     return angkaPertama * angkaKedua
// }
// console.log(fungsiPerkalian(3,2));