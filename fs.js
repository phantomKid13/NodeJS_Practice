// console.log(module,require, __dirname, __filename)

// setInterval(() => {
//     console.log('Hello World')
// }, 1000);

// const mod = require('./module.js')
// const fn = require('./fnmodule')

// fn.sayHi(mod.john)
// fn.sayHello(mod.peter)

const os = require('os')
const path = require('path')

// console.log(os.userInfo())
// console.log(os.freemem())

const filepath=path.join(__dirname,'Fruits.txt')
const basename=path.basename(filepath)

// console.log(path.resolve(__dirname,'index.js'))

const {readFile,writeFile} = require('fs')

// const data=readFileSync(filepath,'utf-8')
// console.log(data)

// writeFileSync(path.join(__dirname,'Fruits1.txt'),data,{flag:'a'})

readFile(filepath,(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data.toString())
});

console.log('File data has been read')
