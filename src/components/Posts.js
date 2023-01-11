import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../features/postSlice';

const Posts = () => {
    const { isLoading, posts, error } = useSelector((state) => state.posts)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchPosts());
    }, [dispatch])
  return (
    <div>
        {isLoading && <h3>Loading</h3>}
        {error && <h3>{error}</h3>}
        <section>
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

export default Posts