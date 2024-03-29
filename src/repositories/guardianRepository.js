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

export async function getAllGuardians() {
    const {rows: guardian} = await db.query(
        `

        SELECT * FROM guardians ch


        `
    );

    return guardian;
}

export async function getGuardianById(id) {
    const {rows: guardian} = await db.query(
        `
        SELECT * FROM guardians g 
        WHERE g.id = $1
        `,
        [id]
    );

    return guardian[0];
}


export async function deleteGuardian(id) {
    await db.query(
        `
        DELETE FROM guardians WHERE id = $1
        `,
        [id]
    )
}
