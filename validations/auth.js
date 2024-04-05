import Joi from "joi";

// kiểm tra độ dài tối thiểu và tối đa cho mật khẩu

const registerValidator = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6).max(20),
});

const loginValidator = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6).max(20),
});

export { registerValidator, loginValidator };
