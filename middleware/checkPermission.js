// checkPermission.js
import jwt from "jsonwebtoken";

// Middleware kiểm tra quyền
const checkPermission = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token)
    return res
      .status(401)
      .json({ message: "Truy cập bị từ chối." });

  try {
    const decoded = jwt.verify(token, "your_jwt_secret");
    req.user = decoded;
    // Kiểm tra quyền của người dùng trong db ở đây

    next();
    // Nếu có quyền thì gọi next(), nếu không trả về lỗi
  } catch (error) {
    res.status(400).json({ message: "mã không hợp lệ." });
  }
};

export default checkPermission;
