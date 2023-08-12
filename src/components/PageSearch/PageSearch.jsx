import React, { useEffect, useState } from "react";
import Filters from "./Filters/Filters";
import Body from "./Body/Body";

const PageSearch = () => {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            fetch(`${process.env.REACT_APP_BASE_URL}/all-users`)
            .then(users => users.json())
            .then(users => setAllUsers(users));
        }
        fetchData();
    }, []);

    return (
        <div className="uk-grid data-uk-grid">
            <div className="uk-width-3-3@l">
                <Filters />
                <Body allUsers={allUsers} />
            </div>
        </div>
    )
}

export default PageSearch;