import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../Redux/Slice/AuthSlice'


const ShowOnLogin = ({children}) => {
  const isLoggedin = useSelector(selectIsLoggedIn)
  
    if (isLoggedin) {
      return children

    }
  return null
}

export const ShowOnLogout = ({children}) => {
  const isLoggedin = useSelector(selectIsLoggedIn)
  
    if (!isLoggedin) {
      return children

    }
  return null
}

export default ShowOnLogin