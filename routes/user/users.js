var express = require("express");
var router = express.Router();
var { User } = require("../../model/user");
var bcrypt = require("bcryptjs"); //plain password ah encrypt panni store
var jwt = require("jsonwebtoken");
var userOrderRoute = require("./order");
/* GET users listing. */
router.post("/register", async function (req, res, next) {
  req.body.userType = "USER";

  bcrypt.genSalt(10, function (err, salt) {
    //genSalt = password ah secert code/id ah change pannum
    if (err) throw err;
    bcrypt.hash(req.body.password, salt, async function (err, hash) {
      if (err) throw err;
      req.body.password = hash;
      let user = new User(req.body);
      try {
        await user.save();
        res.json({
          message: "User Created",
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "User not created",
        });
      }
    });
  });
});

router.post("/login", async function (req, res) {
  //console.log(req.body)
  let user = await User.findOne({ email: req.body.email });
  console.log(user);
  if (user) {
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      //compare => user.password compare to hash password
      if (err) throw err;
      if (result) {
        jwt.sign(
          { id: user._id, type: user.userType },
          process.env.JWT_SECRET,
          { expiresIn: "1h" },
          function (err,token){
            if(err) throw err;
            res.status(200).json({
              message: "Correct",
              token : token,
            });
          }
        );

        
      } else {
        res.status(200).json({
          message: "Password Wrong",
        });
      }
    });
  } else {
    res.status(401).json({
      message: "E-mail not found",
    });
  }
});

router.use("/order", userOrderRoute);
router.use("/products", userOrderRoute);

module.exports = router;
