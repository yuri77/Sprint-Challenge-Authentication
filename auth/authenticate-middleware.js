/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(
      token,
      process.env.JWT_SECRET || "let it be a secret 43q56",
      (err, decodedToken) => {
        if (err) {
          res.status(401).json({ message: "Token not valid" });
        } else {
          req.user = decodedToken;
          next();
        }
      }
    );
  } else {
    res.status(400).json({ message: "No authorization provided" });
  }
};
