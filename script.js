//if icinde if(arasdirma-tapsiriqdan elave)
age = 19;
if (age > 18) {
 console.log
}
else {
  console.log('Suruculuk vesiqesi ala bilmezsiniz.')
}



//sinifdeki tapsiriq

let eded1 = +prompt("EDED 1: ");
let eded2 = +prompt("EDED 2: ");
let sum = eded1 + eded2;
if (sum % 2 === 0) {
  console.log(`${eded1} ve ${eded2} ededlerinin cemi ${sum}-dir. ${sum} cutdur`);
} else {
  console.log(`${eded1} ve ${eded2} ededlerinin cemi ${sum}-dir. ${sum} tekdir`);
}






//daxil olunan ededin sade yoxsa murekkkeb oldugunun taplimasi


let num = +prompt("Number: ");
let sade = true
for (let bolen = 2; bolen < num; bolen++) {
  if (num % bolen == 0) {
    console.log('murekkebdir');
    sade = false

  }

}
if (sade) {
  console.log('sade')
}




//daxil olunan ededin mukemmel olub-olmadigini tapin

let eded = +prompt("Enter:");
let salam = 0


for (let k = 1; k < eded; k++) {
  if (eded % k === 0) {
    salam += k
  }

}




//daxil olunan 2 eded arasindaki sade ededleri gosterin

let f1 = +prompt("enter 1:");
let f2 = +prompt("enter 2:");

for (let eded = f1; eded <= f2; eded++) {
  let sade = true;
  for (let bolen; bolen < eded; bolen++) {
    if (eded % bolen === 0) {
      sade = false;
      break;
    }
  }

  if (sade) {
    console.log(eded)
  }
}








//daxil olunan 2 eded  arasindaki sonu 7 ile biten ededleri gosterin


let 










