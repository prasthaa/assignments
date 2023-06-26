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

let tempArr2=[]
users.map((item)=> {
if(!tempArr.includes(item)){
  tempArr2.push(item)
}
})
 console.log(tempArr2) 
 



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

const myDetails = [
  {id:3, name: 'hari'},
  {id:5, name: 'shyam'},
  {id:6, name: 'gopal'},
]
let newArr5=[]
myDetails.map((item)=>{
newArr5.push(item.id)
})
console.log(newArr5)
// return only array of ids: expected output  [3,5,6]


// return only array of ids: expected output  [3,5,6]

let temp3=[]
myDetails.map((item)=>{
  temp3.push(item.id)
})
console.log(temp3)

//next method:
myDetails.map((item)=>{
  return(item.id)
})

let score1=0
userDetails.map((item)=>{
  for(let i=0;i<userDetails.length;i++){
  item.score1=item.score1 + item.marks[i]
  }
})
console.log(userDetails)
  // / calc the percentage he scored in exams out of total score
const obj ={
  computer: 42,
  maths: 42,
  science: 50
}



  // ['gopal','krish']
const arr3 = ['ram','shyam','hari']
const arr4 = ['ram','shyam','hari','gopal','krish']

let temp1Arr=[]
arr4.forEach((item,id)=>{
    if (!arr3.includes(item)) {
      temp1Arr.push(item)
  }
})
  console.log(temp1Arr)


// const arr1 = ['ram','shyam','hari']
// const arr2 = ['ram','shyam','hari','gopal','krish']

// // ['gopal','krish']
let tempArr=[]
arr2.filter((item,id)=>{
    if (!arr1.includes(item)) {
      tempArr.push(item)
      //  or return item 
  }
})
  console.log(tempArr)

var arr1 = [1,2,3,4],
    arr2 = [2,4],
    res = arr1.filter(item => !arr2.includes(item));
console.log(res);

  


// const myDetails = [
//     {id:3, name: 'hari'},
//     {id:5, name: 'shyam'},
//     {id:6, name: 'gopal'},
//   ]
  
// return only array of ids: expected output  [3,5,6]

let temp=[]
myDetails.map((item)=>{
  temp.push(item.id)
})
console.log(temp)


// / const userDetails= [
  //     {score: 0, name:'hari', marks: [10,3,23]},
  //     {score: 0, name:'shyam', marks: [50,23,23]},
  //     {score: 0, name:'shyam',marks: [20,13,43]},
  // ]
  //loop over the arr of objects and calculate total score, expected output is:
  
  // [
  //     {score: 36, name:'hari', marks: [10,3,23]},
  //     {score: 96, name:'shyam', marks: [50,23,23]},
  //     {score: 76, name:'shyam',marks: [20,13,43]},
  // ]
  
  let score=0
  userDetails.map((item)=>{
    for(let i=0;i<userDetails.length;i++){
    item.score=item.score + item.marks[i]
    }
  })
  console.log(userDetails)
  
  