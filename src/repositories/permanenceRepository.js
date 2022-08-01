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
    SELECT p.id, p.children_id as "childrenId",  p.guardian_entrance_id as "guarianEntranceId", p.entry_date as "entryDate", p.exit_date as "exitDate", c.name as "childrenName", g.name as "guardianName" 
    FROM permanence p
    JOIN childrens c ON c.id = p.children_id
    JOIN guardians g ON g.id = p.guardian_entrance_id
    `);
    console.log(rows);
    return rows;
}