import React, { useEffect } from "react";
import Item from "./Item/Item";
import { decryptData } from "../../HelperFunction/HelperFunction";

const List = ({myFollowers, setMyFollowers, myFollowing, setMyFollowing, content}) => {
    
    useEffect(() => {
        const fetchData = () => {
            fetch(`${process.env.REACT_APP_BASE_URL}/user-info`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userID: decryptData(JSON.parse(localStorage.getItem('userInfo')).id)
                })
            })
            .then(user => user.json())
            .then(user => {
                setMyFollowers(user[0].followers)
                setMyFollowing(user[0].following)
            });
        };
        fetchData();
    }, []);

    return (
        <div className="uk-grid uk-grid-small uk-child-width-1-2@m data-uk-grid">
            {
                content ?
                myFollowing.length < 1 ? <h3>You have no Subscriptions</h3> : myFollowing.map((info) => <Item info={info} key={info._id} myFollowing={myFollowing} setMyFollowing={setMyFollowing} />) :
                myFollowers.length < 1 ? <h3>You have no Subscribers</h3> : myFollowers.map((info) => <Item info={info} key={info._id} myFollowing={myFollowing} setMyFollowing={setMyFollowing} />)
            }
        </div>
    )
}

export default List;