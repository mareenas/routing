import React from 'react';

const DialogPanel = (props) => {
    let user = props.dialogs.dialogs[props.chosenDialogIndex];
    let chosenMessages = props.dialogs.messages.filter((message) => {return message.userId === user.id});
    let messages = chosenMessages.map((message) => {
        return <div className="message-wrapper">
            <div className="userpic">
                {message.myMessage ? <img src={props.profile.avatar} alt="" /> : <img src={user.avatar} alt="" />}
                <div className="dialog-name-wrapper">
                    {message.myMessage ? props.profile.name : user.name }
                </div>
            </div>
            <div className="user-message">{message.text}</div>
        </div>
    });

    return (
        <div className="dialog-window">
            {messages}
        </div>
    )
};

export default DialogPanel;