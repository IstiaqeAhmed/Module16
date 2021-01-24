// var name1 = " I am Istiaqe Ahmed Khan";
//  console.log(name1.indexOf("Khan"))//zero(0) theke count kora suro korbe ebong number of index dekhabe.jemon ekhane 20 number index e khan ache. space keu count korbe.

// var num = ["istiaqe", "ahmed", "khan", "is", "the", "best"];
// console.log(num.indexOf("khan"))// space count kore na array er bitor theke.zero theke count kora suro kore.jemon "khan" ache 2 no position e. 
// var total = ((num.indexOf("ahmed"))+(num.indexOf("khan")));
// console.log(total);


// var num1 = 45.5;
// var num2 = 50;
//  num1 = "" // num1 ke string kore kore dibe empty string deowar fole but num1 ke count korbe na. num1 total a count hbe na. only num2 er value dekhabe.
// num2 = ""+num2;
// num1 = + num1 ;//string er purbe sudomatro plus sign(+) diyeo string ke number type banano jai.
// num1 = parseInt(num1);//string variable ke convert kore number type variable e rupantor korte parseFloat or parseInt(purno sonkha dekhabe doshomik chara) bebohar kora hoy.
// total = num1 + num2;
//console.log(typeof(num2))// type of() likhle variable type dekha jabe . string na number naki boolean ta jana jabe.
// console.log(total)

// num1 = 2.3334;
// num2 = 3.5556;
// add = num1 + num2;
// console.log(add.toFixed(3));// .toFixed diye doshomik er pore koto ghor porjonto jabe ta dekha jabe.




// fibonacci series

// // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// function fibonacciIterative(nume){
//     var fibo = [1, 1];
//     for(var i = 0; i<=nume; i++){

//     }
// }

// var name = "istiaqe", "ahmed" ;
// console.log(name.length);// length er sahajje koto ti letter ache ta jana jai. 


// console.log(num.indexOf("khan"))// space count kore na array er bitor theke.

    // var name1 = ["istiaqe", "ahmed", "khan", "is", "the", "best"];
  
    // console.log(name1.length);//console.log(name1[0].length); poition[0] te je word ache tar modde 7 ti letter ache23  // length diye variable er vitor kototi element ache ta count kor jai. abar length diye ekta niddristo element e kototi letter ache taw count kora jai.
  
   // while loop 
   //while loop dile ekta jinish na howa porjonto cholte thakbe. jemon pet na bhora porjonto bhat khaite thaka. eikhana 10 theke suro hoye 15 porjonto cholte thakbe. ekta starting point diye deowa hoy jeita var er bhitor thake . arekta ending point diye deowa hoy jeita condition er bhitor thake. ar variable ke ek kore baranor jonne num++ or num = num+1 use kora hoy.//The while loop loops through a block of code as long as a specified condition is true.condition false hoile shes loop chola
    // var num = 10;
    // while(num<=15){ 
    //     console.log(num);
    //    num+=2;
    // 
    
//for loop
//   var name1 = ["istiaqe", "ahmed", "khan", "is", "the", "best"];
//   console.log(name1[1]);// name1[1] third bracket er bhitor jeita ache seita hoilo element er position number. eita likhar fole 1 position er element dekhabe. ar array er bhitor position obosshoi zero theke count kora start kore.

//variable declare korbe(i=0), condition thakbe(i<10), loop variable ta change hbe mane variable ta barabe (i++). loop  er bhitor my name diye disi ekhon condition mittha na hoile my name jaite parbe na. ar shes hbe jokhon my name 1 theke start kore 5 porjonto lekha hbe.
// for(var i = 1; i<=5; i++){
//     console.log("my name");
// }

//  var name1 = ["istiaqe", "ahmed", "khan", "is", "the", "best"];
//   for(var i = 0; i< name1.length; i++){
//       var element = name1[i];
//       console.log(element)
//   }

// var marks = ["misitay", "istiaqeiollsdklfkskf", "ahmedk", "nitailur", "favicong", "dangerous", "kihijkllssfss"];
// var max = marks[0];
// for(var i = 0; i<marks.length;i++){
//     var element = marks[i];
//     if (element.length> max.length){
//         max= element;
//     }
    
// }
// console.log(max);


function megaFriend(marks){
    var max = [0];
for(var i = 0; i<marks.length;i++){
    var element = marks[i];
    if (element.length> max.length){
        max= element;
    }
   
}
  return max;
 
}
var total =["misitay", "istiaqe", "ahmedk", "nitailur", "favicong", "dangerous", "kihijkllssfss"];
var result = megaFriend(total);
console.log(result)