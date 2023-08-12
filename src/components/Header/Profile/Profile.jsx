import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Profile = () => {
    const navigate = useNavigate();

    const [openProfile, setOpenProfile] = useState(false);

    const { t } = useTranslation();

    function handleLogOut(e) {
        e.preventDefault(); 
        localStorage.setItem('userInfo', ''); 
        navigate('/login');
    }

    return (
        <ul className="uk-subnav uk-subnav-pill uk-margin" onClick={(e)=> {e.preventDefault(); setOpenProfile(!openProfile);}}>
            <li>
                <a href="/">
                    <img src="/images/profile.png" alt="profile" className="profile" />
                    {t('header.hi')} Jack
                    <span uk-icon="icon: triangle-down">
                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 7 15 7 10 12"></polygon></svg>
                    </span></a>
                <div 
                    uk-dropdown="mode: click"
                    className={openProfile ? 'uk-dropdown profile-dropdown uk-dropdown-bottom-right uk-open' : 'uk-dropdown profile-dropdown uk-dropdown-bottom-right'}>
                    <ul className="uk-nav uk-dropdown-nav">
                        <li><Link to="/edit-profile">Edit profile</Link></li>
                        <li className="uk-nav-divider"></li>
                        <li>
                            <a 
                                href="/"
                                onClick={(e)=> handleLogOut(e)}>
                                {t('header.logOut')}
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    )
}

export default Profile;