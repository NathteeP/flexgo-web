import Joi from 'joi';

export const userSchema = Joi.object({
  firstName: Joi.string().required().messages({
    'string.empty': 'First Name is required',
    'any.required': 'First Name is required',
  }),
  lastName: Joi.string().required().messages({
    'string.empty': 'Last Name is required',
    'any.required': 'Last Name is required',
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required',
      'any.required': 'Email is required',
      'string.email': 'Email must be a valid email',
    }),
  phone: Joi.string()
    .pattern(/^[0-9]+$/)
    .messages({
      'string.pattern.base': 'Phone must contain only numbers',
    }),
  birthday: Joi.date().messages({
    'date.base': 'Birthday must be a valid date',
  }),
  nationality: Joi.string().required().messages({
    'string.empty': 'Nationality is required',
    'any.required': 'Nationality is required',
  }),
  gender: Joi.string().valid('MALE', 'FEMALE', 'OTHER').messages({
    'any.only': 'Gender must be male, female, or prefer not to say',
  }),
  address: Joi.string().messages({
    'string.empty': 'Address is required',
  }),
});
