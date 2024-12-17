import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { UserSchema } from "../models/userModel";
export declare const createContext: (opts: CreateExpressContextOptions) => Promise<{
    user: (import("mongoose").Document<unknown, {}, UserSchema> & UserSchema & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null;
}>;
export declare const router: <TProcRouterRecord extends import("@trpc/server").ProcedureRouterRecord>(procedures: TProcRouterRecord) => import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: {
        user: (import("mongoose").Document<unknown, {}, UserSchema> & UserSchema & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        }) | null;
    };
    meta: object;
    errorShape: import("@trpc/server").DefaultErrorShape;
    transformer: import("@trpc/server").DefaultDataTransformer;
}>, TProcRouterRecord>;
export declare const publicProcedure: import("@trpc/server").ProcedureBuilder<{
    _config: import("@trpc/server").RootConfig<{
        ctx: {
            user: (import("mongoose").Document<unknown, {}, UserSchema> & UserSchema & Required<{
                _id: import("mongoose").Types.ObjectId;
            }> & {
                __v: number;
            }) | null;
        };
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>;
    _ctx_out: {
        user: (import("mongoose").Document<unknown, {}, UserSchema> & UserSchema & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        }) | null;
    };
    _input_in: typeof import("@trpc/server").unsetMarker;
    _input_out: typeof import("@trpc/server").unsetMarker;
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
    _meta: object;
}>;
export declare const protectedProcedure: import("@trpc/server").ProcedureBuilder<{
    _config: import("@trpc/server").RootConfig<{
        ctx: {
            user: (import("mongoose").Document<unknown, {}, UserSchema> & UserSchema & Required<{
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
        user: UserSchema;
    };
    _input_in: typeof import("@trpc/server").unsetMarker;
    _input_out: typeof import("@trpc/server").unsetMarker;
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
}>;
export declare const verifiedProcedure: import("@trpc/server").ProcedureBuilder<{
    _config: import("@trpc/server").RootConfig<{
        ctx: {
            user: (import("mongoose").Document<unknown, {}, UserSchema> & UserSchema & Required<{
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
        user: UserSchema;
    };
    _input_in: typeof import("@trpc/server").unsetMarker;
    _input_out: typeof import("@trpc/server").unsetMarker;
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
}>;
export declare const adminProcedure: import("@trpc/server").ProcedureBuilder<{
    _config: import("@trpc/server").RootConfig<{
        ctx: {
            user: (import("mongoose").Document<unknown, {}, UserSchema> & UserSchema & Required<{
                _id: import("mongoose").Types.ObjectId;
            }> & {
                __v: number;
            }) | null;
        };
        meta: object;
        errorShape: import("@trpc/server").DefaultErrorShape;
        transformer: import("@trpc/server").DefaultDataTransformer;
    }>;
    _ctx_out: {
        user: (import("mongoose").Document<unknown, {}, UserSchema> & UserSchema & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        }) | null;
    };
    _input_in: typeof import("@trpc/server").unsetMarker;
    _input_out: typeof import("@trpc/server").unsetMarker;
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
    _meta: object;
}>;
