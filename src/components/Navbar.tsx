import { FaPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchUser, logout } from "../store/userSlice";
import { changePage } from "../store/currentPageSlice";
import { IoReloadOutline } from "react-icons/io5";
const Navbar = () => {


    const token = useAppSelector(state => state.user.token);
    const isVerified = useAppSelector(state => state.user.isVerified)


    const dispatch = useAppDispatch();

    const plusBtnClick = () => {
        const addEmailModal = document.getElementById("create-email-modal") as HTMLDialogElement;
        if(addEmailModal) {
            addEmailModal.showModal();
        }
    }

    const logoutBtn = () => {
      dispatch(logout());
      dispatch(changePage("login"));
    }

    return (
        <div className="navbar bg-base-200">
        <div className="navbar-start">
          {token !== null && (<div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a href="https://chromewebstore.google.com/detail/htmail-insert-html-into-g/omojcahabhafmagldeheegggbakefhlh" target="_blank">Extension</a></li>
              <li onClick={logoutBtn}><a>Logout</a></li>
            </ul>
          </div>)}
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">MailReadReceipts</a>
        </div>
        <div className="navbar-end">
          {isVerified && token !== null && (
            <>
            <button className="btn btn-ghost btn-circle" onClick={plusBtnClick}>
            <FaPlus />
          </button>
          <button onClick={() => dispatch(fetchUser())} className="btn rounded-full text-xl"><IoReloadOutline /></button>
            </>
        )}
        </div>
      </div>
      )
}

export default Navbar;