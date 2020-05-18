const mongoose = require("mongoose")

let articleInfo =
    mongoose.model("articleInfo", mongoose.Schema({
      tags: [String],
      num: {type:Number},
    }))
// articleInfo
//     .create({
//       tags: ["Html&Css","Javascript","Node.js","VUE","MongoDB"],
//       num:100
//     })
//     .then(()=>{
//       console.log("创建文章信息成功");
//     })
//     .catch(()=>{
//       console.log("创建文章信息失败");
//     })

module.exports = articleInfo