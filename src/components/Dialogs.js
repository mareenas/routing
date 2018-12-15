import React from 'react';
import DialogPanel from "./DialogPanel";

const Dialogs = (props) => {
    return(
        <div className="dialogs-wrapper">
            <div className="dialogs-sidebar">
                <h3>Dialogs</h3>
                <ul>
                    {props.dialogs.dialogs.map((dialog) => {
                        return(
                            <li className="chat" key={dialog.id}><img src={dialog.avatar} className="dialog-avatar" alt="avatar"/>{dialog.name}</li>
                        )
                    })}
                </ul>
            </div>
            <DialogPanel dialogs={props.dialogs} chosenDialogIndex={0} profile={props.profile}/>
        </div>
    )
};

export default Dialogs;