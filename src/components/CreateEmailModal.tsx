import { useState } from "react";
import { useAppDispatch } from "../store";
import { addEmailAsync } from "../store/userSlice";

const CreateEmailModal = () => {
    const [ label, setLabel ] = useState("");
    const dispatch = useAppDispatch();
    const addEmail = () => {
        if(label.length < 3 || label.length > 20) return;
        dispatch(addEmailAsync({label}));
        const modal = document.getElementById("create-email-modal") as HTMLDialogElement;
        if(modal){
            modal.close();
        }
    }

    return (
        <dialog id="create-email-modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg py-3">Add New Email</h3>
            <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setLabel(e.target.value) }}
            value={label}
            type="text"
            placeholder="Type Label"
            className="input input-bordered input-primary w-full max-w-xs" />
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
                <button className="btn btn-primary ml-5" onClick={addEmail}>Add New</button>
              </form>
            </div>
          </div>
        </dialog>
    )
}
export default CreateEmailModal;