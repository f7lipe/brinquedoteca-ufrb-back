import joi from "joi";

export const createPermanenceSchema = joi.object({
    entry_date: joi.date().required(),
    obs: joi.string().allow(""),
    childrenId: joi.number().required(),
    guardianEntranceId: joi.number().required(),
});

export const closePermanenceSchema = joi.object({
    exitDate: joi.date().required(),
    obs: joi.string().allow(""),
    childrenId: joi.number().required(),
    guardianExitId: joi.number().required(),
});