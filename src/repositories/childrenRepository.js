import db from "../config/databaseConfig.js";

export async function findChildren(cpf) {
    const {rows: children} = await db.query(
        `
    SELECT * FROM childrens WHERE cpf = $1
    `,
     [cpf]);

     const foundChildren = children[0]
    return foundChildren;
}

export async function createChildren(children) {
    const { name, cpf, birthDate, address, obs, photo_url } = children;
    
    const {rows: createdChildren} =  await db.query(
        `
        INSERT INTO childrens (name, cpf, birthDate, address, obs, photo_url)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
        `,
        [name, cpf, birthDate, address, obs, photo_url]
    );
    
    return createdChildren[0]
}