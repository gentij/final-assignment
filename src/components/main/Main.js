import React from 'react'

//components

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
            </div>
        </main>
    )
}

export default Main;