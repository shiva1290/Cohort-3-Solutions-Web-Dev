/*
## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs=require('fs');
fs.writeFile('./hi.txt',"Hii from code",(err)=>{
if(err){
console.log(err);
return;
}
console.log("Written succesfully");
});

fs.readFile('./hi.txt','utf-8',(err,data)=>{
if(err){
console.log(err);
return;
}
console.log(data);
});