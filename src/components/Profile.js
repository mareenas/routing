import Moment from "react-moment";
import React from 'react';

const Profile = (props) => {
    return(
        <div className="profile-page">
            <div className="profile-header" />
            <div className="profile-info">
                <div className="profile-img">
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png" alt="avatar"/>
                </div>
                <div className="profile-description">
                    <h3>{props.profile.name}</h3>
                    <div>
                        День рождения: <Moment format="DD/MM/YYYY" unix date={props.profile.dateOfBirth} /> <br/>
                        Город: {props.profile.city} <br/>
                        Образование: {props.profile.education} <br/>
                        Веб-сайт: <a href={props.profile.webSite}>{props.profile.webSite}</a> <br/>
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
                {props.profile.wall.posts.map((post) => {
                    return (
                        <div className="note" key={post.id}>
                            <div className="note-pic">
                                <img
                                    src={props.profile.avatar}
                                    alt=""/>
                            </div>
                            <div className="note-message">{post.text}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Profile;