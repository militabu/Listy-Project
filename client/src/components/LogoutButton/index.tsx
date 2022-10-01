// import { useAuth0 } from '@auth0/auth0-react'
import React, { FunctionComponent } from 'react'

interface IProps {
  isAuthenticated: boolean,
  logout: Function,
 }

const LogoutButton: FunctionComponent<IProps> = ({isAuthenticated, logout}) => {

    // const { logout, isAuthenticated } = useAuth0();
    return (

        <div>
          {isAuthenticated ? (
            <button className='logout-button' onClick={() => logout()}>
                Logout
            </button>
          ) : (
            null
          )}
        </div>
    )
}

export default LogoutButton