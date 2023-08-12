import React, { useState } from "react";
import { Link } from "react-router-dom";
import { decryptData } from "../../../HelperFunction/HelperFunction";

const Item = ({dialogs, setUserDialogs, userDialogs}) => {

    const componUser = dialogs.participants.filter(el => el._id !== decryptData(JSON.parse(localStorage.getItem('userInfo')).id));
    const dateLastMessage = dialogs.messages.length && dialogs.messages[dialogs.messages.length - 1].createAt;
    const notReadMessages = dialogs.messages.filter(msg =>  msg.isRead == false && msg.from !== decryptData(JSON.parse(localStorage.getItem('userInfo')).id));

    // function readStatusMessage(e, id) {
    //     e.preventDefault();

    //     fetch(`${process.env.REACT_APP_BASE_URL}/update-status-messages/${id}`)
    //         .then(data => data.json())
    //         .then(dialogs => {
    //             fetch(`${process.env.REACT_APP_BASE_URL}/get-dialogs-user/${decryptData(JSON.parse(localStorage.getItem('userInfo')).id)}`)
    //                 .then(data => data.json())
    //                 .then(doalogsInfo => setUserDialogs(doalogsInfo));
    //         });
    // }

    // onClick={(e) => readStatusMessage(e, dialogs._id)}

    function handleDeleteDialog(e, dialogID) {
        e.preventDefault();

        alert("Вы уверены что хотите удалить диалог? Он так же будет удален у аппонента");
        fetch(`${process.env.REACT_APP_BASE_URL}/delete-dialog`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                dialogID: dialogID
            })
        })
            .then(dialogs => dialogs.json())
            .then(res => setUserDialogs(userDialogs.filter(dialog => dialog._id !== dialogID)));
    }

    return (
        <li className="list-dialog" data-id={dialogs._id}>
            <i className="icon-trash" onClick={(e) => handleDeleteDialog(e, dialogs._id)}></i>
            <Link to={"/chats/"+dialogs._id} className="user-item --active">
                <div className="user-item__avatar"><img src="/images/user-list-1.png" alt="user" /></div>
                <div className="user-item__desc">
                    <div className="user-item__name">
                        {componUser[0].name}
                    </div>
                    {
                        dialogs.messages.length ? <div className="user-item__text">{dialogs.messages[dialogs.messages.length - 1].message}</div> : ''
                    }
                </div>
                <div className="user-item__info">
                    {
                        dateLastMessage ? <div className="user-item__time">{dateLastMessage}</div> : ''
                    }
                    {
                        notReadMessages.length > 0 ? 
                            <div className="user-item__count">{notReadMessages.length}</div> :
                            <div className="user-item__count" style={{opacity:0}}></div>
                    }
                </div>
            </Link>
        </li>
    )
}

export default Item;