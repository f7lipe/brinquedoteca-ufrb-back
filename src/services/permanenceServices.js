import * as permanenceRepository from '../repositories/permanenceRepository.js';
import * as childrenRepository from '../repositories/childrenRepository.js';
import * as guardianRepository from '../repositories/guardianRepository.js';

export async function createPermanence(permanence) {
    const existingChildren = await childrenRepository.getChildrenById(permanence.childrenId);
    if (!existingChildren) throw { status: 404, message: 'Children not found' };
    const existentGuardian = await guardianRepository.getGuardianById(permanence.guardianEntranceId);
    if (!existentGuardian) throw { status: 404, message: 'Guardian not found' };
    const existentPermanence = await permanenceRepository.getPermanenceByChildrenId(permanence.childrenId);
    if (existentPermanence) throw { status: 400, message: 'Permanence already exists' };
    await permanenceRepository.createPermanence(permanence);
}