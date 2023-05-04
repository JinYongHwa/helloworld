var express = require('express');
var router = express.Router();

var Password = require("password-encrypt-util")
var password = new Password("mjc801!")

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post("/join", async function (req, res) {
  console.log(req.body)
  //이미 같은아이디로 가입된 사용자가 있는지 체크
  var alreadyUser = await User.findOne({
    where: {
      id: req.body.id
    }
  })
  //같은아이디로 가입된 사용자가 있는경우
  if (alreadyUser) {
    res.json({
      result: "fail",
      message: "이미 가입된 아이디입니다"
    })
    return
  }
  //비밀번호 암호화
  req.body.password = password.getHashPassword(req.body.password)
  await User.create(req.body)
  res.json({
    result: "ok"
  })

})

router.post("/login", async function (req, res) {
  console.log(req.body)
  console.log(req.session)
  var user = await User.findOne({
    where: {
      id: req.body.id,
      password: password.getHashPassword(req.body.password)
    }
  })

  if (!user) {
    res.json({
      result: "fail",
      message: "아이디 또는 비밀번호가 일치하지 않습니다"
    })
    return
  }

  //로그인 성공
  //세션에 로그인한 사용자의 정보를 저장
  req.session.user = user

  res.json({
    result: "ok"
  })

})

module.exports = router;
