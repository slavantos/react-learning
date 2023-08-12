import React, { useState } from "react";
import { Link } from "react-router-dom";
import {decryptData, encryptData} from "../../../HelperFunction/HelperFunction"

const Item = ({info}) => {

    const [isSubscribed, setIsSubscribed] = useState(info.followers.includes(decryptData(JSON.parse(localStorage.getItem('userInfo')).id)));
    const [countFollowers, setCountFollowers] = useState(info.followers.length);

    function subscribeUser(e, userID) {
        e.preventDefault();

        fetch(`${process.env.REACT_APP_BASE_URL}/follow-user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userID: decryptData(JSON.parse(localStorage.getItem('userInfo')).id),
                followedUserID: userID
            })
        });

        setCountFollowers(countFollowers + 1);
    }
    
    function unsubscribeUser(e, userID) {
        e.preventDefault();

        fetch(`${process.env.REACT_APP_BASE_URL}/unfollow-user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userID: decryptData(JSON.parse(localStorage.getItem('userInfo')).id),
                unfollowedUserID: userID
            })
        });

        setCountFollowers(countFollowers - 1);
    }

    return (
        <div className="fl-gp-box">
            <Link to={`/profile/id=${encryptData(info._id)}`}>
                <div className="fl-cover-image">
                    <img alt="group" src="images/gr1.jpg" />
                    <div className="fl-gp-info-wrap">
                        <div className="fl-gp-info">
                            <div className="fl-gp-title">{info.name}</div>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="fl-gp-footer">
                <div className="fl-gp-cells">
                    <div className="fl-gp-cell-left">
                        <strong>{countFollowers}</strong>
                        <span>Followers</span>
                    </div>
                    <div className="fl-gp-cell-right">
                        <strong>{info.following.length}</strong>
                        <span>Following</span>
                    </div>
                </div>
                <div className="fl-gp-action">
                    <div className="fl-gp-button">
                        <a 
                            className={`fl-gp-button fl-join-group ${isSubscribed ? 'unsubscribe' : 'subscribe'}`} 
                            href="/" 
                            onClick={(e) => {
                                isSubscribed ? unsubscribeUser(e, info._id) : subscribeUser(e, info._id);
                                setIsSubscribed(!isSubscribed);
                                }}>
                            {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;