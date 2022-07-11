import { Router } from "express";
import signInRouter from "./signinRouter.js";

const router = Router()
router.use(signInRouter)

export {router}

//autenticação (login, recuperar senha, criar conta)
//controle de pemanência 
//cadastro de crianças e responsáveis

