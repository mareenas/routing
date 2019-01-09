import React from 'react';
import DialogPanel from "./DialogPanel";
import style from './css/Dialogs.module.css';
import {guid} from "../utils";
import connect from "react-redux/es/connect/connect";

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
            <DialogPanel clickedDialogId={14} />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const ConnectedDialogs = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default ConnectedDialogs;