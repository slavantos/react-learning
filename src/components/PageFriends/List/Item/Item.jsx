import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {decryptData, encryptData} from "../../../HelperFunction/HelperFunction"

const Item = ({info, myFollowing, setMyFollowing}) => {
    const [isActive, setIsActive] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(myFollowing.some(item => item._id === info._id));
    
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
        setMyFollowing([...myFollowing, info]);

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
        setMyFollowing(myFollowing.filter((item) => item._id !== info._id));

    }

    return (
        <div className="uk-grid-margin">
            <div className="user-item --active">
                <div className="user-item__avatar">
                    <Link to={`/profile/id=${encryptData(info._id)}`}>
                        <img src="images/user-list-12.png" alt="user" />
                    </Link>
                </div>
                <div className="user-item__box">
                    <div className="user-item__name"><Link to={`/profile/id=${encryptData(info._id)}`}>{info.name}</Link></div>
                </div>
                <div className="user-item__more">
                    <div 
                        className={`ico_more ${isActive ? 'active' : ''}`} 
                        onClick={() => setIsActive(!isActive)}
                    >
                        <div 
                            className={`ico_more-content ${isSubscribed ? 'unsubscribe' : 'subscribe'}`} 
                            onClick={(e) => {
                                isSubscribed ? unsubscribeUser(e, info._id) : subscribeUser(e, info._id);
                                setIsSubscribed(!isSubscribed);
                                }}>
                            {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;