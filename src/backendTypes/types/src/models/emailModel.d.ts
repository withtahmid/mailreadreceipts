import { Document, Schema } from "mongoose";
interface InvokeSchema {
    time: number;
    os: string;
    browser: string;
    device: string;
}
export interface EmailSchema extends Document {
    label: string;
    createTime: number;
    invokes: InvokeSchema[];
}
declare const Email: import("mongoose").Model<EmailSchema, {}, {}, {}, Document<unknown, {}, EmailSchema> & EmailSchema & Required<{
    _id: unknown;
}> & {
    __v: number;
}, Schema<EmailSchema, import("mongoose").Model<EmailSchema, any, any, any, Document<unknown, any, EmailSchema> & EmailSchema & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, EmailSchema, Document<unknown, {}, import("mongoose").FlatRecord<EmailSchema>> & import("mongoose").FlatRecord<EmailSchema> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>>;
export default Email;
