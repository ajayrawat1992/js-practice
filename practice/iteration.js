// const coding=[10,20,30,40,50,60,70]

//   const values=coding.forEach((item)=>

//  {
// // console.log(item);   
//     return item                  // foreach loop doesn't return any value,inplace we have to use filter method
//  })
//  console.log(values)

//==========================================================================================================



// const   values=[10,20,30,40,50,60,70]

// const newnums=values.filter((num)=>  // filter returns the  value who satisfies the condition 
// {return num>25})  // if i use{} then scope opens and we have to use return keyword
// console.log(newnums)

//=================================================================

// const value1=[10,20,30,40,50,60,70]
// const value2=[]

// value1.forEach((num)=>
// {
//   if(num>25)
//   {
//   value2.push(num)
//   }
// }) 
// console.log(value2)

//==============================================================================

// const books=[
// {
//   title:"book1",
//   genre:"history",
//   publish:1990
// },
// {
//   title:"book1",
//   genre:"geo.",
//   publish:1990
// },
// {
//   title:"book1",
//   genre:"history",
//   publish:1990
// },
// {
//   title:"book1",
//   genre:"geo.",
//   publish:1990
// },
// {
//   title:"book1",
//   genre:"history",
//   publish:1980
// }
// ]

// let values=books.filter((num)=>num.genre==='history')  
// values=books.filter((num)=>{return num.publish>=1990})  // here we have taken out object values  which are inside array
// console.log(values)

//=========================================================

// const value=[10,20,30,40,50]

// const newvalues=value.map((num)=>{return num+10})  //map function returns values
// console.log(newvalues)

//==========================chaining

// const value=[10,20,30,40,50]

// const newvalues=value.map((num)=>num*10).map((num)=>num*10) //this is called chaining.2nd num gets value from 1st map(modified one)
//                      .filter((num)=>num>2500)  //we can add any no. of map or filter
// console.log(newvalues)


const value=[10,20,30,40,50]
const initialvalue=0
const sum=value.reduce((accumulator,currentvalue)=> 

 // console.log(`acc:${accumulator} and curr:${currentvalue}`)// this accumulator gets value =0 and currentvaluegets value from array
   accumulator+currentvalue ,0)
console.log(sum)
      





