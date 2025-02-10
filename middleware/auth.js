const jwt = require("jsonwebtoken");
const jwtKey = "e-comm";
const verifyToken = async (req, resp, next) => {
  try {
    let token = req.headers["authorization"];
    if (token) {
      console.log(token);

      token = token.split(" ")[1];
      jwt.verify(token, jwtKey, (err, valid) => {
        if (err) {
          resp.send({ result: "please provide valid token" });
        } else {
          next();
        }
      });
    } else {
      resp.send({ result: "Please add token with header" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { verifyToken };
