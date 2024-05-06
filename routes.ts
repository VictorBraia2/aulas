import express, { Request, Response } from 'express'
import campeaoModel from './schemas/campeao.Schema'

const router = express.Router()

router.post('/campeoes', async (req: Request, res: Response) => {
    const campeao = campeaoModel.create(req.body)
    res.status(201).json(campeao)
})


export default router