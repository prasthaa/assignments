// // calc the percentage he scored in exams out of total score
// const obj ={
//   computer: 42,
//   maths: 42,
//   science: 50
// }


function score(a,b,c){
  let sum = a+b+c
  let percentage=(sum/150)*100
  let p= percentage.toFixed(2)
  return p
}
score(obj.computer,obj.maths,obj.science)
  console.log(p)



const userDetails={
  name:"kaylin",
maths:23,
science:35,
gk:30
}

//{
//userName: "kaylin"
//subjectCodes:['M','S','G']
// subejctScore:['23','35','30']
// }

const userName=userDetails.name
// userName
const score=Object.values(userDetails)
// score
tempArr=[]
score.forEach((item)=>{
  // console.log(typeof item)
  if(typeof item !='string'){
    tempArr.push(item)
  }
})
console.log(tempArr)
subTemp=[]
const subjectCodes=Object.keys(userDetails)
// subjectCodes
subjectCodes.forEach((item)=>{
  if(item!='name'){
    console.log(item)
    subTemp.push(item.charAt(0))
  }
})
console.log(subTemp)













