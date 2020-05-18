let articleInfo = require('../db/articleInfo')

module.exports = (req,res)=>{
  articleInfo.findOne()
      .then((data)=>{
        console.log(data);
        res.send({
          code:1,
          msg: "请求成功",
          data
        })
      })
      .catch(()=>{
        res.send({
          code: 0,
          msg: "服务器错误",
          data: null
        })
      })
}