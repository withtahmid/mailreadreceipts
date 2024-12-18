import { UserSchema } from "../models/userModel";
export declare const generateToken: (user: UserSchema) => string;
export declare const authenticateToken: (token: string) => string | null;
