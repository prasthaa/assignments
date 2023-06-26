//Q1 find if hari is in allUsers array or not/
//expected output is : 
//true
const name = 'hari'
const allUsers = ['hari', 'shyam', 'thakur']
if (allUsers.includes('hari')) {
    console.log('The array contains Hari');
} else {
    console.log('The array does not contain Hari');
}

let sum = 0
allUsers.map((item, id) => {
    if (item == 'hari') {
        sum = sum + 1
    }
})
console.log(sum) 


//to check how many hari  are present

const name1= 'hari'
const allUsers1 = ['hari','shyam','thakuri']

let count =0;
for (let  i=0; i<allUsers1.length;i++){
  if (allUsers[i]==name1){
    count=count+1;
  }
}
if(count>=2){
  console.log("duplicate exists",count)
}
else{
  console.log("duplicate doesnt exist")
}
