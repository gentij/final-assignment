import React, { useState } from 'react'

//random id library
import { v4 as uuidv4 } from 'uuid';

//components
import Post from './Post'

//style
import Style from '../../styles/main.module.css'

const Main = () => {
    //Define state to localStorage data if there is any, otherwise define an empty array
    const [posts, setPosts] = useState(
        JSON.parse(localStorage.getItem('data')) ? 
        JSON.parse(localStorage.getItem('data')) : []
    )

    const [currentPost, setCurrentPost] = useState({
        id: null,
        title: '',
        content: '',
        upvoted: false,
        date: ''
    })

    let date = new Date();

    const updateTitle = (e) => {
        setCurrentPost({
                ...currentPost,
                id: uuidv4(), //random id library
                title: e.target.value,
                date: date.toDateString()
        })
    }

    const updateContent = (e) => {
        setCurrentPost({
                ...currentPost,
                content: e.target.value,
        })
    }

    // Post 
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

    //Delete post
    const deletePost = (id) => {
        setPosts(posts => posts.filter(post => post.id !== id))
    }

    //Upvote post
    const upvotePost = (id) => {
        setPosts(prevState => prevState.map(post => {
            if(post.id === id) {
                post.upvoted = true
            }
            return post
        }))
    }

    //Downvote post
    const downvotePost = (id) => {
        setPosts(prevState => prevState.map(post => {
            if(post.id === id) {
                post.upvoted = false
            }
            return post
        }))
    }

    const editPost = (id) => {
        const newTitle = prompt('New title:')
        const newContent = prompt('New content:')

        setPosts(prevState => prevState.map(post => {
            if(post.id === id) {
                post.title = newTitle || post.title
                post.content = newContent || post.content
                post.date = date.toDateString()
            }
            return post
        }))
    }

    //Set items to localStorage
    localStorage.setItem("data", JSON.stringify(posts));

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
                                        date = {e.date}
                                        deletePost = {deletePost}
                                        upvote = {upvotePost}
                                        downvote = {downvotePost}
                                        editPost = {editPost}
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