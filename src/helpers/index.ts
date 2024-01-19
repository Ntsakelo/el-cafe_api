import bcrypt from "bcrypt";
import  jwt from "jsonwebtoken";

export const crypted = async (password: string) => {
    try{
          const salt = await bcrypt.genSalt(10);
          const crypted = await bcrypt.hash(password, salt);
          return crypted;
    }catch(error){
        console.log(error)
    }
}

export const checkPassword = async (password: string, hash: string) => {
    try{
           const passwordMatch = await bcrypt.compare(password, hash);
           return passwordMatch;
    }catch(error){
        console.log(error)
    }
}

export const genToken = async (email: string, userId: number) => {
    const token = jwt.sign({
        email,
        userId
    },
    process.env.SECRET,
    {expiresIn:'1h'});
    return token;
}
interface Token{
    userId: number,
    iat: number,
    exp: number
}
export const verifyToken = async (token:string) => {
    try{
           const decoded = jwt.verify(token,process.env.SECRET);
           return decoded as Token;
    }catch(error){
        console.log(error)
    }
}