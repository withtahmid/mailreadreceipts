import { Document, Schema, Types } from "mongoose";
interface InvokeSchema {
    time: number;
    browser: string;
}
export interface EmailSchemaFrontEnd {
    _id: string;
    label: string;
    createTime: number;
    invokes: InvokeSchema[];
}
export interface EmailSchema extends Omit<EmailSchemaFrontEnd, "_id">, Document {
    _id: Types.ObjectId;
}
declare const Email: import("mongoose").Model<EmailSchema, {}, {}, {}, Document<unknown, {}, EmailSchema> & EmailSchema & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, Schema<EmailSchema, import("mongoose").Model<EmailSchema, any, any, any, Document<unknown, any, EmailSchema> & EmailSchema & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, EmailSchema, Document<unknown, {}, import("mongoose").FlatRecord<EmailSchema>> & import("mongoose").FlatRecord<EmailSchema> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>>;
export default Email;
