import db from "../config/databaseConfig.js";

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
