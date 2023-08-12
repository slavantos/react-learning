import React, { useState } from "react";

const Form = ({ userPosts, setUserPosts, currentUserId }) => {

    const [newPostContent, setNewPostContent] = useState('');

    function addNewPost(e) {
        e.preventDefault();

        fetch(`${process.env.REACT_APP_BASE_URL}/create-post`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                authorID: currentUserId,
                textPost: newPostContent
            })
        })
            .then(data => data.json())
            .then(newPost => setUserPosts([...userPosts, newPost]));

        setNewPostContent("");
    }

    return (
        <div className="fl-form" id="respond">
            <h3 className="box-title">Leave a comment</h3>
            <form className="uk-grid-small uk-grid" onSubmit={(e) => addNewPost(e)}>
                <div className="uk-width-1-1 uk-inline">
                    <textarea
                        className="uk-textarea"
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}>
                    </textarea>
                </div>
                <div className="uk-width-1-1 uk-inline uk-grid-margin uk-first-column">
                    <button
                        type="submit"
                        className="uk-button  uk-button-default uk-width-1-1 uk-margin-small-bottom"
                    >Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default Form;