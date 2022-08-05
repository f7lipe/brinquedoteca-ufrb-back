import db from "../config/databaseConfig.js";


export async function createPermanence(permanence) {
    await db.query(` 
    INSERT INTO permanence (children_id, guardian_entrance_id, entry_date) 
    VALUES ($1, $2, $3)
    `, [permanence.childrenId, permanence.guardianEntranceId, permanence.entry_date]
    );
} 

export async function getPermanenceByChildrenId(childrenId) {
    const { rows } = await db.query(`
    SELECT * FROM permanence 
    WHERE children_id = $1
    `, [childrenId]
    );
    return rows[0];
}

export async function closePermanence(permanence) {
    await db.query(`
    UPDATE permanence 
    SET exit_date = $1, guardian_exit_id = $2 ${permanence.obs ? ', obs = $4' : ''}
    WHERE children_id = $3
    `, [permanence.exitDate, permanence.guardianExitId, permanence.childrenId]
    );
}

export async function getAllPermanences() {
    const { rows } = await db.query(`
    SELECT p.id, p.children_id as "childrenId",  p.guardian_entrance_id as "guardianEntranceId", p.guardian_exit_id as "guardianExitId", p.entry_date as "entryDate", p.exit_date as "exitDate", c.name as "childrenName", g1.name as "guardianEntranceName", g2.name as "guardianExitName"  
    FROM permanence p
    JOIN childrens c ON c.id = p.children_id
    JOIN guardians g1 ON g1.id = p.guardian_entrance_id
    JOIN guardians g2 ON g2.id = p.guardian_exit_id
    `);
    return rows;
}

export async function getAllPermanencesComplete() {
    const { rows } = await db.query(`
    SELECT * FROM permanence
    `);
    return rows;
}


export async function getPermanenceById(id) {
    const { rows } = await db.query(`
    SELECT p.id, p.children_id as "childrenId",  p.guardian_entrance_id as "guardianEntranceId", p.guardian_exit_id as "guardianExitId", p.entry_date as "entryDate", p.exit_date as "exitDate", c.name as "childrenName", g1.name as "guardianEntranceName", g2.name as "guardianExitName"  
    FROM permanence p
    JOIN childrens c ON c.id = p.children_id
    JOIN guardians g1 ON g1.id = p.guardian_entrance_id
    JOIN guardians g2 ON g2.id = p.guardian_exit_id
    WHERE p.id = $1
    `, [id]
    );
    return rows[0];
}

export async function getPermanenceByIdFinish(id) {
    const { rows } = await db.query(`
    SELECT * FROM permanence WHERE id=$1
    `, [id]
    );
    return rows[0];
}