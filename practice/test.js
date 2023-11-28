// function calculate(...mynumber)  //rest operator used to collect the values passed  and present in array
// {
// console.log(mynumber)

// }
// calculate(100,200,300)


//============================================================


//passing objects in function
// const details={
//     name:"ajay",
//     surname:"rawat"
// }
// function printname(letarray)
// {
//     console.log(`your name is ${letarray.name} and surname is ${letarray.surname}` );
// }

// printname(details)

//============================================================

// function outer()
// {
//     var num1=100
//     function inner()
//     {
//         var num2=200
//         console.log(num1)
//     }
//     inner()
//     //console.log(num2) // we cant access the value as it is under inner() function scope
// }
// outer()



//============================================================


way1(5)
function  way1(num)
{
    return  num +1
}


way2(5)   // gives error ==>Cannot access 'way2' before initialization
const way2=function(num)
    {
        return num+3
    }

