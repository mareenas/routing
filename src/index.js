import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let state = {
    profile: {
        id: 2727,
        name: 'Marina',
        city: 'Minsk',
        dateOfBirth: 543871800,
        education: 'UIHI',
        webSite: 'http://machinae-supremacy.com',
        avatar: "https://marketplace.canva.com/MAB6v7RGMOw/1/thumbnail/canva-robot-electric-avatar-icon-MAB6v7RGMOw.png",
        wall: {
            posts: [
                {
                    id: 576,
                    text: "This is my first post. This is very long post because I wanna check if it will be displayed properly. " +
                        "That's why I write so many words. Not only because I can, but also to make my first post very very long so that it will spread all over my profile page."
                },
                {
                    id: 23,
                    text: "This is second"
                },
                {
                    id: 124,
                    text: "This is third"
                }
            ]
        }
    },
    dialogs: {
        dialogs: [
            {
                id: 14,
                avatar: "https://pbs.twimg.com/profile_images/1049198671810760704/AWwe7Pl0_bigger.jpg",
                name: "Peter The First"
            },
            {
                id: 15,
                avatar: "https://pbs.twimg.com/profile_images/980736422176022528/BCamJJE1_bigger.jpg",
                name: "Nikolay"
            },
            {
                id: 16,
                avatar: "https://pbs.twimg.com/profile_images/1015995274186108928/S1YVRFrP_bigger.jpg",
                name: "Alexander"
            },
            {
                id: 17,
                avatar: "https://pbs.twimg.com/profile_images/993455567984386050/ky3uwskY_bigger.jpg",
                name: "Aleksey"
            },
            {
                id: 18,
                avatar: "https://pbs.twimg.com/profile_images/981522934337597440/7NK_jtTg_bigger.jpg",
                name: "LzheDmitri"
            }
        ],
        messages: [
            {
                id: 465,
                userId: 14,
                text: "Let's go to the mall!",
                myMessage: true
            },
            {
                id: 466,
                userId: 14,
                text: 'Which mall?',
                myMessage: false
            },
            {
                id: 467,
                userId: 14,
                text: 'The nearest one',
                myMessage: true
            },
            {
                id: 468,
                userId: 14,
                text: 'Maybe we shall choose the biggest one?',
                myMessage: false
            },
            {
                id: 469,
                userId: 14,
                text: "It's a good idea",
                myMessage: true
            },
            {
                id: 470,
                userId: 15,
                text: "Hello",
                myMessage: false
            },
            {
                id: 471,
                userId: 15,
                text: "Is anybody here??",
                myMessage: false
            },
        ]
    }
};

ReactDOM.render(<App profile={state.profile} dialogs={state.dialogs}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
