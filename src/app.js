import { router } from './routers/index.js'

import express, {json} from 'express'
import cors from 'cors'
import chalk from 'chalk'

const app = express()

app.use(json())
app.use(cors())
app.use(router)

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(chalk.blue('Servidor rodando na porta ', port))
})