import joi from "joi";
import { guardianSchema } from "./guardianSchema.js";

export const childrenSchema = joi.object({
    name: joi.string().required(),
    cpf: joi.string().required().max(11), 
    birthDate: joi.date().required(),
    address: joi.string().required(),
    obs: joi.string().allow(""),
    photo_url: joi.string().uri().allow(""),
    guardians: joi.array().items(guardianSchema.required().min(1))
    })
