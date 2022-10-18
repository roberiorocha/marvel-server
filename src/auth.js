import { Jwt } from "jsonwebtoken";

const SECRET = "disgitalcollege";

export const signToken = (payload) => Jwt.sign(payload, SECRET);

export const verifyToken = (access_token) => {
    const decoded = Jwt.verify(access_token, SECRET);
    return decoded;
}

export const userAlreadyExistes = async ( email ) => {

}