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

export async function getAllChildrens() {
    const {rows: children} = await db.query(
        `

        SELECT * FROM childrens ch
        JOIN childrens_guardians cg ON ch.id = cg.children_id
        JOIN guardians g ON cg.guardian_id = g.id

        `
    );

    return children;
}

export async function getChildrenById(id) {
    const {rows: children} = await db.query(
        `
        SELECT * FROM childrens ch 
        WHERE ch.id = $1
        `,
        [id]
    );

    return children[0];
}

export async function updateChildren(id, objectWithValues) {
    const keys = Object.keys(objectWithValues); //[name, cpf]
    const fields = keys.map((key, index) => `${key} = $${index+1}`).join(', '); //name = $1, cpf = $2
    const values = Object.values(objectWithValues); //['João', '123456789']
    await db.query(
        `
        UPDATE childrens SET ${fields} WHERE id = $${keys.length+1}
        `,
        [...values, id] //['João', '123456789', 2]
    )


}

export async function deleteChildren(id) {
    await db.query(
        `
        DELETE FROM childrens WHERE id = $1
        `,
        [id]
    )
}