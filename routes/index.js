const express = require('express');
const router = express.Router();
const path = require('path')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("111")
});
//** 文章信息接口
router.post("/articleInfo",require(path.join(__dirname,"./articleInfo")))
//   热门文章接口
router.post('/articleHot',require(path.join(__dirname,"./articleHot")))
module.exports = router;
