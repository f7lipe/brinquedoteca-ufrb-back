import * as permanenceServices from '../services/permanenceServices.js';

export async function create(req, res){
    await permanenceServices.createPermanence(req.body);
    res.sendStatus(201);
}

export async function close(req, res){
    await permanenceServices.closePermanence(req.body);
    res.sendStatus(200);
}

export async function getAll(req, res){
    const permanences = await permanenceServices.getAllPermanences();
    res.status(200).send(permanences)
}

export async function getById(req, res){
    const permanence = await permanenceServices.getPermanenceById(req.params.id);
    res.status(200).send(permanence)
}