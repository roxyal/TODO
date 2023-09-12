import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'
/*
    Welcome - Once user is authenticated, it will be traverse to this page
*/
const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()
    useTitle(`TechNotes: ${username}`)
    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    // Conditional logic in javascript
    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Welcome {username}!</h1>

            <p><Link to="/dash/notes">View TechNotes</Link></p>

            <p><Link to="/dash/notes/new">Add New TechNote</Link></p>

            {(isManager || isAdmin) && <p><Link to="/dash/users">View User Settings</Link></p>}

            {(isManager || isAdmin) && <p><Link to="/dash/users/new">Add New User</Link></p>}

        </section>
    )

    return content
}
export default Welcome