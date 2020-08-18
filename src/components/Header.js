import React from 'react'

//FontAwesome Icons
import { FaReddit } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'

//Style
import Style from '../styles/header.module.css'

const Header = () => {
    return (
        <header>
            <div className={Style.container}>
                <div className={Style.brandingSearch}>
                    <div className={Style.branding}>
                        <h1>
                            <a href="#">
                                <span><FaReddit /></span>
                                <span className={Style.noDisp}>reddit</span>
                            </a>
                        </h1>
                    </div>
                    <div className={Style.searchDiv}>
                        <input type="text" className="search" placeholder="Search..."/>
                    </div>
                </div>
                <div className={Style.userDiv}>
                    <button className={Style.btn}>Log in</button>
                    <button className={`${Style.btn} ${Style.btnBlue}`}>Sign up</button>
                    <button className={Style.btnSm}><FaUserAlt /></button>
                </div>
            </div>
        </header>
    )
}

export default Header;