const Joi = require('joi');

const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    district: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: "Validation failed", details: error.details });

  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    district: Joi.string().required(),  // Add district validation here
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: "Validation failed", details: error.details });

  next();
};

module.exports = { signupValidation, loginValidation };
