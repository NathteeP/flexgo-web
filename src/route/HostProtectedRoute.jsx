import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { fetchAuthUser } from "../store/slices/user-slice"
import { Navigate } from "react-router-dom"
import { useEffect } from "react"

const HostProtectedRoute = ({children}) => {
  const {authUser,isLoading} = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAuthUser())
  },[dispatch])

  if(!authUser && !isLoading) {
    return <Navigate to="/"/>
  } else if (authUser && authUser.role === 'ADMIN') {
    return <Navigate to="/admin" />
  }

  return <>{children}</>
}

export default HostProtectedRoute