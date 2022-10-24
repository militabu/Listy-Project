import { useAuth0 } from '@auth0/auth0-react'
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material'


const LogoutButton = () => {

    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (

            <button className='logout-button' onClick={() => logout()}>
                {<LogoutIcon className='logout-icon' />}
            </button>

        )

    )
}

export default LogoutButton