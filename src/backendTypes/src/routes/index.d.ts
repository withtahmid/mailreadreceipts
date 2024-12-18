export declare const appRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
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
}>, {
    login: import("@trpc/server").BuildProcedure<"mutation", {
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
    signup: import("@trpc/server").BuildProcedure<"mutation", {
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
    fetch: import("@trpc/server").BuildProcedure<"query", {
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
        emails: import("../models/emailModel").EmailSchema[];
    }>;
    addEmail: import("@trpc/server").BuildProcedure<"mutation", {
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
        _input_in: {
            label: string;
        };
        _input_out: {
            label: string;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
        _id: string;
        label: string;
        createTime: number;
        invokes: never[];
    }>;
    deleteEmail: import("@trpc/server").BuildProcedure<"mutation", {
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
        _input_in: {
            _id: string;
        };
        _input_out: {
            _id: string;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, string>;
    verifyAccount: import("@trpc/server").BuildProcedure<"mutation", {
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
        _input_in: {
            verificationCode: string;
        };
        _input_out: {
            verificationCode: string;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
    }, boolean>;
}>;
export type AppRouter = typeof appRouter;
