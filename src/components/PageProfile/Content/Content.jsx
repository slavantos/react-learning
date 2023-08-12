import React from "react";
import Form from "./Form/Form";
import Comments from "./Comments/Comments";
import {decryptData} from "../../HelperFunction/HelperFunction"

const Content = ({userPosts, setUserPosts, userInfo, currentUserId}) => {
    
    const storageUserId = decryptData(JSON.parse(localStorage.getItem("userInfo")).id);
    
    
    return (
        <div className="entry-main">
            <div className="entry-content">
                {
                    storageUserId === currentUserId ? 
                    <Form 
                        userPosts={userPosts}
                        setUserPosts={setUserPosts}
                        currentUserId={currentUserId}
                    /> :
                    ''
                }
                <Comments 
                    userPosts={userPosts} 
                    userInfo={userInfo} 
                />
            </div>
        </div>
    )
}

export default Content;