const mongoose = require('mongoose')    //引入Mongoose
const Schema = mongoose.Schema          //声明Schema
let ObjectId = Schema.Types.ObjectId    //声明Object类型
const glob = require("glob")
const {resolve} = require("path")
//创建我们的用户Schema
const userSchema = new Schema({
    UserId:ObjectId,
    userName:{unique:true,type:String},
    password:String,
    createAt:{type:Date,default:Date.now()},
    lastLoginAt:{type:Date,default:Date.now()},
},
{
    collection:'user'
})
// 下面的代码声明了一个实例方法，方法叫做comparePassword，然后传递两个参数，一个是客户端密码，
//一个是数据库取出来的密码。用bcrypt提供的compare方法就可以比对，最后包装成Promise返回就可以了。
userSchema.methods = {
    comparePassword :(_password,password)=>{
        return new Promise((resolve,reject)=>{
            bcrypt.Compare(_password,password,(err,isMatch)=>{
                if(!err){
                    resolve(isMatch)
                }else{
                    reject(err)
                }
            })
        })
    }
}
 
//发布模型
mongoose.model('User',userSchema)