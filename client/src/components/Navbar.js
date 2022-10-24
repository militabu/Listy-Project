import React, { useState } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
import { Add } from './Add'


export const Navbar = () => {

    const { isAuthenticated } = useAuth0();


    return (
        isAuthenticated && (
            <>
                <BottomNavigation
                    sx={{
                        width: '100%', position: 'fixed', bottom: 0, background: 'black', ".MuiBottomNavigationAction-root, .Mui-selected, svg": {
                            color: "white"
                        }
                    }}>
                    <BottomNavigationAction label='' icon={<MovieFilterIcon fontSize='large'/>} component={Link} to='/mainfeed' />
                    <BottomNavigationAction label='' icon={<SearchIcon fontSize='large' />} component={Link} to='/search' />
                    {/* <BottomNavigationAction label='' icon={<AddCircleIcon fontSize='large' />} /> */}
                    {/* <BottomNavigationAction label='' icon={<Add />} /> */}
                    <BottomNavigationAction label='' icon={<MenuIcon fontSize='large'/>} />
                    <BottomNavigationAction label='' icon={<AccountCircleIcon fontSize='large'/>} component={Link} to='/profile' />
                </BottomNavigation>
            </>

        )
    )
}


// function CustomLink({ to, children, ...props }) {
//     //
//     const resolvedPath = useResolvedPath(to);
//     // end: true says that the entire path must match
//     const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//     return (
//         <div className={isActive ? 'active' : ''}>
//             <Link to={to} {...props}>
//                 {children}
//             </Link>
//         </div>
//     )

// }