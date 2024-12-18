import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { trpc } from "../trpc";
import { TRPCClientError } from "@trpc/client";
import { EmailSchemaFrontEnd as EmailSchema} from "../backendTypes/src/models/emailModel";

interface State {
    token: string | null;
    isVerified: boolean;
    status: "idle" | "loading" | "success" | "failed";
    email: string;
    emails: EmailSchema[];
    deleteSelectedId: null | string;

}

const initialState: State = {
    token: localStorage.getItem("mailreadreceiptstoken") ?? null,
    isVerified: false,
    status: "idle",
    email: "",
    emails: [],
    deleteSelectedId: null,
};


export const deleteOne = createAsyncThunk<string, { _id: string }, { rejectValue: string }>(
    "user/deleteEmail",
    async( { _id}, { rejectWithValue }) => {
        try {
            return await trpc.deleteEmail.mutate({_id});
        } catch (error) {
            rejectWithValue("Failed");
        }
        return _id;
    }
)

export const verifyAccount = createAsyncThunk<boolean, { verificationCode: string }, { rejectValue: string }>(
    "user/verifyAccount",
    async( { verificationCode}, { rejectWithValue }) => {
        try {
            return await trpc.verifyAccount.mutate({ verificationCode });
        } catch (error) {
            rejectWithValue("Failed");
        }
        return false;
    }
)

export const login = createAsyncThunk<string, { email: string, password: string} , { rejectValue: string }>(
    "user/login",
    async ( {email , password }, { rejectWithValue }) => {
        try {
            const res = await trpc.login.mutate({email, password});
            return res;
        } catch (error) {
            if(error instanceof TRPCClientError){
                return rejectWithValue (error.message);
            }
        }
        return rejectWithValue ("Failed to login");
    }
);

export const signupAsync = createAsyncThunk<string, { email: string, password: string} , { rejectValue: string }>(
    "user/signup",
    async ( {email , password }, { rejectWithValue }) => {
        try {
            const token = await trpc.signup.mutate({email,password});
            return token;
        } catch (error) {
            if(error instanceof TRPCClientError){
                return rejectWithValue (error.message);
            }
        }
        return rejectWithValue ("Failed signup");
    }
);



export const fetchUser = createAsyncThunk<any, undefined, { rejectValue: string }>( 
    "user/fetch",
    async (_, { rejectWithValue }) => {
        try {
            const res = await trpc.fetch.query();
            return res;
        } catch (error) {
            if (error instanceof TRPCClientError) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue("Failed to fetch");
        }
    }
);


export const addEmailAsync = createAsyncThunk<EmailSchema, { label: string }, { rejectValue: string }>( 
    "user/addEmail",
    async ({ label }, { rejectWithValue }) => {
        try {
            const res = await trpc.addEmail.mutate({ label });
            return res;
        } catch (error) {
            if (error instanceof TRPCClientError) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue("Failed to fetch");
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        logout: (state) => {
            state.token = null;
            localStorage.removeItem("mailreadreceiptstoken");
        },
        setDeleteId: (state, action: PayloadAction<string>) => {
            state.deleteSelectedId = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.status = "loading";
        })
        .addCase(login.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(login.fulfilled, (state, action) => {
            state.status = "success";
            state.token = action.payload;
            localStorage.setItem("mailreadreceiptstoken", action.payload);
        })

        .addCase(signupAsync.pending, (state) => {
            state.status = "loading";
        })
        .addCase(signupAsync.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(signupAsync.fulfilled, (state, action) => {
            state.status = "success";
            state.token = action.payload;
            localStorage.setItem("mailreadreceiptstoken", action.payload);
        })

        // .addCase(fetchUser.pending, (state) => {
        //     state.status = "loading";
        // })
        .addCase(fetchUser.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            state.status = "success";
            state.email = action.payload.email,
            state.emails = action.payload.emails,
            state.isVerified = action.payload.isVerified;
        })


        // .addCase(addEmailAsync.pending, (state) => {
        //     // state.status = "loading";
        // })
        .addCase(addEmailAsync.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(addEmailAsync.fulfilled, (state, action: PayloadAction<EmailSchema>) => {
            state.status = "success";
            state.emails.push(action.payload as EmailSchema);
        })


        // .addCase(deleteOne.pending, (state) => {
        //     state.status = "loading";
        // })
        .addCase(deleteOne.rejected, (state) => {
            state.status = "failed";
            state.deleteSelectedId = null;
        })
        .addCase(deleteOne.fulfilled, (state, action) => {
            state.status = "success";
            state.emails = state.emails.filter(e => e._id !== action.payload);
            state.deleteSelectedId = null;
        })

        // .addCase(verifyAccount.pending, (state) => {
        //     state.status = "loading";
        // })
        .addCase(verifyAccount.rejected, (state) => {
            state.status = "failed";
            state.isVerified = false;
        })
        .addCase(verifyAccount.fulfilled, (state, action) => {
            state.status = "success";
            state.isVerified = action.payload;
        })
        
    }
});

const userReducer = userSlice.reducer;
export default userReducer;
export const { logout, setDeleteId } = userSlice.actions;