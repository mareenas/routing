import React from 'react';
import DialogPanel from "./DialogPanel";
import style from './css/Dialogs.module.css';
import connect from "react-redux/es/connect/connect";

const Dialogs = (props) => {
    return(
        <div className={style.dialogsWrapper}>
            <div className={style.dialogsSidebar}>
                <h3>Dialogs</h3>
                <ul>
                    {props.dialogs.dialogs.map((dialog) => {
                        return(
                            <li className={style.chat} key={dialog.id} onClick={(e) => props.getUserId(dialog)}>
                                <img src={dialog.avatar} className={style.dialogAvatar} alt="avatar"/>{dialog.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
            {props.dialogs.currentDialog ? <DialogPanel clickedDialogId={props.dialogs.currentDialog} /> : undefined }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserId: (dialog) => {
            dispatch({
                type: 'GET_USER_ID',
                id: dialog.id
            })
        }
    }
};

const ConnectedDialogs = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default ConnectedDialogs;