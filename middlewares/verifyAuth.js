const jwt = require("jsonwebtoken");

const verifyAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.substring(7); 
    
    if (!token) {
      return res.status(401).send({ message: "Unauthorized: No token provided" });
    }

    jwt.verify(token, "secretkey", (err, decoded) => {
      if (err) {
        console.log(err);
        return res.status(401).send({ message: "Unauthorized: Invalid token" });
      } else {
        req.userId = decoded.userId;
        next();
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = verifyAuth;
