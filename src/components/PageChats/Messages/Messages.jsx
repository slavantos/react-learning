import React, { useEffect, useRef, useState } from "react";
import "./Messages.css";
import Head from "./Head/Head";
import Body from "./Body/Body";
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { decryptData } from "../../HelperFunction/HelperFunction";
//import Footer from "./Footer/Footer";

const Messages = ({userDialogMsg, socket, idRoom, setUserDialogMsg, userDialogs, isLoadingMessage}) => {

    const [textMsg, setTextMsg] = useState("");
    const [fileMessage, setFileMessage] = useState(null);
    const [isEmojiPicker, setEmojiPicker] = useState(false);
    // const [isTyping, setIsTyping] = useState(false);
    const [selectedMessageInChat, setSelectedMessageInChat] = useState([]);

    const activeDialog = userDialogs.filter(dialog => dialog._id == idRoom);

    const fileField = useRef(null);

    // useEffect(() => {
    //     socket.on("typing", ({userId}) => {
    //         setIsTyping(true);
    //     });
    //     socket.on("noTyping", ({userId}) => {
    //         setIsTyping(false);
    //     });

    // }, [socket]);

    useEffect(() => {
        setSelectedMessageInChat([]);

        const selectedMsg = document.querySelectorAll('.messages-item.selected');
        selectedMsg.forEach(element => {
            element.classList.remove('selected');
        });
    }, [idRoom]);

    function sendMessage(e) {
        e.preventDefault();

        const companionUser = activeDialog.length && activeDialog[0].participants.filter(companionId => companionId._id !== decryptData(JSON.parse(localStorage.getItem('userInfo')).id));
        let attachments = [];

        if(fileMessage) {
            attachments = [{
                name: fileMessage.name,
                data: fileMessage
            }];
        }

        socket.emit("sendMessage", { 
            room: idRoom,
            participants: [
                decryptData(JSON.parse(localStorage.getItem('userInfo')).id), 
                companionUser[0]._id,
            ],
            message: [{
                from: decryptData(JSON.parse(localStorage.getItem('userInfo')).id),
                to: companionUser[0]._id,
                message: textMsg,
                attachments
            }], 
        });
        
        setTextMsg("");
        setFileMessage(null);
    }

    function handleTextChange(e) {
        if (e.target.value !== '') {
            socket.emit("typing");
        } else {
            socket.emit("noTyping");
        }

        setTextMsg(e.target.value);
    }

    function handleUploadFile(e) {
        e.preventDefault();
        fileField.current.click();
    }

    function handleInputFileChange(event) {
        setFileMessage(event.target.files[0]);
    }

    return (
        <div className="chat-messages-box">
            <Head
                selectedMessageInChat={selectedMessageInChat}
                setSelectedMessageInChat={setSelectedMessageInChat}
                idRoom={idRoom}
                setUserDialogMsg={setUserDialogMsg}
                activeDialog={activeDialog}
            />
            <Body 
                userDialogMsg={userDialogMsg} 
                setSelectedMessageInChat={setSelectedMessageInChat}
                selectedMessageInChat={selectedMessageInChat}
                isLoadingMessage={isLoadingMessage}
            />
            {/* {
                isTyping ? <div>User is typing...</div> : null
            } */}
            <div className="chat-messages-footer">
                <form 
                    encType="multipart/form-data"
                    onSubmit={(e) => sendMessage(e)}
                >
                    <div className="chat-messages-form">
                        <div className="chat-messages-form-btns">
                            <div className="emoji-wrapper">
                                <button 
                                    className="ico_emoji-happy"
                                    onClick={(e) => {e.preventDefault(); setEmojiPicker(!isEmojiPicker)}
                                }
                                ></button>
                                <div className={isEmojiPicker ? 'emoji-picker block' : 'emoji-picker none'}>
                                    <Picker 
                                        data={data}
                                        previewPosition="none"
                                        onEmojiSelect={(e) => {
                                            setTextMsg(textMsg + e.native)
                                            setEmojiPicker(!isEmojiPicker);
                                        }}
                                    />
                                </div>
                            </div>
                            <button className="ico_gallery" onClick={handleUploadFile}></button>
                            <input
                                type="file"
                                className="upload-file-msg"
                                name="attachment"
                                accept=".jpg,.jpeg,.png"
                                ref={fileField}
                                onChange={handleInputFileChange}
                            />
                        </div>
                        <div className="chat-messages-form-controls">
                            <input 
                                className="chat-messages-input" 
                                type="text" 
                                placeholder="Type a message" 
                                value={textMsg}
                                onChange={(e) => handleTextChange(e)}
                                required
                            />
                        </div>
                        <div className="chat-messages-form-btn">
                            <button className="icon-paper-plane" type="submit" />
                            <button className="ico_microphone"></button>
                        </div>
                    </div>
                </form>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Messages;