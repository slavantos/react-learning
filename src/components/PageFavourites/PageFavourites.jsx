import React, { useEffect, useState } from "react";
import Filters from "./Filters/Filters";
import Body from "./Body/Body";
import { decryptData } from "../../components/HelperFunction/HelperFunction";

const PageFavourites = () => {

    const [favoritesPosts, setFavoritesPosts] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            fetch(`${process.env.REACT_APP_BASE_URL}/get-user-favorites-posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userID: decryptData(JSON.parse(localStorage.getItem('userInfo')).id)
                })
            })
                .then(data => data.json())
                .then(favorites => setFavoritesPosts([favorites]));
        }

        fetchData();

    }, []);

    function deleteFavorites(id) {
        fetch(`${process.env.REACT_APP_BASE_URL}/add-or-remove-favorites`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userID: decryptData(JSON.parse(localStorage.getItem('userInfo')).id),
                postID: id
            })
        })
            .then(data => data.json())
            .then(favorites => setFavoritesPosts([favorites]));
    }

    return (
        <div className="uk-grid data-uk-grid">
            <div className="uk-width-3-3@l">
                <Filters favoritesPosts={favoritesPosts} />
                <Body favoritesPosts={favoritesPosts} deleteFavorites={deleteFavorites}/>
            </div> 
        </div>
    )
}

export default PageFavourites;