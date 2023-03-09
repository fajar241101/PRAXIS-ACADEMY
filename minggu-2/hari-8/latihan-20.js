// const kelvin = 0; // Kelvin
// const celcius = kelvin - 273; // celcius
// let fahrenheit = celcius * (9/5) + 32; // fahrenheit
// fahrenheit = Math.floor(fahrenheit); // round down the fahrenheit temperature
// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// let newton = celcius * (33 / 100);  //newton 
// newton = Math.floor(newton);    // round down the newton temperature
// console.log(`The temperature is ${newton} degrees Newton.`)

// const myAge = 22;
// let earlyYears = 2;
// earlyYears *= 10.5;
// let laterYears = myAge - 2;
// laterYears *= 4;  // multiplication assignment operator and assign in one step
// console.log(earlyYears);
// console.log(laterYears);
// let myAgeInDogYears = earlyYears + laterYears;
// myName = 'Fajar' .toLowerCase();
// console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)


// let userName = 'Fajar';
// userName ? console.log(`Hello, ${userName}`): console.log('Hello!');
// let userQuestion = 'Will i get married soon';
// console.log(`${userName} has asked - ${userQuestion}`);
// let randomNumber = Math.floor(Math.random() * 8);
// console.log(randomNumber);
// let eightBall ='';
// switch(randomNumber){
//   case 0:
//   eightBall = 'Jangan Halu';
//   break;
//   case 1:
//   eightBall = 'Kamu Nanyaee!';
//   break;
//   case 2:
//   eightBall = '1000 tahun lagi awokawok';
//   break;
//   case 3:
//   eightBall = 'Gazz sat set sat set';
//   break;
//   case 4:
//   eightBall = 'Yoi Bismillaah lurr!';
//   break;
//   case 5:
//   eightBall = 'Ga deh kan kamu wibu';
//   break;
//   case 6:
//   eightBall = 'Tebelin Dompet lu dulu deh';
//   break;
//   case 7:
//   eightBall = 'Emang ada yang suka elu';
//   break; 
// }
// console.log(`The Magic 8 Ball says, ${eightBall}.`);

// let pasienBpjs = Math.floor(Math.random() * 1000);
// let early = false;
// let age = 28;
// if(early && age > 18 ){
//   pasienBpjs += 1000;
// }
// if(early && age > 18){
//   console.log(`Pemeriksaan dilakukan at 9.30 am, your nomor urut pasien BPJS is ${pasienBpjs}.`);
// }
// else if(!early && age > 18){
//   console.log(`Pemeriksaan dilakukan at 11.00 am, your nomor urut pasien BPJS is ${pasienBpjs}. `);
// }
// else if(age < 18){
//   console.log(`Pemeriksaan dilakukan at 12.30 pm, your nomor urut pasien BPJS is ${pasienBpjs}.`);
// }
// else{
//   console.log('Please approach the registration desk, immediately!')
// }