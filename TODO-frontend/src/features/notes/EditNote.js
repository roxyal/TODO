import { useParams } from 'react-router-dom'
import EditNoteForm from './EditNoteForm'
import { useGetNotesQuery } from './notesApiSlice'
import { useGetUsersQuery } from '../users/usersApiSlice'
import useAuth from '../../hooks/useAuth'
import PulseLoader from 'react-spinners/PulseLoader'
import useTitle from '../../hooks/useTitle'

/*
    EditNote - EditeNote page that allow Managers/Admins to edit the sticky note. Can update the status of
    the task or edit the description of the job tasks.
*/
const EditNote = () => {

    useTitle('TechNotes: Edit Note')
    const { id } = useParams()
    
    const { username, isManager, isAdmin } = useAuth()

    const { note } = useGetNotesQuery("notesList", {
        selectFromResult: ({ data }) => ({
            note: data?.entities[id]
        }),
    })

    const { users } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })

    if (!note || !users?.length) return <PulseLoader color={"#FFF"} />


    if (!isManager && !isAdmin) {
        if (note.username !== username) {
            return <p className="errmsg">No access</p>
        }
    }

    const content = <EditNoteForm note={note} users={users} />

    return content
}
export default EditNote