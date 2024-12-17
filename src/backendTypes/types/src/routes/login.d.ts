declare const loginProcedure: import("@trpc/server").BuildProcedure<"mutation", {
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
        user: (import("mongoose").Document<unknown, {}, import("../models/userModel").UserSchema> & import("../models/userModel").UserSchema & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        }) | null;
    };
    _input_in: {
        email: string;
        password: string;
    };
    _input_out: {
        email: string;
        password: string;
    };
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
}, string>;
export default loginProcedure;
