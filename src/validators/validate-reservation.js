import Joi from 'joi';

export const reservationSchema = Joi.object({
    customerName: Joi.string().required().trim().messages({
        'string.empty': 'Customer\'s name is required',
    }),
    customerEmail: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Email must be a valid email address',
    }),
    confirmEmail: Joi.any().equal(Joi.ref('customerEmail')).required().messages({
        'any.required': 'Confirm Email is required',
        'any.only': 'Emails do not match',
    }).strip(),
    customerPhone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      'string.empty': 'Phone Number is required',
      'string.pattern.base':
        'Phone number must be number and has only 10 digits',
    }),
    customerCountry: Joi.any().required().messages({
        'any.required': 'Please select your country'
    }),
    optionalRequest: Joi.any()
})