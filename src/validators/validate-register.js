import Joi from 'joi';

export const registerSchema = Joi.object({
  username: Joi.string().required().trim().messages({
    'string.empty': 'Username is required',
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Email must be a valid email address',
    }),
  password: Joi.string()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    )
    .required()
    .messages({
      'string.empty': 'Password is required',
      'string.pattern.base':
        'Password must have at least 6 characters, one uppercase, one lowercase, one number, and one special character',
    }),
  confirmPassword: Joi.any().equal(Joi.ref('password')).required().messages({
    'any.only': 'Passwords do not match',
    'any.required': 'Confirm Password is required',
  }),
  firstName: Joi.string().required().trim().messages({
    'string.empty': 'First Name is required',
  }),
  lastName: Joi.string().required().trim().messages({
    'string.empty': 'Last Name is required',
  }),
  phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      'string.empty': 'Phone Number is required',
      'string.pattern.base':
        'Phone number must be number and has only 10 digits',
    }),
});
