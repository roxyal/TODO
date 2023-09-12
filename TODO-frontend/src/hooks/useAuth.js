import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../features/auth/authSlice'
import jwtDecode from 'jwt-decode'

/*
    useAuth - Obtains the roles of the current User which is accessing through the use of current token
*/
const useAuth = () => {
    const token = useSelector(selectCurrentToken) // get the current token of the user

    let isManager = false
    let isAdmin = false
    let status = "Employee"

    if (token) {
        const decoded = jwtDecode(token) // decode the token of the user, to see what is his username/role
        const { username, roles } = decoded.UserInfo

        isManager = roles.includes('Manager')
        isAdmin = roles.includes('Admin')

        if (isManager) status = 'Manager'
        if (isAdmin) status = 'Admin'

        return { username, roles, status, isManager, isAdmin }
    }

    return { username: '', roles: [], isManager, isAdmin, status}
}
export default useAuth