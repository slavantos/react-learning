import React from "react";
import './MyMessage.css';

const MyMessage = ({infoMessage, classMessage, setSelectedMessageInChat, selectedMessageInChat}) => {

    function selectedMessage(e) {

        const parentElement = e.target.closest(".messages-item");
        const messageID = parentElement.dataset.id;

        parentElement.classList.contains("selected") ? 
            parentElement.classList.remove("selected") : 
            parentElement.classList.add("selected");

        selectedMessageInChat.includes(messageID) ?
            setSelectedMessageInChat(selectedMessageInChat.filter((messageId) => messageId !== messageID)) :
            setSelectedMessageInChat([...selectedMessageInChat, messageID]);
    }

    function arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    return (
        <div 
            className={classMessage} data-id={infoMessage._id}
            onClick={(e) => selectedMessage(e)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#F46119" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zM6 7.94a.75.75 0 1 0-1 1.12l1.46 1.3c.44.38 1.1.33 1.49-.1l.04-.05 2.9-3.75a.75.75 0 1 0-1.19-.92L7.1 8.91 6 7.94z"></path></svg>
            <div className="messages-item__avatar">
                <img src="/images/user-list-4.png" alt="user" />
            </div>
            <div className="messages-item__text">{infoMessage.message}</div>
            {
                infoMessage.attachments.length ? <img src={`data:image/jpg; base64, ${arrayBufferToBase64(infoMessage.attachments[0].data.data)}`} /> : ''
            }
        </div>
    )
}

export default MyMessage;