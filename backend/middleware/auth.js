const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "udl*VFMnxp5Crly-({");
    const userId = decodedToken.userId;
    if (!userId) {
      throw "Merci de vous connecter";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ error: error | "Requête non authentifiée ! " });
  }
};
