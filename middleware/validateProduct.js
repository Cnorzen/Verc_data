
import Joi from 'joi';

// Hàm validate dữ liệu khi tạo Product
const validateCreateProduct = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    author: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.number().required(),
    rate: Joi.number().required(),
  });
  return schema.validate(data);
};

// Hàm validate dữ liệu khi cập nhật Product
const validateUpdateProduct = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    author: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.number().required(),
    rate: Joi.number(),
  });
  return schema.validate(data);
};

export { validateCreateProduct, validateUpdateProduct };
