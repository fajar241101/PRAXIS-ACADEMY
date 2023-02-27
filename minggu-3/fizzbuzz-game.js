// for(let i = 1; i <= 100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz");
//     }else if(i % 3 == 0){
//         console.log("Fizz");
//     }
//     else if (i % 5 == 0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }


for(let i = 2; i <= 100; i++){
        let counter = 0;
        for(let j = 1; j <= i; j++){
            if (i % j == 0){
                counter++;
            }
        }
        if (counter > 2){
            console.log(i);
        } else {
            console.log(i + " angkaPrima");
        }
    }