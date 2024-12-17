import { EmailSchema } from "../models/emailModel";
declare const fetchUserProcedure: import("@trpc/server").BuildProcedure<"query", {
    _config: import("@trpc/server").RootConfig<{
        ctx: {
            user: (import("mongoose").Document<unknown, {}, import("../models/userModel").UserSchema> & import("../models/userModel").UserSchema & Required<{
                _id: import("mongoose").Types.ObjectId;
            }> & {
                __v: number;
            }) | null;
        };
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>;
    _meta: object;
    _ctx_out: {
        user: import("../models/userModel").UserSchema;
    };
    _input_in: typeof import("@trpc/server").unsetMarker;
    _input_out: typeof import("@trpc/server").unsetMarker;
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
}, {
    email: string;
    isVerified: boolean;
    emails: EmailSchema[];
}>;
export default fetchUserProcedure;
