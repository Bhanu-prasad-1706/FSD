const os=require('os')
console.log(os.platform())
console.log(os.homedir())
console.log(os.freemem())   
console.log(os.totalmem())
console.log(os.uptime())       

const fs=require('fs')
fs.writeFile('example.txt','Hello World!',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('File created successfully');
});
