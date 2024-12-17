import { useEffect } from 'react'
import Login from './components/Login'
import { useAppDispatch, useAppSelector } from './store'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import { changePage } from './store/currentPageSlice'
import CreateEmailModal from './components/CreateEmailModal'
import DeleteModal from './components/DeleteModal'

function App() {
  const token = useAppSelector (state => state.user.token);
  const is = useAppSelector(state => state.currentPage.is);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if(token){
      dispatch(changePage("dashboard"));
    }
  }, [token])

  return (
    <>
     {token === null && is === "login" && <Login />}
     {token == null && is === "signup" && <Signup />}
     {token !== null && <Dashboard />}
    <CreateEmailModal />
    <DeleteModal />
    </>
  )
}

export default App
