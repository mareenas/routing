import React from 'react';
import DialogPanel from "./DialogPanel";
import style from './css/Dialogs.module.css';

const Dialogs = (props) => {
    return(
        <div className={style.dialogsWrapper}>
            <div className={style.dialogsSidebar}>
                <h3>Dialogs</h3>
                <ul>
                    {props.dialogs.dialogs.map((dialog) => {
                        return(
                            <li className={style.chat} key={dialog.id}><img src={dialog.avatar} className={style.dialogAvatar} alt="avatar"/>{dialog.name}</li>
                        )
                    })}
                </ul>
            </div>
            <DialogPanel dialogs={props.dialogs} chosenDialogIndex={0} profile={props.profile}/>
        </div>
    )
};

export default Dialogs;