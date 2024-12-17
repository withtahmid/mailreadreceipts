import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchUser} from "../store/userSlice";
import EmailCard from "./EmailCard";
import Navbar from "./Navbar";
import EmailPreview from "./EmailPreview";
import Verification from "./Verification";

const Dashboard = () => {

    const user = useAppSelector(state => state.user);
    const status = useAppSelector(state => state.user.status);
    const emails = useAppSelector(state => state.user.emails);
    const [ tempEmail, setTempEmail ] = useState(emails);
    
    useEffect(() =>{
        let t = [...emails];
        t.sort((a, b) => b.createTime - a.createTime);
        setTempEmail(t);
    }, [emails])

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    if(status === "loading"){
        return <div className="flex h-screen items-center justify-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if(status === "failed"){
        return(
            <div className="flex flex-col h-screen max-h-screen overflow:hidden">
                <Navbar />
            <div className='grow overflow-auto flex flex-col items-center justify-center'>
                <h1>Something is broken :')</h1>
            </div>
        </div>
        )
    }
    if( status === "success" && !user.isVerified){
        return(
        <div className="flex flex-col h-screen max-h-screen overflow:hidden">
            <Navbar />
        <div className='grow overflow-auto flex flex-col items-center justify-center'>
            <Verification />
        </div>
    </div>
    )
    }

    return (
        <div className="flex flex-col h-screen max-h-screen overflow:hidden">
            <Navbar />
        <div className='grow overflow-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {tempEmail.sort((a, b) => b.createTime - a.createTime).map(e => {
                    return <div key={`${e._id}-card`}>
                        <EmailCard  _id = {e._id}/> <EmailPreview _id = {e._id}/>
                    </div>
                })}
                {tempEmail.length === 0 && (
                    <h1 className="text-center text-2xl my-20">Dashboard is empty</h1>
                )}
            </div>
        </div>
    </div>
    )

}
export default Dashboard;
