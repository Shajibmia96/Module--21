const prioLyrices= 'Besh Besh Besh Shabash Bangladesh .Jao agiye Amar Bangladesh'

const exitItem = 'Bangladesh'
const exitGo = "Jao"

// let doesExit = prioLyrices.toLowerCase().includes(exitItem.toLowerCase())
// let goExit = prioLyrices.toLowerCase().includes(exitGo.toLowerCase())
// console.log(doesExit);
// console.log(goExit)


// IndexOf
const check = prioLyrices.indexOf('Amar')
console.log(check);
console.log(prioLyrices.indexOf('aguiye'))
if(prioLyrices.indexOf('agiye') !== -1){
    console.log("Find it")
}else{
    console.log("Cannot find it")
}