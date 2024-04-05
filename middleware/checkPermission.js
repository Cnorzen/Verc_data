// checkPermission.js
import jwt from 'jsonwebtoken';

// Middleware kiểm tra quyền
const checkPermission = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, 'your_secret_key');
    req.user = decoded;
    // Kiểm tra quyền của người dùng trong db ở đây
    // Nếu có quyền thì gọi next(), nếu không trả về lỗi
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

export default checkPermission;
