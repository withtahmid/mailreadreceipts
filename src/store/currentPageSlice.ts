import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IS = "login" | "signup" | "dashboard"; 

interface State {
    is: IS; 
}

const initialState: State = {
    is: "login"
};

const currentPageSlice = createSlice({
    name: "currentPage",
    initialState,
    reducers:{
        changePage: (state, action: PayloadAction<IS>) => {
            state.is = action.payload;
        }      
    }
});
const currentPageReducer = currentPageSlice.reducer;
export default currentPageReducer;
export const { changePage } = currentPageSlice.actions;