import * as guardianServices from '../services/guardianServices.js';

export async function create(req, res) {
    await guardianServices.createGuardian(req.body);
    res.sendStatus(201);
}

export async function getAll(req, res) {
    const guardians = await guardianServices.getAllGuardians();
    res.send(guardians);
}

export async function getById(req, res) {
    const { id } = req.params;
    const guardian = await guardianServices.getGuardianById(id);
    res.send(guardian);
}
/*
export async function update(req, res) {
    const { id } = req.params;
    const  objectWithValues  = req.body; //{name: 'João', cpf: '123456789'}
    await guardianServices.updateChildren(id, objectWithValues);
    res.sendStatus(204);
}
*/
export async function deleteOne(req, res) {
    const { id } = req.params;
    await guardianServices.deleteGuardian(id);
    res.sendStatus(204);
}
