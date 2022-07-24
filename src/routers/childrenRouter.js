import { Router } from "express";
import * as schemaValidator from "../middleware/schemaValidationMiddleware.js";
import { childrenSchema } from "../schemas/childrenSchema.js";
import * as childrenController from "../controllers/childrenController.js";

const childrenRouter = Router();

childrenRouter.post(
    "/children",
    schemaValidator.validateSchema(childrenSchema),
    //token validation middleware
    childrenController.create
    )

childrenRouter.get(
    "/children",
    //token validation middleware
    childrenController.getAll
)

childrenRouter.get(
    "/children/:id",
    //token validation middleware
    childrenController.getById
)

export default childrenRouter;