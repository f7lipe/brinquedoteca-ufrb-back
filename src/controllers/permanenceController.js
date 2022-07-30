import * as permanenceServices from '../services/permanenceServices.js';

export async function create(req, res){
    await permanenceServices.createPermanence(req.body);
    res.sendStatus(201);
}