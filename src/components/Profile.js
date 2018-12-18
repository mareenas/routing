import Moment from "react-moment";
import React from 'react';
import style from './css/Profile.module.css';

const Profile = (props) => {
    let addStatus = props.addStatus;

    let getStatusText = () => {

        let allIds = props.profile.wall.posts.map((post) => {
            return post.id;
        });
        let idsSorted = allIds.sort((a, b) => { return a - b; });
        let nextId = idsSorted.pop() + 1;
        let newStatus = {
            id: nextId,
            text: document.querySelector("#post").value
        };
        if(newStatus.text !== "") {
            addStatus(newStatus);
        }
    };

    return(
        <div className={style.profilePage}>
            <div className={style.profileHeader} />
            <div className={style.profileInfo}>
                <div className={style.profileImg}>
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png" alt="avatar"/>
                </div>
                <div className={style.profileDescription}>
                    <h3>{props.profile.name}</h3>
                    <div>
                        День рождения: <Moment format="DD/MM/YYYY" unix date={props.profile.dateOfBirth} /> <br/>
                        Город: {props.profile.city} <br/>
                        Образование: {props.profile.education} <br/>
                        Веб-сайт: <a href={props.profile.webSite}>{props.profile.webSite}</a> <br/>
                    </div>
                </div>
            </div>
            <div className={style.notesWrapper}>
                <h3>Мои записи</h3>
                <form>
                    <textarea name="" id="post" placeholder="Что у вас нового..." className={style.placeholderStyling} />
                    <div className={style.submitButtonStyling}>
                        <input type="button" value="Отправить" onClick={getStatusText}/>
                    </div>
                </form>
            </div>
            <div className={style.notesContainer}>
                {props.profile.wall.posts.map((post) => {
                    return (
                        <div className={style.note} key={post.id}>
                            <div className={style.notePic}>
                                <img
                                    src={props.profile.avatar}
                                    alt=""/>
                            </div>
                            <div>{post.text}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Profile;