import { Router } from "express";
import childrenRouter from "./childrenRouter.js";

const router = Router()
router.use(childrenRouter)

export {router}

// adicionar criança ao banco 
// adicionar responsável ao banco
// obter id do responsável
// adicionar criança ao responsável
// adicionar criança ao responsável