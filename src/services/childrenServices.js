import * as childrenRepository from '../repositories/childrenRepository.js';
import * as guardianReposioty from '../repositories/guardianRepository.js';

export async function createChildren(children){
    
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

   const createdChildren =  await childrenRepository.createChildren(children);
   const { id: childrenId } = createdChildren;

   await guardians.forEach(async guardian => {

        const existingGuardian = await guardianReposioty.findGuardian(guardian.cpf);
        
        if(!existingGuardian) {

            const createdGuardian = await guardianReposioty.createGuardian(guardian);
            const { id: createdGuardianId } = createdGuardian;
            await guardianReposioty.addRelationship(childrenId, createdGuardianId);
            
        } else {

            const { id: existingGuardianId } = existingGuardian;
            await guardianReposioty.addRelationship(childrenId, existingGuardianId);

        }
   });
}


async function verifyIfChildrenExists(cpf) {
    const existingChildren = await childrenRepository.findChildren(cpf);
    if(existingChildren)  throw {status: 400, message: "Children already exists"};
}

export async function getAllChildrens() {
    const childrens = await childrenRepository.getAllChildrens();
    return childrens;
}