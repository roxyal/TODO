import { useLocation, Navigate, Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation() // get the current path
    const { roles } = useAuth()

    // if we find 1 of the role then do
    const content = (
        roles.some(role => allowedRoles.includes(role))
            ? <Outlet />
            // if no roles found, send the user back to the login page, 
            : <Navigate to="/login" state={{ from: location }} replace />
    )

    return content
}
export default RequireAuth