import React from "react";
import Item from "./Item/Item";
import { decryptData } from "../../HelperFunction/HelperFunction";

const Body = ({allUsers}) => {
    return (
        <div className="uk-grid uk-grid-small uk-child-width-1-5@l uk-child-width-1-3@m uk-child-width-1-1@s">
            {
                allUsers.length && allUsers.map((info, idx) => info._id !== decryptData(JSON.parse(localStorage.getItem('userInfo')).id) ? <Item key={idx} info={info} /> : '')
            }
        </div>
    )
}

export default Body;