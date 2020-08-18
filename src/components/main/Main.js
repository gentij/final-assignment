import React from 'react'

//components
import Post from './Post'

//style
import Style from '../../styles/main.module.css'

const Main = () => {
    return (
        <main>
            <div className={Style.container}>
                <div className={Style.formContainer}>
                    <form>
                        <h3>New Post</h3>
                        <div className="title-input">
                            <label htmlFor="title">Title:</label>
                            <input id="title" type="text" placeholder="Title..."/>
                        </div>
                        <div className="content-input">
                            <label htmlFor="content">Content:</label>
                            <textarea id="content" type="text" placeholder="Content..."/>
                        </div>
                        <button className={Style.btn}>Post</button>
                    </form>
                </div>

                <div className={Style.postsContainer}>
                    <h3 className={Style.welcome}>Welcome, here are the recent posts:</h3>
                    <div className={Style.posts}>
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;