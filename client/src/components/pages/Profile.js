import { useAuth0 } from '@auth0/auth0-react'
import { Add } from '../Add';
import PeopleIcon from '@mui/icons-material/People';
import EditIcon from '@mui/icons-material/Edit';


const Profile = () => {

    const { user, isAuthenticated } = useAuth0();

    return (

        isAuthenticated && (

            <main className='profile-page-div'>
                <section className='profile-nav-bar'>
                    {user?.picture && <img className='profile-pic' src={user.picture} />}
                    <h2 className='profile-name'>{user?.nickname}</h2>
                    <button className='edit-button'>{<EditIcon className='edit-icon' />}</button>
                    <button className='friends-button'>{<PeopleIcon className='friends-icon' />}</button>
                </section>
                <article className='fave-container'>
                    <section className='fave-movie'>Favorite Movies</section>
                    <section className='fave-tv'>Favorite TV Shows</section>
                </article>
                <h2 className='history-profile'>history</h2>
                <section className='test'><Add /></section>
            </main>
        )
    )
}










export default Profile;