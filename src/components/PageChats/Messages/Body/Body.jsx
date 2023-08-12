import React, { useEffect, useRef } from "react";
import MyMessage from "./MyMessage/MyMessage";
import { decryptData } from "../../../HelperFunction/HelperFunction";

import chatLoading from "../../../../../src/chat-load.svg";
import { useTranslation } from "react-i18next";

const Body = ({userDialogMsg, setSelectedMessageInChat, selectedMessageInChat, isLoadingMessage}) => {

    const messagesEndRef = useRef(null);
    const { t } = useTranslation();
    
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom()
    }, [userDialogMsg])

    return (
        <div className="chat-messages-body">
            {!isLoadingMessage ? <div className="loading-message"><img src={chatLoading} alt="Loading..." /></div> : ''}
            {
                userDialogMsg.length > 0 ? userDialogMsg.map((message, idx) => <MyMessage 
                    key={idx} 
                    infoMessage={message} 
                    setSelectedMessageInChat={setSelectedMessageInChat}
                    selectedMessageInChat={selectedMessageInChat}
                    classMessage={
                        decryptData(JSON.parse(localStorage.getItem('userInfo')).id) == message.to ?
                        'messages-item --your-message' :
                        'messages-item --friend-message'
                    }
                />) : <p className="not-message">{t('chat.notMessage')}</p>
            }
            <div ref={messagesEndRef} />
        </div>
    )
}

export default Body;