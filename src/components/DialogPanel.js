import React, {Component} from 'react';

class DialogPanel extends Component {
    render() {
        let user = this.props.dialogs.dialogs[this.props.chosenDialogIndex];
        let chosenMessages = this.props.dialogs.messages.filter((message) => {return message.userId === user.id});
        let messages = chosenMessages.map((message) => {
            return <div className="message-wrapper">
                <div className="userpic">
                    {message.myMessage ? <img src={this.props.profile.avatar} alt="" /> : <img src={user.avatar} alt="" />}
                    <div className="dialog-name-wrapper">
                        {message.myMessage ? this.props.profile.name : user.name }
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
    }
}

export default DialogPanel;