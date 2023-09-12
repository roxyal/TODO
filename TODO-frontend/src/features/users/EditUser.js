import { useParams } from 'react-router-dom'
import EditUserForm from './EditUserForm'
import useTitle from '../../hooks/useTitle'

import { useGetUsersQuery } from './usersApiSlice'
import PulseLoader from 'react-spinners/PulseLoader'

/*
    EditUser - EditeUser page that allow Managers/Admins to edit the employees account.
*/

const EditUser = () => {
    useTitle('TechNotes: Edit User')
    const { id } = useParams()

    const { user } = useGetUsersQuery("userList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[id]
        }),
    })

    // if no user found, loading spinner
    if (!user) return <PulseLoader color={"#FFF"} />

    const content = <EditUserForm user={user} />

    return content
}
export default EditUser