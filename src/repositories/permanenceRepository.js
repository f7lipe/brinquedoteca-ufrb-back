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