import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from "../hooks/useAuth"

/*
    DashFooter is the Footer, where we put GoBackHome Button
*/
const DashFooter = () => {

    const { username, status } = useAuth()
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const onGoHomeClicked = () => navigate('/dash')

    let goHomeButton = null
    if (pathname !== '/dash') {
        goHomeButton = (
            <button
                className="dash-footer__button icon-button"
                title="Home"
                onClick={onGoHomeClicked}
            >
                <FontAwesomeIcon icon={faHouse} />
            </button>
        )
    }

    const content = (
        <footer className="dash-footer">
            {goHomeButton}
            <p>Current User: {username}</p>
            <p>Status: {status}</p>
        </footer>
    )
    return content
}
export default DashFooter