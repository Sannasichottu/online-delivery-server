const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  console.log(req.headers.authorization);
  if (req.headers.authorization) {
    jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET,
      function (err, decoded) {
        console.log(decoded); // bar
        if (decoded === undefined) {
          res.status(401).json({
            message: "UnAuthorized",
          });
        } else {
            req.userId = decoded.id;
            req.userType = decoded.type;
          next();
        }
      }
    );
  } else {
    res.status(401).json({
      message: "UnAuthorized",
    });
  }
}

function permit(...allowedUser){
    const isAllowed = role => allowedUser.indexOf(role) > -1
    return(req,res,next) => {
        if (req.userType && isAllowed(req.userType)){
            next();
        }else{
            res.status(401).json({
                message: "UnAuthorized",
              });
        }
    };
}

module.exports = { authenticate, permit };
