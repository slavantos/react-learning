import React, { useEffect, useState } from "react";
import Heading from "./Heading/Heading";
import Subnav from "./Subnav/Subnav";
import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";
import { decryptData } from "../HelperFunction/HelperFunction"
import { useParams } from "react-router-dom";

const Profile = () => {
    const { id } = useParams();

    const currentUserId = decryptData(id.replace('id=', ''));

    const [userPosts, setUserPosts] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            //Get posts user                
            fetch(`${process.env.REACT_APP_BASE_URL}/all-posts-user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userID: currentUserId
                })
            })
                .then(data => data.json())
                .then(posts => setUserPosts(posts));

            //Get user info
            fetch(`${process.env.REACT_APP_BASE_URL}/user-info`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userID: currentUserId
                })
            })
                .then(data => data.json())
                .then(user => setUserInfo(user));
        };

        fetchData();
    }, [id]);

    return (
        <div className="uk-grid data-uk-grid">
            <div className="uk-width-3-4@l uk-width-3-4@m">
                <div className="uk-grid  uk-child-width-2-2@l uk-child-width-2-2@m uk-child-width-1-1@s">
                    <section className="b-post b-post-full b-post-single clearfix">
                        <Heading userInfo={userInfo} />
                        <Subnav />
                        <Content
                            userPosts={userPosts}
                            setUserPosts={setUserPosts}
                            userInfo={userInfo}
                            currentUserId={currentUserId}
                        />
                    </section>
                </div>
            </div>
            <div className="uk-width-1-4@l uk-width-1-4@m">
                <Sidebar />
            </div>
        </div>
    )
}

export default Profile;