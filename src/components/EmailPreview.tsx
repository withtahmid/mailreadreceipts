import { useState } from "react";
import { baseBackendURI } from "../config";
import { useAppDispatch, useAppSelector } from "../store";
import { formatTimestamp } from "../utils/timeFormat";
import { IoReloadOutline } from "react-icons/io5";
import { fetchUser } from "../store/userSlice";

const EmailPreview = ({ _id }: {_id: string}) => {

  const email = useAppSelector(state => state.user.emails).find(e => e._id === _id);
  const [copySuccess, setCopySuccess] = useState<string>("Copy HTML");

  const dispatch = useAppDispatch();

  const getInvokUrl = () => {
    return `${baseBackendURI}/${_id}`;
  }

  const getInvokeComponent = () => {
    return `<img src="${getInvokUrl()}" height="1" width="1"/>`
  }

  const copyToClipBoard = async() => {
    try {
      await navigator.clipboard.writeText(getInvokeComponent());
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed!");
      console.error("Error copying text: ", err);
    }
  }


  const { date, time } = formatTimestamp(email?.createTime ?? 0);

    return(<dialog id={`${_id}-card-modal`} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div className="flex justify-between">
              <h3 className="font-bold text-2xl">{email?.label}</h3>
              <button onClick={() => dispatch(fetchUser())} className="btn rounded-full text-primary text-xl font-bold"><IoReloadOutline /></button>
              </div>
            <p className="py-4">Created at: {date}, {time}</p>
            <div className="py-2">
            <kbd onClick={copyToClipBoard} className="btn kbd kbd-md">{copySuccess}</kbd>
            </div>
            <div>
              <div className="mockup-code">
                <pre ><code> {getInvokeComponent()} </code></pre>
              </div>
            </div>
            <div className="my-2">
              <h1 className="text-2xl my-1" >Seen {email?.invokes.length} times</h1>
              {
               <div className="py-3 px-1">
                  <table className="w-full text-center">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Browswe</th>
                      </tr>
                    </thead>
                    <tbody>
                    {email?.invokes.map(i => {
                      return <tr key={i.time}>
                        <td>{formatTimestamp(i.time).date}</td>
                        <td>{formatTimestamp(i.time).time}</td>
                        <td>{i.browser}</td>
                      </tr>
                    })}
                    </tbody>
                  </table>
               </div>
              }
            </div>
            <div className="modal-action">
              <form method="dialog">
               <div className="flex gap-5">
                <button className="btn">Close</button>
               </div>
              </form>
            </div>
          </div>
        </dialog>)
}
export default EmailPreview;