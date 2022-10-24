import React from 'react'
import blackListyLogo from './pictures/listyLogoBlack.svg'
import whitelistylogo from './pictures/whiteListy.svg'
import listylogo from './pictures/listyLogo.svg'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './buttons/LogoutButton';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';


export const LogoNavbar = () => {

  const { isAuthenticated } = useAuth0();

  return (

    isAuthenticated && (

      <>
        <AppBar position='fixed' sx={{ background: 'black'}}>
          <Toolbar >
            <IconButton size='medium' edge='start'>
              <img className='logo-navbar-listy' src={listylogo} />
              <h1 className='new-navbar-listy' >Listy</h1>
            </IconButton>
            <LogoutButton />
          </Toolbar>
          <hr></hr>
        </AppBar>

      </>

    )
  )
}
