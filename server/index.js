const koa = require('koa')
const app =new koa()
const mongoose = require('mongoose')
const {connect,initSchemas} = require('./database/init.js')
const bodyParser = require("koa-bodyparser")
let goods = require('./appApi/goods.js')
//跨域中间件
const cors = require('koa2-cors')
const Router = require("koa-router")
let user = require('./appApi/user.js')
let router = new Router();
router.use('/user',user.routes())
app.use(bodyParser())
app.use(cors())
router.use('/goods',goods.routes())
//立即执行函数
function lijizhixing(){
    connect()
    initSchemas()
    const User = mongoose.model('User')
    let oneUser = new User({username:'jspang13',password:'123456'})
  
    oneUser.save().then(()=>{
        console.log('插入成功')
    })
    let  users =User.findOne({}).exec()
    
    console.log('------------------')
    console.log(users)
    console.log('------------------') 
}
lijizhixing()
app.use(async(ctx)=>{
    ctx.body="<h3>hello</h3>"
}).listen(8080,()=>{
    console.log('koa is ok')
})

app.use(router.routes())
app.use(router.allowedMethods())