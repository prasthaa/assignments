//Q1. write a js function that  can  calculates the final price
// formula is distance multiply unitKmPrice
//expected output is 600 

// const rideDetails= {
//     pickup: 'balaju',
//     destination: 'thamel',
//     distance: '20km',
//     unitKmPrice: 30
// }


function test(dist,unitKm){
const D= dist.slice(0,2)
const a =Number(D)
// console.log(dist,unitKm)
 const b= a *unitKm
return b
}
test(rideDetails.distance,rideDetails.unitKmPrice)
console.log(b)


const status1 ={
    status: 'onTheWay'
}
const status2 ={
    status: 'success'
}
const checkIfSucces=(status)=>{
//write your code here
  return status.status=='success'

  }



checkIfSucces(status1)  //should return false

checkIfSucces(status2)  //should return true