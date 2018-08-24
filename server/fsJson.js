const fs = require("fs")
fs.readFile(".goods.json","utf-8",function(err,data){
    let newData = JSON.parse(data)
    let i=0
    let pushData=[]
    newData.RECORDS.map(function(val,index){
        if(val.IMAGE1!= null){
            i++
            console.log(val.NAME)
            pushData.push(val)
        }
    })
    console.log(i)
    console.log(pushData)
})

fs.writeFile("./newGoods.json",JSON.stringify(pushData),function (err){
    if(err){
        console.log("写入失败" )
    }else{
        console.log("写入成功")
    }
})