import Joi from "joi"

const getMany = {
  query: Joi.object().keys({
    from: Joi.string().required().min(1),
    to: Joi.string().required().min(1),
    departure: Joi.string().required().min(1),
  }),
}

export const tripValidation = {
  getMany,
}
