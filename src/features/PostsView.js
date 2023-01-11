import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postSlice';

const PostsView = () => {
    const { isLoading, posts, error } = useSelector((state) => state.posts)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchPosts());
    }, [dispatch])
  return (
    <div>
        <h1 className='title'>Post Using Redux-toolkit</h1>
        {isLoading && <h3>Loading</h3>}
        {error && <h3>{error}</h3>}
        <section className='section'>
        {posts && posts.map(data => {
            const {id, body, title} = data;
            return(
                <article key={id}>
                    <h3>{title}</h3>
                    <p>{body}</p>
                </article>
            )
        })}
        </section>
    </div>
  )
}

export default PostsView