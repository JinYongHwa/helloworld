var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/helloworld", function (req, res) {
  res.write("helloworld")
  res.end()
})
router.get("/board/list", function (req, res) {
  var list = [
    {
      boardNo: 1, title: "제목2", writer: "진용화",
      viewCount: 1, writeDate: "2021-07-01"
    },
    {
      boardNo: 2, title: "제목1", writer: "진용화",
      viewCount: 1, writeDate: "2021-07-01"
    },
    {
      boardNo: 3, title: "제목1", writer: "진용화",
      viewCount: 1, writeDate: "2021-07-01"
    },
    {
      boardNo: 4, title: "제목1", writer: "진용화",
      viewCount: 1, writeDate: "2021-07-01"
    },
    {
      boardNo: 5, title: "제목1", writer: "진용화",
      viewCount: 1, writeDate: "2021-07-01"
    },
    {
      boardNo: 6, title: "제목1", writer: "진용화",
      viewCount: 1, writeDate: "2021-07-01"
    },
    {
      boardNo: 7, title: "제목1", writer: "진용화",
      viewCount: 1, writeDate: "2021-07-01"
    },
    {
      boardNo: 8, title: "제목1", writer: "진용화",
      viewCount: 1, writeDate: "2021-07-01"
    },
    {
      boardNo: 9, title: "제목1", writer: "진용화",
      viewCount: 1, writeDate: "2021-07-01"
    },
  ]
  res.json(list)
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
