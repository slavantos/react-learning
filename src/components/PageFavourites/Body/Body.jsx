import React from "react";
import Item from "./Item/Item";

const Body = ({favoritesPosts, deleteFavorites}) => {

    return (
        <div className="uk-grid uk-grid-small uk-child-width-1-5@l uk-child-width-1-2@m uk-child-width-1-1@s">
            {
                favoritesPosts[0] && favoritesPosts[0].map((favorites, idx) => <Item key={idx} favorites={favorites} deleteFavorites={deleteFavorites}/>)
            }
        </div>
    )
}

export default Body;