import { Router } from "express";
import * as schemaValidator from "../middleware/schemaValidationMiddleware.js";
import * as permanenceController from "../controllers/permanenceController.js";
import * as permanenceSchema from "../schemas/permanenceSchema.js"


const permanenceRouter = Router();
permanenceRouter.post(
    "/permanence",
    schemaValidator.validateSchema(permanenceSchema.createPermanenceSchema),
    //token validation middleware 
    permanenceController.create);

permanenceRouter.post(
    "/permanence/close",
    schemaValidator.validateSchema(permanenceSchema.closePermanenceSchema),
    //token validation middleware 
    permanenceController.close)


permanenceRouter.get(
    "/permanence",
    //token validation middleware
    permanenceController.getAll)

permanenceRouter.get(
    "/permanence/:id",
    //token validation middleware
    permanenceController.getById)


export default permanenceRouter