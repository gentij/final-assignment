import React from 'react'

//style
import Style from '../../styles/post.module.css'

//icons
import { FaTags } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import { FaArrowAltCircleDown } from 'react-icons/fa'

const Post = (props) => {

    return (
        <div className={Style.post}>
            <div className={Style.wrapper}>
                <div className={Style.postHeader}>
                    <h3 className="title">{props.title}</h3>
                    <p className="date">{props.date}</p>
                </div>
                <div className={Style.contentWrapper}>
                    <p className="content">{props.content}</p>
                </div>
                <div className={Style.interactions}>
                    <div className="rating">
                        {
                            props.upvoted ? (
                                <button onClick={() => props.downvote(props.id)}><FaArrowAltCircleDown />Downvote</button>
                            ) : (
                                <button onClick={() => props.upvote(props.id)}><FaArrowAltCircleUp />Upvote</button>
                            )
                        }
                    </div>
                    <div className={Style.options}>
                        <button><FaTags /> Edit</button>
                        <button onClick={() => props.deletePost(props.id)}><FaTrashAlt />Delete</button>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Post