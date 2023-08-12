import React, { useState, useEffect } from "react";
// import io from "socket.io-client";

const Footer = () => {

    // const socket = io(process.env.REACT_APP_BASE_URL, {
    //     "force new connection": true,
    //     "reconnectionAttempts": "Infinity", 
    //     "timeout": 10001, 
    //     "transports": ["websocket"]
    // });

    // const [textMsg, setTextMsg] = useState("");
    // const [messages, setMessages] = useState([{from: "nik", message: "Beginer text"}]);

    // useEffect(() => {
    //     socket.on("message", (message) => {
    //         setMessages([...messages, message]);
    //     });
    // }, [messages, socket]);

    // function sendMessage(e) {
    //     e.preventDefault();
    //     socket.emit("sendMessage", { 
    //         id_room: "642992c6a74c7a7ce38b1321",
    //         participants: ["64249c9789495097c6435f8b", "6424be3850265143f6434f53"],
    //         message: [{
    //             from: "64249c9789495097c6435f8b",
    //             to: "6424be3850265143f6434f53",
    //             message: textMsg
    //         }], 
    //     });
    //     textMsg("");
    // }

    return (
        <div className="chat-messages-footer">
            <form action="#!">
                <div className="chat-messages-form">
                    <div className="chat-messages-form-btns"><button className="ico_emoji-happy"></button><button className="ico_gallery"></button></div>
                    <div className="chat-messages-form-controls">
                        <input 
                            className="chat-messages-input" 
                            type="text" 
                            placeholder="Type a message" 
                            value={textMsg}
                            onChange={(e) => setTextMsg(e.target.value)}
                        />
                    </div>
                    <div className="chat-messages-form-btn"><button className="ico_microphone" type="button" onSubmit={(e) => sendMessage(e)}></button></div>
                </div>
            </form>
        </div>
    )
}

export default Footer;