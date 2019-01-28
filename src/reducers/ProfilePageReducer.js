import {ADD_STATUS} from "../actions";

let initialState = {
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
        ]
    }
};

export const profilePageReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case ADD_STATUS:
            newState.wall.posts.push(action.status);
            return newState;
        default:
            return state;
    }
};