import Joi from 'joi';

export const reservationSchema = Joi.object({
    fullName: Joi.string().required().trim().messages({
        'string.empty': 'Customer\'s name is required',
    }),
    email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Email must be a valid email address',
    }),
    confirmEmail: Joi.any().equal(Joi.ref('email')).required().messages({
        'any.required': 'Confirm Email is required',
        'any.only': 'Emails do not match',
    }),
    phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      'string.empty': 'Phone Number is required',
      'string.pattern.base':
        'Phone number must be number and has only 10 digits',
    }),
    country: Joi.any().required().messages({
        'any.required': 'Please select your country'
    }),
    optionalRequest: Joi.any()
})