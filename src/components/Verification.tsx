import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { verifyAccount } from "../store/userSlice";

const Verification = () =>{

    const email = useAppSelector(state => state.user.email)
    const [ verificationCode, setVerificationCode ] = useState("");

    const dispatch = useAppDispatch();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const t = e.target.value;
        if(t.length <= 6 && !isNaN(Number(t))){
            setVerificationCode(e.target.value);
        }
    }

    const verify = () => {
        dispatch(verifyAccount({verificationCode}));
    }

    return (
        <>
            <h1 className="max-w-80 text-center py-4"> Your Account is not Verified. Check <strong>{email}</strong> for a 6 digit Verification Code</h1>
            <div className="join">
                <input className="input input-bordered join-item" value={verificationCode} onChange={handleChange} placeholder="Verification Code" />
                <button className="btn join-item rounded-r-full" disabled={verificationCode.length !== 6} onClick={verify}>Verify</button>
            </div>
        </>
    )
}
export default Verification;