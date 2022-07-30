import { Router } from "express";
import * as schemaValidator from "../middleware/schemaValidationMiddleware.js";
import * as permanenceController from "../controllers/permanenceController.js";
import { createPermanenceSchema } from "../schemas/permanenceSchema.js"


const permanenceRouter = Router();
permanenceRouter.post(
    "/permanence",
    schemaValidator.validateSchema(createPermanenceSchema),
    //token validation middleware 
    permanenceController.create);

export default permanenceRouter