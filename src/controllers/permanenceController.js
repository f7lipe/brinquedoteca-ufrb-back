import * as permanenceServices from '../services/permanenceServices.js';

export async function create(req, res){
    await permanenceServices.createPermanence(req.body);
    res.sendStatus(201);
}

export async function close(req, res){
    await permanenceServices.closePermanence(req.body);
    res.sendStatus(200);
}