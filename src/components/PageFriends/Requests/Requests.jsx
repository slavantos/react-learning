import React from "react";
import Item from "./Item/Item";

const Requests = ({content, setContent}) => {
    return (
        <div className="widjet --friend-requests">
            {/* <div className="widjet__head">
                <h3 className="uk-text-lead">Friend Requests</h3>
            </div> */}
            <div className="friends-tabs">
                {/* <ul className="friend-requests-list">
                    <Item />
                    <Item />
                    <Item />
                </ul> */}
                <div className={content ? 'item' : 'item active'} onClick={() => setContent(false)}>
                    Subscribers
                </div>
                <div className={content ? 'item active' : 'item'} onClick={() => setContent(true)}>
                    Subscriptions
                </div>
            </div>
        </div>
    )
}

export default Requests;