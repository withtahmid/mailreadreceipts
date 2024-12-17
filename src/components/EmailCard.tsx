import { useAppDispatch, useAppSelector } from "../store"
import { setDeleteId } from "../store/userSlice";
import { formatTimestamp } from "../utils/timeFormat"
const EmailCard = ({ _id }: {_id: string}) => {

    const dispatch = useAppDispatch();

    const onbtnclick = () => {
        const modal = document.getElementById(`${_id}-card-modal`) as HTMLDialogElement
        if(modal){
            modal.showModal()
        }
    }
    const email = useAppSelector(state => state.user.emails).find(e => e._id === _id);

    const showDeleteModal = (_id: string) => {
        const modal = document.getElementById("deleteEmailModal") as HTMLDialogElement;
        if(modal){
            modal.showModal();
            dispatch(setDeleteId(_id));
        }
    }

    return(
        <div className="indicator m-5">
            <span className="indicator-item badge badge-primary text-lg font-bold">{email?.invokes.length}</span>
            <div className="card bg-base-200 w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{email?.label}</h2>
                    <p>{formatTimestamp(email?.createTime as number).date}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={onbtnclick}>Details</button>
                    <button className="btn btn-error" onClick={() => showDeleteModal(email?._id as string)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    
    )
}
export default EmailCard;