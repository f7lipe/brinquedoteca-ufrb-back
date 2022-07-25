import { Router } from "express";
import childrenRouter from "./childrenRouter.js";
import guardianRouter from "./guardianRouter.js";

const router = Router()
router.use(childrenRouter)
router.use(guardianRouter)

export {router}

// adicionar criança ao banco 
// adicionar responsável ao banco
// obter id do responsável
// adicionar criança ao responsável
// adicionar criança ao responsável