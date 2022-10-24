import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom';





export const MainFeed = () => {

    const { getAccessTokenSilently, isAuthenticated } = useAuth0();

    const [posts, setPosts] = useState([])

    const postsBaseUrl = 'http://localhost:3030/api/posts'

    // navigate = useNavigate()


    //HAVE TO MAKE THIS DYNAMIC
    useEffect(() => {
        const fetchPosts = async () => {

            const res = await axios.get(postsBaseUrl + '/mainfeed/5544378348931826');

            setPosts(res.data);

            console.log(res)
        };

        fetchPosts();

    }, [])

    // useEffect(() => {

    //     const fetchMainfeedPosts = async () => {
    //         try {
    //             const token = await getAccessTokenSilently();

    //             const response = await fetch(
    //                 'http://localhost:3030/api/posts/mainfeed',
    //                 {
    //                     headers: {
    //                         Authorization: `Bearer ${token}`
    //                     },
    //                 }
    //             );

    //             const responseData = await response.json();
    //             setPosts(responseData);
    //         } catch (error) {
    //             console.error('Error: ', error)
    //         }
    //     };
    //     fetchMainfeedPosts();
    //     }, [])



    return (
        <>
        <main>

            <section className='posts-container'>
                {posts.map(post => (
                    <div className='image-and-post' key={post._id}>
                        <img className='post-image' src={post.image} />
                        <section className='post-container'>
                            <h1 className='post-name'>{post.name}</h1>
                            <p className='post-rating'>{post.rating}</p>
                            <p className='post-genre'>{post.genre}</p>
                        </section>
                    </div>
                ))}
            </section>
        </main>
                </>
    )
}
