import * as childrenServices from '../services/childrenServices.js';

export async function create(req, res) {
    await childrenServices.createChildren(req.body);
    res.sendStatus(201);
}

export async function getAll(req, res) {
    const children = await childrenServices.getAllChildrens();
    res.send(children);
}