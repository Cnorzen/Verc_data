import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import bcryptjs from "bcryptjs";
import { registerValidator, loginValidator } from "../validations/auth.js";
import jwt from "jsonwebtoken";

class AuthController {
  // POST Auth Đăng ký
  async register(req, res) {
    try {
      // validate
      const { error } = registerValidator.validate(req.body, {
        abortEarly: false,
      });
      console.log(error);
      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({
          message: errors,
        });
      }
      const { username, email, password } = req.body;
      const emailExisted = await User.findOne({
        email,
      });
      if (emailExisted) {
        return res.status(400).json({
          message: "Email của bạn đã đúng rồi",
        });
      }
      // mã hóa mật khẩu
      const hashPassword = await bcryptjs.hash(password, 10);
      const user = await User.create({
        username,
        email,
        password: hashPassword,
      });
      res.status(201).json({
        message: "Đăng Ký thành công",
        // data: { ...user, password: undefined },
        data: {
          username: user.username,
          email: user.email,
          // Trả về thông tin User đã đăng ký thành công (ko bao gồm password)
        },
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // POST auth/login

  async login(req, res) {
    try {
      // Validate
      const { error } = loginValidator.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({
          message: errors,
        });
      }

      // Kiểm tra email tồn tại trong cơ sở dữ liệu
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({
          message: "Tài khoản của bạn không tồn tại, vui lòng kiểm tra lại!",
        });
      }

      // So sánh password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(400).json({
          message: "Mật khẩu không chính xác, vui lòng kiểm tra lại!",
        });
      }

      // Tạo token
      const token = jwt.sign({ id: user._id }, "your_jwt_secret", {
        expiresIn: "1w",
      });

      // Trả về token và thông tin user sau khi đăng nhập thành công (ko bao gồm password)
      const userInfo = {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      };

      return res.json({ token, user: userInfo });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Đã xảy ra lỗi khi đăng nhập, vui lòng thử lại sau!",
      });
    }
  }
}

export default AuthController;
