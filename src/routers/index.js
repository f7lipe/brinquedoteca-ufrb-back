import { Router } from "express";
import authRouter from "./authRouter.js";

const router = Router()
router.use(authRouter)

export {router}

//autenticação (login, recuperar senha, criar conta)
//controle de pemanência 
//cadastro de crianças e responsáveis

