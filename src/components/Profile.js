import Moment from "react-moment";
import React, {Component} from 'react';

class Profile extends Component {
    render() {
        return(
            <div className="profile-page">
                <div className="profile-header" />
                <div className="profile-info">
                    <div className="profile-img">
                        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png" alt="avatar"/>
                    </div>
                    <div className="profile-description">
                        <h3>{this.props.profile.name}</h3>
                        <div>
                            День рождения: <Moment format="DD/MM/YYYY" unix date={this.props.profile.dateOfBirth} /> <br/>
                            Город: {this.props.profile.city} <br/>
                            Образование: {this.props.profile.education} <br/>
                            Веб-сайт: <a href={this.props.profile.webSite}>{this.props.profile.webSite}</a> <br/>
                        </div>
                    </div>
                </div>
                <div className="notes-wrapper">
                    <h3>Мои записи</h3>
                    <form>
                        <textarea name="" id="" placeholder="Что у вас нового..." style={{padding: '5px', width: "98%", height: '50px'}} />
                        <div style={{textAlign: 'right'}}>
                            <input type="button" value="Отправить"/>
                        </div>
                    </form>
                </div>
                <div className="notes-container">
                    {this.props.profile.wall.posts.map((post) => {
                        return (
                            <div className="note" key={post.id}>
                                <div className="note-pic">
                                    <img
                                        src={this.props.profile.avatar}
                                        alt=""/>
                                </div>
                                <div className="note-message">{post.text}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Profile;