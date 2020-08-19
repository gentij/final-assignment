import React, { useState } from 'react'

//components
import Post from './Post'

//style
import Style from '../../styles/main.module.css'

const Main = () => {
    const [posts, setPosts] = useState([])

    const [currentPost, setCurrentPost] = useState({
        id: null,
        title: '',
        content: '',
        upvoted: false
    })

    const updateTitle = (e) => {
        setCurrentPost({
                ...currentPost,
                id: posts.length,
                title: e.target.value
        })
    }

    const updateContent = (e) => {
        setCurrentPost({
                ...currentPost,
                id: posts.length,
                content: e.target.value
        })
    }

    const post = (e) => {
        e.preventDefault();
        if(currentPost.title && currentPost.content) {
            setPosts([currentPost, ...posts])
        } else {
            alert('fields can not be empty')
        }
        setCurrentPost({
            id: null,
            title: '',
            content: '',
            upvoted: false
        })
    }

    return (
        <main>
            <div className={Style.container}>
                <div className={Style.formContainer}>
                    <form onSubmit={post}>
                        <h3>New Post</h3>
                        <div className="title-input">
                            <label htmlFor="title">Title:</label>
                            <input id="title" value={currentPost.title} onChange={updateTitle} type="text" placeholder="Title..."/>
                        </div>
                        <div className="content-input">
                            <label htmlFor="content">Content:</label>
                            <textarea id="content" value={currentPost.content} onChange={updateContent} type="text" placeholder="Content..."/>
                        </div>
                        <button className={Style.btn}>Post</button>
                    </form>
                </div>

                <div className={Style.postsContainer}>
                    <h3 className={Style.welcome}>Welcome, here are the recent posts:</h3>
                    <div className={Style.posts}>
                        {
                            posts.length === 0 ? (
                                <div className={Style.empty}>
                                    <p>no posts yet...</p>
                                </div>
                            ) : (
                                posts.map(e => (
                                    <Post 
                                        key = {e.id}
                                        id = {e.id}
                                        title={e.title}
                                        content = {e.content}
                                        upvoted = {e.upvoted}
                                    />
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;