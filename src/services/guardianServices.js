import * as guardianRepository from '../repositories/guardianRepository.js';

export async function createGuardian(guardian) {

    //nao pode existir responsavel sem crianca ?
    await guardianRepository.createGuardian(guardian);

}

async function verifyIfGuardianExists(cpf) {

}

export async function getAllGuardians() {

    const guardians = await guardianRepository.getAllGuardians();
    return guardians;

}

export async function getGuardianById(id) {
    
    const guardian = await guardianRepository.getGuardianById(id);
    if (!guardian) throw { status: 404, message: "Guardian not found" };
    return guardian;

}

export async function updateGuardian(id, objectWithValues) {

}

export async function deleteGuardian(id) {

    const existingGuardian = await guardianRepository.getGuardianById(id);
    if (!existingGuardian) throw { status: 404, message: "Guardian not found" };
    await guardianRepository.deleteGuardian(id);

}