// let a:number=10
// console.log(a);

// //tsx filename
//  /*tsx veriables

// npm install -g typescript
// npm install -g tsx

// dclaring veriable in typescript

// let p:number=100
// let myname:string="john"
// let bool:boolean=true

// any 
// let value:any 
// value= 100
// value="john"

// unknown: (avoid using unknown type)
// let data : unknown
// value = 100
// value = "john"

// void : 
// function will return the void datatype
// function hello():void

// syntax of variable declaration 
// keyword variableNam:type=variableValue




//  */

// let num:number=100
// let s:string="testing"
// console.log(num,s)

// let data :unknown
// data=100
// data="john"
// console.log(data)


// let myAge:number=30
// if(myAge>=18){
//     console.log("eligible for voting")
// }
// else{
//     console.log("not eligible for voting")
// }

// //switch 
// let day:number=3
// switch(day){
//     case 1:
//         console.log("monday")
//         break;
//     case 2:
//         console.log("tuesday")
//         break;
//     case 3:
//         console.log("wednesday")
//         break;
//     default:
// //         console.log("invalid day")
// // }

// //for loop
// for(let i:number=0;i<5;i++){
//     console.log(i)
// }
// //while loop
// let j:number=0
// while(j<5){
//     console.log(j)
//     j++
// }
// //do while loop
// let k:number=0
// do{
//     console.log(k)
//     k++
// }while(k<5)


  //arrays
  let fruits:string[]=["apple","banana","orange"]
  console.log(fruits)

  let values:number[]=[10,20,30,40]
  console.log(values)

  let values1:Array<number>=[100,200,300]
  console.log(values1)

  //string in typescript
  let myName:string="john"
  console.log(myName)

  console.log(myName.toUpperCase())
  console.log(myName.toLowerCase())
  console.log(myName.length)



//object in typescript
//interface defines the structure of an object
//it will tell which are the properties and their types in an object
//in typescript first create interface and then create object based on that interface
/*
interface employee{
    id:number;
    name:string;
    salary:number;
}   
interface interfaceName{
    propertyName1: propertyType;
    propertyName2: propertyType;
    propertyName3: propertyType;
}


*/

interface car{
    brand:string;
    model:string;
    year:number;
}

const myCar:car={
    brand:"Toyota",
    model:"Camry",
    year:2020
}
console.log(myCar)


