const koa = require('koa')
const app =new koa()
const mongoose = require('mongoose')
const {connect,initSchemas} = require('./database/init.js')
const Router = require("koa-router")
const user = require('./appApi/user.js')
let router = new Router()
router.use("/user",user.router())
//立即执行函数
(async () =>{
    await connect()
    initSchemas()
    const User = mongoose.model('User')
    let oneUser = new User({userName:'jspang13',password:'123456'})
  
    oneUser.save().then(()=>{
        console.log('插入成功')
        
    })
let  users = await  User.findOne({}).exec()
 
console.log('------------------')
console.log(users)
console.log('------------------')  
})()

app.use(async(ctx)=>{
    ctx.body="<h3>hello</h3>"
}).listen(3000,()=>{
    console.log('koa is ok')
})

app.use(router.routes())
app.use(router.allowedMethods())