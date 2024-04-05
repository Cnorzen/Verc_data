// validateProduct.js
import Joi from 'joi';

// Hàm validate dữ liệu khi tạo Product
const validateCreateProduct = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    image: Joi.string().required(),
    rate: Joi.number().min(0).max(5).required(),
  });
  return schema.validate(data);
};

// Hàm validate dữ liệu khi cập nhật Product
const validateUpdateProduct = (data) => {
  const schema = Joi.object({
    title: Joi.string(),
    image: Joi.string(),
    rate: Joi.number().min(0).max(5),
  });
  return schema.validate(data);
};

export { validateCreateProduct, validateUpdateProduct };
