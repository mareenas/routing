import React from 'react';
import style from './css/DialogPanel.module.css';
import {guid} from '../utils.js';

const DialogPanel = (props) => {
    let addNewMessage = () => {
        let newMessage = {
            id: guid(),
            userId: props.clickedDialogId,
            text: document.querySelector("#newMessage").value,
            myMessage: true
        };
        if(newMessage.text !== "") {
            props.addMessage(newMessage);
        }

    };

    let user = props.dialogs.dialogs.find(function(user) {
        return user.id === props.clickedDialogId;
    });
    let chosenMessages = props.dialogs.messages.filter((message) => {return message.userId === user.id});
    let messages = chosenMessages.map((message) => {
        return <div className={style.messageWrapper} key={message.id}>
            <div className={style.userpic}>
                {message.myMessage ? <img src={props.profile.avatar} alt="" /> : <img src={user.avatar} alt="" />}
                <div className={style.dialogNameWrapper}>
                    {message.myMessage ? props.profile.name : user.name }
                </div>
            </div>
            <div>{message.text}</div>
        </div>
    });

    return (
        <div>
            <div className={style.dialogWindow}>
                {messages}
                <textarea name="" id="newMessage" cols="30" rows="10" className={style.textarea} />
                <div className={style.submitButtonStyling}>
                    <input type="button" value="Отправить" onClick={addNewMessage} />
                </div>
            </div>
            <div>

            </div>
        </div>
    )
};

export default DialogPanel;