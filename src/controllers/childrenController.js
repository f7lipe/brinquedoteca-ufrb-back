import * as childrenServices from '../services/childrenServices.js';

export async function create(req, res) {
    await childrenServices.createChildren(req.body);
    res.sendStatus(201);
}

export async function getAll(req, res) {
    const childrens = await childrenServices.getAllChildrens();
    res.send(childrens);
}

export async function getById(req, res) {
    const { id } = req.params;
    const children = await childrenServices.getChildrenById(id);
    res.send(children);
}

export async function update(req, res) {
    const { id } = req.params;
    const  objectWithValues  = req.body; //{name: 'João', cpf: '123456789'}
    await childrenServices.updateChildren(id, objectWithValues);
    res.sendStatus(204);
}

export async function deleteOne(req, res) {
    const { id } = req.params;
    await childrenServices.deleteChildren(id);
    res.sendStatus(204);
}