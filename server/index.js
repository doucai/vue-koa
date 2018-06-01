const koa = require('koa')
const app =new koa()
app.use(async(ctx)=>{
    ctx.body="<h3>hello</h3>"
}).listen(3000,()=>{
    console.log('koa is ok')
})