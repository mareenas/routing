import React from 'react';
import DialogPanel from "./DialogPanel";
import style from './css/Dialogs.module.css';

const Dialogs = (props) => {
    let clickedDialogId = 14;

    let handler = (id) => {
        clickedDialogId = id;
        props.store.reloadPage();
        console.log(clickedDialogId);
    };
    return(
        <div className={style.dialogsWrapper}>
            <div className={style.dialogsSidebar}>
                <h3>Dialogs</h3>
                <ul>
                    {props.store.getState().dialogs.dialogs.map((dialog) => {
                        return(
                            <li className={style.chat} key={dialog.id} onClick={ () => handler(dialog.id) }><img src={dialog.avatar} className={style.dialogAvatar} alt="avatar"/>{dialog.name}</li>
                        )
                    })}
                </ul>
            </div>
            <DialogPanel
                dialogs={props.store.getState().dialogs}
                clickedDialogId={clickedDialogId}
                profile={props.store.getState().profile}
                addMessage={props.store.addMessage.bind(props.store)}
            />
        </div>
    )
};

export default Dialogs;