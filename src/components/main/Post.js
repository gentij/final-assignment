import React from 'react'

//style
import Style from '../../styles/post.module.css'

//icons
import { FaTags } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
import { FaArrowAltCircleUp } from 'react-icons/fa'

const Post = () => {

    return (
        <div className={Style.post}>
            <div className={Style.wrapper}>
                <div className={Style.postHeader}>
                    <h3 className="title">Lorem, ipsum dolor.</h3>
                    <p className="date">18/08/2020</p>
                </div>
                <div className={Style.contentWrapper}>
                    <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus praesentium voluptatem, quod tempora quo eius ducimus provident consectetur saepe blanditiis accusantium nemo consequuntur cupiditate dicta molestiae corrupti odit mollitia facilis quasi dolorum? Atque perspiciatis omnis explicabo hic dolor, officia porro! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium optio labore vel aliquam quaerat officiis hic doloremque inventore rerum aliquid ipsum at adipisci ab ullam corrupti molestias ipsa, fuga quidem! Dignissimos amet qui obcaecati sint, corporis enim dolore aliquam? Ab.   </p>
                </div>
                <div className={Style.interactions}>
                    <div className="rating">
                        <button><FaArrowAltCircleUp /> Upvote</button>
                    </div>
                    <div className={Style.options}>
                        <button><FaTags /> Edit</button>
                        <button><FaTrashAlt />Delete</button>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Post