const Joi = require('joi');

const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(30)
      .required(),
    
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9!@#\\$%\\^&\\*\\)\\(+=._-]{3,30}$')) // Allow special characters
      .required(),

    email: Joi.string()
      .email()
      .required(),


 
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Signup validation failed", details: error.details }); // Return specific error message
  }

  next(); // Continue to the next middleware or route handler
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    password: Joi.string()// Allow special characters
      .required(),

    email: Joi.string()
      .email()
      .required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Login validation failed", details: error.details }); // Return specific error message
  }

  next(); // Continue to the next middleware or route handler
};

module.exports = { signupValidation, loginValidation };
