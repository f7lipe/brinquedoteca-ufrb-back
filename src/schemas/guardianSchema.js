import joi from "joi";

export const guardianSchema = joi.object({
    name: joi.string().required(),
    cpf: joi.string().required().max(11), 
    birthDate: joi.date().required(),
    address: joi.string().required(),
    email: joi.string().email().required(),
    phone: joi.string().required(),
    photo_url: joi.string().uri().allow(""),
    })
