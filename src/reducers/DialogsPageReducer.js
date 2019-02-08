import {ADD_MESSAGE, GET_USER_ID} from "../actions";

let initialState = {
    currentDialog: null,
    dialogs: [
        {
            id: 14,
            avatar: "https://pbs.twimg.com/profile_images/431048977773903872/PWL1bZQb_bigger.png",
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
            avatar: "https://pbs.twimg.com/profile_images/1086716345482391553/ucOUkRZe_bigger.jpg",
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
};

export const dialogsPageReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case ADD_MESSAGE:
            newState.messages.push(action.message);
            return newState;
        case GET_USER_ID:
            return {
                ...state,
                currentDialog: action.id
            };
        default:
            return state;
    }
};