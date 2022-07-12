import db from "../config/databaseConfig.js";

export async function getUserByEmail(email) {
    const query =  db.query(
        `
        SELECT * from users u
        WHERE u.email = $1
        `,
        [email]
    );
    const {rows: users} = await query;
    const [user] = [users];
    return user
}