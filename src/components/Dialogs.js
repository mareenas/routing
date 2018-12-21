import React from 'react';
import DialogPanel from "./DialogPanel";
import style from './css/Dialogs.module.css';

const Dialogs = (props) => {
    let clickedDialogId = 15;

    let handler = (id) => {
        console.log(id);
        clickedDialogId = id;
    };
    return(
        <div className={style.dialogsWrapper}>
            <div className={style.dialogsSidebar}>
                <h3>Dialogs</h3>
                <ul>
                    {props.dialogs.dialogs.map((dialog) => {
                        return(
                            <li className={style.chat} key={dialog.id} onClick={ () => handler(dialog.id) }><img src={dialog.avatar} className={style.dialogAvatar} alt="avatar"/>{dialog.name}</li>
                        )
                    })}
                </ul>
            </div>
            <DialogPanel dialogs={props.dialogs} clickedDialogId={clickedDialogId} profile={props.profile} addMessage={props.addMessage} />
        </div>
    )
};

export default Dialogs;