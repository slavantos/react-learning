import React from 'react';
import './Header.css';
import Sidebar from './Sidebar/Sidebar';
import Search from './Search/Search';
import Language from './Language/Language';
import Profile from './Profile/Profile';

const Header = () => {
    return (
        <header className="page-header">
            <div className="page-header__inner">
                <Sidebar />
                <div className="page-header__content">
                    <Search />
                    <div className="page-header__action">
                        <Language />
                        <a className="action-btn" href="06_chats.html"><i className="ico_message"></i><span className="animation-ripple-delay1"></span></a>
                        <a className="action-btn" href="07_friends.html"><i className="ico_notification"></i><span className="animation-ripple-delay2"></span></a>
                        <Profile />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;