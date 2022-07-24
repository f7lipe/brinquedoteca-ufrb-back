import db from "../config/databaseConfig.js";

export async function findGuardian(cpf) {
    const {rows: guardians} = await db.query(
        `
    SELECT * FROM guardians WHERE cpf = $1
    `,
     [cpf]);

     const foundGuardian = guardians[0];
    return foundGuardian;
}

export async function createGuardian(guardian) {
    const { name, cpf, phone, birthDate, email, address, photo_url } = guardian;
    const {rows: createdGuardian} = await db.query(
        `
    INSERT INTO guardians (name, cpf, phone, birthDate, email, address, photo_url)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
    `,
     [name, cpf, phone, birthDate, email, address, photo_url]);
    
     return createdGuardian[0];
}


export async function addRelationship(childrenInd, guardianId) {
    
    await db.query(
        `
    INSERT INTO childrens_guardians (children_id, guardian_id) VALUES ($1, $2)
    `,
     [childrenInd, guardianId]);
}


export async function getChildrensGuardiansRelationship(childrenId) {
    const {rows: childrensGuardians} = await db.query(
        `
    SELECT * FROM childrens_guardians WHERE children_id = $1
    `,
     [childrenId]);

     return childrensGuardians;
}

    export async function destroyRelationship(childrenInd, guardianId) {
    
    await db.query(
        `
    DELETE FROM childrens_guardians WHERE children_id = $1 AND guardian_id = $2
    `,
     [childrenInd, guardianId]);
}
