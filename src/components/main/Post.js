import React from 'react'

//style
import Style from '../../styles/post.module.css'

//icons
import { FaTags } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import { FaArrowAltCircleDown } from 'react-icons/fa'

const Post = (props) => {
    const {id, title, content, date, downvote, upvote, editPost, deletePost} = props

    return (
        <div className={Style.post}>
            <div className={Style.wrapper}>
                <div className={Style.postHeader}>
                    <h3 className="title">{title}</h3>
                    <p className="date">{date}</p>
                </div>
                <div className={Style.contentWrapper}>
                    <p className="content">{content}</p>
                </div>
                <div className={Style.interactions}>
                    <div className="rating">
                        {
                            props.upvoted ? (
                                <button onClick={() => downvote(id)}><FaArrowAltCircleDown />Downvote</button>
                            ) : (
                                <button onClick={() => upvote(id)}><FaArrowAltCircleUp />Upvote</button>
                            )
                        }
                    </div>
                    <div className={Style.options}>
                        <button onClick={() => editPost(id)}><FaTags /> Edit</button>
                        <button onClick={() => deletePost(id)}><FaTrashAlt />Delete</button>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Post