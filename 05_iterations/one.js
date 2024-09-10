// for
 for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
    //   console.log("5 is best number");
    }
   //  console.log(i);
 } 

for (let i = 0; i <= 10; i++) {
   // console.log(`outer loop : ${i}`)
   for (let j = 0; j <= 10; j++) {
      // console.log(`inner loop : ${j} & inner loop ${i}`)
      // console.log(i + '*' + j + '=' + i*j);
   }   
}

let arr = ["flash", "spiderman", "thor", "ironman"]
   // console.log(arr.length)
for (let index = 0; index < arr.length; index++) {
   const element = arr[index];
   // console.log(element);   
}

// break and continue

// for (let i = 1; i <= 20; i++) {
//    if(i == 5){
//       console.log(` 5 is detected`);
//       break;
//    }
//    console.log(`value of i is ${i}`)   
// }

for (let i = 1; i <= 20; i++) {
   if(i == 5){
      console.log(` 5 is detected`);
      continue;
   }
   console.log(`value of i is ${i}`)   
}
