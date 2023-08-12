import React, { useState, useEffect } from "react";
import List from "./List/List";
import Messages from "./Messages/Messages";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

import { decryptData } from "../HelperFunction/HelperFunction";



const PageChats = () => {

    const socket = io(process.env.REACT_APP_BASE_URL, {
        "force new connection": true,
        "reconnectionAttempts": "Infinity", 
        "timeout": 10001,
        "transports": ["websocket"]
    });

    const [userDialogs, setUserDialogs] = useState([]); 
    const [userDialogMsg, setUserDialogMsg] = useState([]); 
    const [isLoadingMessage, setIsLoadingMessage] = useState(false);
    const [isLoadingDialogs, setIsLoadingDialogs] = useState(false);

    const {id} = useParams();

    useEffect(() => {
        const fetchData = () => {
            fetch(`${process.env.REACT_APP_BASE_URL}/get-dialogs-user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userID: decryptData(JSON.parse(localStorage.getItem('userInfo')).id)
                })
            })
                .then(dialogs => dialogs.json())
                .then(dialog => setUserDialogs(dialog))
                .then(isLoading => setIsLoadingDialogs(true));
        };

        fetchData();
    }, []);
    
    useEffect(() => {

        id && socket.emit("join_room", id);

        socket.on("messages", (messages) => {
            setUserDialogMsg(messages);
            setIsLoadingMessage(true);
        });

        return () => socket.off("messages");
    }, [id]);

    return (
        <>
            <h3 className="uk-text-lead">Chats</h3>
            <div className="uk-grid uk-grid-small data-uk-grid">
                <div className="uk-width-1-3@l">
                    <List userDialogs={userDialogs} setUserDialogs={setUserDialogs} isLoadingDialogs={isLoadingDialogs}/>
                </div>
                <div className="uk-width-2-3@l">
                    {
                        id && <Messages 
                                userDialogMsg={userDialogMsg} 
                                setUserDialogMsg={setUserDialogMsg} 
                                socket={socket} 
                                idRoom={id}
                                userDialogs={userDialogs}
                                isLoadingMessage={isLoadingMessage}
                            />
                    }
                </div>
            </div>
        </>
    )
}

export default PageChats;