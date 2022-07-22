import * as childrenServices from '../services/childrenServices.js';

export async function create(req, res) {
    await childrenServices.createChildren(req.body);
    res.sendStatus(201);
}