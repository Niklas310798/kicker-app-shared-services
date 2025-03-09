import jwt from "jsonwebtoken";

function authenticateToken(allowedRoles) {
  return (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({
          message: "Invalid token",
        });
      }

      if (!allowedRoles.includes(user.role)) {
        return res.status(403).json({
          message: "You do not have the correct role",
        });
      }

      req.user = user;
      next();
    });
  };
}

export default authenticateToken;
