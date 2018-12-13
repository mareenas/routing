import React, {Component} from 'react';
import DialogPanel from "./DialogPanel";

class Dialogs extends Component {
    render() {
        return(
            <div className="dialogs-wrapper">
                <div className="dialogs-sidebar">
                    <h3>Dialogs</h3>
                    <ul>
                        {this.props.dialogs.dialogs.map((dialog) => {
                            return(
                                <li className="chat" key={dialog.id}><img src={dialog.avatar} className="dialog-avatar" alt="avatar"/>{dialog.name}</li>
                            )
                        })}
                    </ul>
                </div>
                <DialogPanel dialogs={this.props.dialogs} chosenDialogIndex={0} profile={this.props.profile}/>
            </div>
        )
    }
}

export default Dialogs;