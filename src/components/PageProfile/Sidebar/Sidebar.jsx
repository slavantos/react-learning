import React from "react";
import MyFriends from "./MyFriends/MyFriends";
import MyProfile from "./MyProfile/MyProfile";

const Sidebar = () => {
    return (
        <aside className="l-sidebar">
            <MyProfile />
            <MyFriends />
        </aside>
    )
}

export default Sidebar;