import React, { FunctionComponent } from 'react'
// import { useAuth0 } from '@auth0/auth0-react'

interface IProps {
  isAuthenticated: boolean,
  loginWithRedirect: Function,
  loginWithPopup: Function,
}

const SignUpButton: FunctionComponent<IProps> = ({isAuthenticated, loginWithRedirect, loginWithPopup}) => {

    return (

      <div className='container'>
        { !isAuthenticated ? (
          <button className='signup-button' onClick={() => loginWithRedirect({
            screen_hint: 'signup',
          })}>
            Sign Up
          </button>
        ) : (
          null
        )}
      </div>
    )
}

export default SignUpButton;