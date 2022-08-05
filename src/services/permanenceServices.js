import * as permanenceRepository from '../repositories/permanenceRepository.js';
import * as childrenRepository from '../repositories/childrenRepository.js';
import * as guardianRepository from '../repositories/guardianRepository.js';

export async function createPermanence(permanence) {
    const existentPermanence = await permanenceRepository.getPermanenceByChildrenId(permanence.childrenId);
    if (existentPermanence) throw { status: 400, message: 'Permanence already exists' };
    const existentGuardian = await guardianRepository.getGuardianById(permanence.guardianEntranceId);
    if (!existentGuardian) throw { status: 404, message: 'Guardian not found' };
    await permanenceRepository.createPermanence(permanence);
}

export async function closePermanence(permanence) {
    const existingPermanence = await permanenceRepository.getPermanenceByChildrenId(permanence.childrenId);
    if (!existingPermanence) throw { status: 404, message: 'Permanence not found' };
    if (existingPermanence.exit_date) throw { status: 400, message: 'Permanence already closed' };
    const existentGuardian = await guardianRepository.getGuardianById(permanence.guardianExitId);
    if (!existentGuardian) throw { status: 404, message: 'Guardian not found' };
    await permanenceRepository.closePermanence(permanence);
}

export async function getAllPermanences() {
    const permanences = await permanenceRepository.getAllPermanencesComplete();
    return permanences;
}

export async function getPermanenceById(id) {
    const permanence = await permanenceRepository.getPermanenceByIdFinish(id);
    if(!permanence) throw { status: 404, message: 'Permanence not found' };
    return permanence;
}