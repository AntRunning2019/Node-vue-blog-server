const mongoose = require("mongoose")
let Schema = mongoose.Schema


let article = mongoose.model("article", new mongoose.Schema({
  type: {type: String, required: true},
  title: {type: String, required: true},
  data: {type: Date, default: Date.now()},
  tag: {type: String, required: true},
  surface: {type: String, default: './img/defaultSurface.jpg'},
  pv: {type: Number, default: 0},
  comment: [
    {type: Schema.Types.ObjectID, ref: "comment"}
  ]
}));

// /*生成假数据*/
// for (let i = 0; i < 100; i++) {
//   article
//       .create({
//         type: ["原创", "转载"][(Math.random() * 2) | 0],
//         title: `这是第${i + 1}篇文章`,
//         content: ("" + i + i + i + i + "fdfaefdsf我是文章内容").repeat(10),
//         tag: ["HTML5&CSS", "Javascript", "Node", "Vue&React", "Other"][(Math.random() * 5) | 0],
//         pv: Math.floor(Math.random()*10000)
//       })
//       .then(() => {
//         console.log("数据创建成功呢");
//       })
//       .catch(() => {
//         console.log("数据创建失败");
//       })
// }

module.exports = article