var express = require('express');
var router = express.Router();
const Service = require("./service");
const Pager = require("node-jyh-pager")
let pager = new Pager({
  itemPerPage: 10,
  pageCount: 10
})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/helloworld", function (req, res) {
  res.write("helloworld")
  res.end()
})
router.post("/board/list", async function (req, res) {
  var page = req.body.page
  console.log(page)
  var list = await Board.findAll({
    offset: (page - 1) * 10,
    limit: 10,
    order: [["writeDate", "DESC"], ["viewCount", "ASC"]]
  })
  var totalCount = await Board.count()
  var pagination = pager.getBottomNav(page, totalCount)



  res.json({
    list: list,
    pagination: pagination
  })
})

router.post("/board/write", async function (req, res) {
  console.log(req.body)
  var title = req.body.title
  if (title.indexOf("바보") > -1) {  //제목에 '바보' 라는 키워드가 포함되어있을경우
    res.json({
      result: "fail",
      message: "바보는 금지입니다."
    })
    return
  }


  //todo : 디비에 저장
  var result = await Board.create(req.body)

  res.json({
    result: "ok",
    item: result
  })

  console.log("저장후")


})

router.post("/board/item", async function (req, res) {
  var boardNo = req.body.boardNo
  var boardItem = await Board.findOne({
    where: {
      boardNo: boardNo
    }
  })
  res.json({
    result: "ok",
    board: boardItem
  })
})

module.exports = router;
