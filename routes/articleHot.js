let article = require("../db/article")

module.exports = (req, res) => {

  let d = req.body
  let limit = d.limit

  article
      .find(
          {},
          {__v:0},
          {sort:{pv:-1},limit:limit}
      )
      .then(data => {
        console.log(data);
        res.send({
          code: 1,
          msg: "请求成功",
          data
        })
      })
      .catch(() => {
        res.send({
          code: 0,
          msg: "服务器错误",
          data: null
        })
      })
}
