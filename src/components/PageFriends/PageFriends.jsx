import React, { useState } from "react";
import Filter from "./Filter/Filter";
import List from "./List/List";
import Requests from "./Requests/Requests";

const PageFriends = () => {
    const [myFollowers, setMyFollowers] = useState([]);
    const [myFollowing, setMyFollowing] = useState([]);
    const [content, setContent] = useState(false);

    const [search, setSearch] = useState('');
    
    const filteredMyFollowers = myFollowers.filter(post => {
        return post.name.toLowerCase().includes(search.toLowerCase());
    });

    const filteredMyFollowing = myFollowing.filter(post => {
        return post.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className="uk-grid data-uk-grid">
            <div className="uk-width-2-3@xl">
                <Filter setSearch={setSearch} />
                <List 
                    myFollowers={filteredMyFollowers}
                    setMyFollowers={setMyFollowers}
                    myFollowing={filteredMyFollowing}
                    setMyFollowing={setMyFollowing}
                    content={content}
                />
            </div>
            <div className="uk-width-1-3@xl">
                <Requests content={content} setContent={setContent} />
            </div>
        </div>
    )
}

export default PageFriends;