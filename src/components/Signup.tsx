import { useState } from "react";
import { useAppDispatch } from "../store";
import { changePage } from "../store/currentPageSlice";
import { signupAsync } from "../store/userSlice";
const Signup = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState("");
    const dispatch = useAppDispatch();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const signUpBtn = async () => {
        setLoading(true);
        try {
            var resultAction = await dispatch(signupAsync({email, password}));
            if (signupAsync.rejected.match(resultAction)) {
                setErrorMessage("put valid email and 8 to 20 char long pass")
            }
        } catch (error) {
            setErrorMessage("Signup failed");
        } finally{
            setLoading(false);
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                <h1 className="text-3xl font-bold text-nowrap">Signup</h1>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" value={email} required onChange={handleEmailChange}/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" value={password} required onChange={handlePasswordChange}/>
                    <label className="label">
                    <p  className="label-text-alt link link-hover" onClick={() => dispatch(changePage("login"))}>Have an account? Login now!</p>
                    </label>
                    <p className="pt-2 text-red-600">{errorMessage}</p>
                    </div>
                    <div className="form-control mt-6">

                    <button className="btn btn-primary" onClick={signUpBtn}>
                    {loading ? <span className="loading loading-spinner loading-sm"></span> : "Signup"} 
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;