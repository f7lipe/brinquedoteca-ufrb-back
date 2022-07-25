import { Router } from "express";
import * as schemaValidator from "../middleware/schemaValidationMiddleware.js";
import { guardianSchema } from "../schemas/guardianSchema.js";
import * as guardianController from "../controllers/guardianController.js";

const guardianRouter = Router();

guardianRouter.post(
    "/guardian",
    schemaValidator.validateSchema(guardianSchema),
    //token validation middleware
    guardianController.create
    )

guardianRouter.get(
    "/guardian",
    //token validation middleware
    guardianController.getAll
)

guardianRouter.get(
    "/guardian/:id",
    //token validation middleware
    guardianController.getById
)
/*
guardianRouter.put(
    "/guardian/:id",
    //token validation middleware
    guardianController.update
)

guardianRouter.delete(
    "/guardian/:id",
    //token validation middleware
    guardianController.deleteOne
)
*/
export default guardianRouter;