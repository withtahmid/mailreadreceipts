import { useAppDispatch, useAppSelector } from "../store";
import { deleteOne } from "../store/userSlice";

const DeleteModal = () => {
    const _id = useAppSelector(state => state.user.deleteSelectedId);
    const email = useAppSelector(state => state.user.emails).find(e => e._id === _id);
    const dispatch = useAppDispatch();
    const deleteEmail = () => {
        dispatch(deleteOne({_id: _id as string}));
    }
    return (<dialog id="deleteEmailModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <h3 className="font-bold text-lg">{email?.label}</h3>
            <p className="py-4">Are you sure want to delete?</p>
            <div className="modal-action">
            <form method="dialog">
                <button className="btn">Close</button>
                <button className="btn btn-error" onClick={deleteEmail}>Delete</button>
            </form>
            </div>
        </div>
        </dialog>)
}
export default DeleteModal;