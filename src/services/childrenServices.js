import * as childrenRepository from '../repositories/childrenRepository.js';
import * as guardianRepository from '../repositories/guardianRepository.js';
import * as childrenGuardianRepository from '../repositories/childrenGuardianRepository.js';

export async function createChildren(children) {

    /* FLUXO DE TRABALHO */
    //verificar se existe criança
    // se existe, retornar erro
    //verificar se existe responsáveis para a criança
    //se existe, adiciona como responsável
    //inserir criança no banco
    //inserir responsáveis no banco
    //criar relação entre criança e responsáveis    


    const { cpf, guardians } = children

    await verifyIfChildrenExists(cpf)

    const createdChildren = await childrenRepository.createChildren(children);
    const { id: childrenId } = createdChildren;

    await guardians.forEach(async guardian => {

        const existingGuardian = await guardianRepository.findGuardian(guardian.cpf);

        if (!existingGuardian) {

            const createdGuardian = await guardianRepository.createGuardian(guardian);
            const { id: createdGuardianId } = createdGuardian;
            await childrenGuardianRepository.addRelationship(childrenId, createdGuardianId);

        } else {

            const { id: existingGuardianId } = existingGuardian;
            await childrenGuardianRepository.addRelationship(childrenId, existingGuardianId);

        }
    });
}


async function verifyIfChildrenExists(cpf) {
    const existingChildren = await childrenRepository.findChildren(cpf);
    if (existingChildren) throw { status: 400, message: "Children already exists" };
}

export async function getAllChildrens() {
    const childrens = await childrenRepository.getAllChildrens();
    return childrens;
}

export async function getChildrenById(id) {
    const children = await childrenRepository.getChildrenById(id);
    if (!children) throw { status: 404, message: "Children not found" };
    return children;
}

export async function updateChildren(id, objectWithValues) {
    const existingChildren = await childrenRepository.getChildrenById(id);
    if (!existingChildren) throw { status: 404, message: "Children not found" };
    await childrenRepository.updateChildren(id, objectWithValues);
}

export async function deleteChildren(id) {
    const existingChildren = await childrenRepository.getChildrenById(id);
    if (!existingChildren) throw { status: 404, message: "Children not found" };
    const relationships = await childrenGuardianRepository.getChildrensGuardiansRelationship(id);
    if (relationships) relationships.forEach(async relationship => {
        console.log(relationship)
        await childrenGuardianRepository.destroyRelationship(id, relationship.guardian_id);
    });
    else throw { status: 400, message: "Children has no guardians" };
    await childrenRepository.deleteChildren(id);
}