import React from "react";
import {
    Link,
  } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const PageSidebar = () => {
    //assigning location variable
    const location = useLocation();
    const { t } = useTranslation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const userInfoId = JSON.parse(localStorage.getItem('userInfo')).id;

    return (
        <aside className="sidebar is-show" id="sidebar">

            <div className="sidebar-hider">
                <i className="icon-arrow-left"></i>
                <i className="icon-arrow-right"></i>
            </div>

            <div className="sidebar-box">
                <ul className="uk-nav">
                    <li className={splitLocation[1] === "" ? "uk-active" : ""}><Link to="/"><i className="ico_home"></i><span>{t('sitebar.home')}</span></Link></li>
                    <li className="uk-nav-header"><i className="uk-nav-devider"></i><span>{t('sitebar.account')}</span></li>
                    <li className={splitLocation[1] === "profile" ? "uk-active" : ""}><Link to={`profile/id=${userInfoId}`}><i className="ico_profile"></i><span>{t('sitebar.profile')}</span></Link></li>
                    <li><Link to="favourites"><i className="ico_favourites"></i><span>{t('sitebar.favorites')}</span></Link></li>
                    <li><Link to="search"><i className="ico_favourites"></i><span>{t('header.search')}</span></Link></li>
                    <li className={splitLocation[1] === "chats" ? "uk-active" : ""}><Link to="chats"><i className="ico_chats"></i><span className="uk-nav-text">{t('sitebar.chats')}<span className="count">15</span></span></Link></li>
                    <li><Link to="friends"><i className="ico_friends"></i><span>{t('sitebar.friends')}</span></Link></li>
                    <li><a href="08_wallet.html"><i className="ico_wallet"></i><span>{t('sitebar.wallet')}</span></a></li>
                    <li className="uk-nav-header"><i className="uk-nav-devider"></i><span>{t('sitebar.main')}</span></li>
                    <li><a href="15_news.html"><i className="icon-feed"></i><span>News</span></a></li>
                    <li><a href="13_community.html"><i className="icon-organization"></i><span>Community</span></a></li>
                    <li><a href="17_members.html"><i className="ico_community"></i><span>Members</span></a></li>
                    <li><a href="09_games-store.html"><i className="ico_store"></i><span>Store</span></a></li>
                    <li><a href="11_market.html"><i className="ico_market"></i><span>Market</span></a></li>
                    <li><a href="12_streams.html"><i className="ico_streams"></i><span>Streams</span></a></li>
                    <li className="uk-nav-header"><i className="uk-nav-devider"></i><span>{t('sitebar.support')}</span></li>
                    <li><a href="#modal-help"><i className="ico_help"></i><span>{t('sitebar.help')}</span></a></li>
                </ul>
            </div>
        </aside>
    )
}

export default PageSidebar;