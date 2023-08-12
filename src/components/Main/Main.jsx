import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import PageSidebar from "../PageSidebar/PageSidebar";
import PageChats from "../PageChats/PageChats";
import PageProfile from '../PageProfile/PageProfile';
import ToggleColorTheme from "../ToggleColorTheme/ToggleColorTheme";
import PageFriends from "../PageFriends/PageFriends";
import PageFavourites from "../PageFavourites/PageFavourites";
import PageSearch from './../PageSearch/PageSearch';
import PageEditProfile from "../PageEditProfile/PageEditProfile";

const Main = () => {

    return (
        <div className="main-wrapper">
            <ToggleColorTheme />
            <div className='page-wrapper'>
                <Header />
                <div className="page-content">
                    <PageSidebar />
                    <main className="page-main">
                        <Routes>
                            <Route path="/" element={<h1>Главная</h1>} />
                            <Route path="/profile/:id" element={<PageProfile />} />
                            <Route path="/chats" element={<PageChats />} />
                            <Route path="/chats/:id" element={<PageChats />} />
                            <Route path="/friends" element={<PageFriends />} />
                            <Route path="/favourites" element={<PageFavourites />} />
                            <Route path="/search" element={<PageSearch />} />
                            <Route path="/edit-profile" element={<PageEditProfile />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Main;