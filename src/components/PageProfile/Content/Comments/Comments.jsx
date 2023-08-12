import React from "react";
import Item from "./Item/Item";

const Comments = ({userPosts, userInfo}) => {
    return (
        <div className="comments_form">
            <ul className="uk-comment-list">
                {
                    userInfo.length && userPosts.map((post, idx) => <Item post={post} key={idx} userInfo={userInfo}/> ).reverse()
                }
            </ul>
        </div>
    )
}

export default Comments;