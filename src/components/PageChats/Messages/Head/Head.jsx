import React from "react";
import "./Head.css";
import { decryptData } from "../../../HelperFunction/HelperFunction";

const Head = ({selectedMessageInChat, setSelectedMessageInChat, idRoom, setUserDialogMsg, activeDialog}) => {

    const {name} = activeDialog.length && activeDialog.find(user => user.participants.some(participant => participant._id !== decryptData(JSON.parse(localStorage.getItem('userInfo')).id))).participants.find(participant => participant._id !== decryptData(JSON.parse(localStorage.getItem('userInfo')).id));

    function deleteMessage() {
        fetch(`${process.env.REACT_APP_BASE_URL}/delete-messages/${idRoom}/${selectedMessageInChat}`)
            .then(data => data.json())
            .then(res => setUserDialogMsg(res));

        setSelectedMessageInChat([]);

        const selectedMsg = document.querySelectorAll('.messages-item.selected');
        selectedMsg.forEach(element => {
            element.classList.remove('selected');
        });
    }

    return (
        <div className="chat-messages-head">
            <div className="user-item">
                <div 
                    className={true ? 'user-item__avatar online' : 'user-item__avatar'}
                >
                    <img src="/images/user-list-4.png" alt="user" />
                </div>
                <div className="user-item__desc">
                    <div className="user-item__name">{name}</div>
                </div>
            </div>
            <div className="info-panel">
                {
                    selectedMessageInChat.length <= 0 ? 
                        <div className="call-user">
                            <a className="ico_call" href="/"></a>
                            <a className="ico_info-circle" href="/"></a>
                        </div> :
                        <div className="action-with-message">
                            <div className="delete-message" onClick={deleteMessage}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M6.84 4H2.75a.75.75 0 0 0 0 1.5h.55l.9 9.25c.05.52.1.96.16 1.31.06.37.16.71.35 1.03a2.9 2.9 0 0 0 1.25 1.13c.33.16.68.22 1.06.25.36.03.8.03 1.32.03h3.32c.53 0 .96 0 1.32-.03.38-.03.73-.1 1.06-.25a2.9 2.9 0 0 0 1.25-1.13c.19-.32.29-.66.35-1.03.06-.35.1-.79.16-1.31l.9-9.25h.55a.75.75 0 0 0 0-1.5h-4.09a3.25 3.25 0 0 0-6.32 0Zm1.58 0h3.16a1.75 1.75 0 0 0-3.16 0Zm6.78 1.5H4.8l.9 9.07c.05.56.08.94.13 1.23.05.28.1.42.17.52a1.4 1.4 0 0 0 .6.55c.1.04.25.08.53.1.3.03.68.03 1.24.03h3.26c.56 0 .94 0 1.23-.02.29-.03.43-.07.54-.11a1.4 1.4 0 0 0 .6-.55c.06-.1.11-.24.16-.52.05-.3.1-.67.15-1.23l.89-9.07Zm-2.89 2a.75.75 0 0 1 .69.81l-.5 6a.75.75 0 0 1-1.5-.12l.5-6a.75.75 0 0 1 .81-.69Zm-4.62 0a.75.75 0 0 1 .8.69l.5 6a.75.75 0 0 1-1.49.13l-.5-6a.75.75 0 0 1 .69-.82Z"></path></svg>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Head;