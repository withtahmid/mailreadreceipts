import { Document, Types, Schema } from "mongoose";
import { EmailSchema } from "./emailModel";
export interface UserSchema extends Document {
    _id: Types.ObjectId;
    email: string;
    password: string;
    isVerified: boolean;
    emails: EmailSchema[];
    verificationCode: string;
}
declare const User: import("mongoose").Model<UserSchema, {}, {}, {}, Document<unknown, {}, UserSchema> & UserSchema & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, Schema<UserSchema, import("mongoose").Model<UserSchema, any, any, any, Document<unknown, any, UserSchema> & UserSchema & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserSchema, Document<unknown, {}, import("mongoose").FlatRecord<UserSchema>> & import("mongoose").FlatRecord<UserSchema> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>>;
export default User;
