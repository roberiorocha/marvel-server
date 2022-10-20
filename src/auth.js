import jwt from "jsonwebtoken";
import { readDBAsync } from "./db/db";

const SECRET = "disgitalcollege";

export const signToken = (payload) => jwt.sign(payload, SECRET);

export const verifyToken = (access_token) => {
    const decoded = jwt.verify(access_token, SECRET);
    return decoded;
};

export const userAlreadyExistes = async ( {email} ) => {
    try {
        const db = await readDBAsync();
console.log(db)

        return db.users.findIndex((user) => user.email === email) !== -1;        
    } catch (erro) {
        console.log(erro);
        return false;        
    }
};