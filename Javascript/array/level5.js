// calculate the sum of array using either for of or for in
// using for in 
const arr=[2,5,6,7]
 let sum=0
 for (let i in arr){
   sum=sum+arr[i]
 }
console.log(sum)

 //using for of :
let sum1=0
 for (let i of arr){
   sum1=sum1+i
 }
console.log(sum1)


//high level 
//remove from array if duplicate
const users=['hari','shyam','hari']

let tempArr=[]
users.map((item)=> {
if(!tempArr.includes(item)){
  tempArr.push(item)
}
})
 console.log(tempArr) 
 



//calculate the sum of all odd numbers inside nested array
const newArr=[[4,5],[5,7],[7,2]]
let sum2=0
for (i=0;i<newArr.length;i++){
  if(newArr[i]%2!=0){
    sum2= newArr[0][1]+newArr[1][0]+newArr[1][1]+newArr[2][0]
  }
}
    console.log(sum2)



    // next  method 
    const newArr1 = [[4,5],[5,7],[7,2]]
let sum3=0;
//first step element lai access garne for eg [4,5], [5,7] ,etc. 
for(i=0;i<newArr.length;i++){
  // console.log(newArr[i])
  let tempArr1= newArr1[i]
  for(j=0;j<tempArr1.length;j++){
    // console.log(tempArr1[j])
    if(tempArr1[j]%2!=0){
      sum3=sum3+tempArr1[j];

    }
  }
}
console.log(sum3)