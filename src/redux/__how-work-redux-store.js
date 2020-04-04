import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';


const store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hi, how are you?', like: 1},
                {message: 'Today is Sunday!', like: 22},
                {message: 'My name is Dima.', like: 88},
                {message: 'I am ok, and you', like: 14}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Dima',
                    image: 'https://p7.hiclipart.com/preview/129/94/328/computer-icons-avatar-icon-design-male-teacher.jpg'
                },
                {
                    id: 2,
                    name: 'Sasha',
                    image: 'https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png'
                },
                {
                    id: 3,
                    name: 'Vitas',
                    image: 'https://previews.123rf.com/images/lynxtime/lynxtime1612/lynxtime161200131/66830822-human-male-avatar-icon-simple-design-for-web-and-mobile.jpg'
                },
                {
                    id: 4,
                    name: 'Andrew',
                    image: 'https://image.flaticon.com/icons/png/512/194/194938.png'
                },
                {
                    id: 5,
                    name: 'Alex',
                    image: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png'
                },
                {
                    id: 6,
                    name: 'Oleg',
                    image: 'https://cdn4.iconfinder.com/data/icons/men-avatars-icons-set-1/256/21-512.png'
                }
            ],
            messages: [
                {
                    message: 'Hi',
                    sender: 'https://p7.hiclipart.com/preview/129/94/328/computer-icons-avatar-icon-design-male-teacher.jpg',
                    receiver: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                },
                {
                    message: 'How are you?',
                    sender: 'https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png',
                    receiver: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                },
                {
                    message: 'Where are you are?',
                    sender: 'https://previews.123rf.com/images/lynxtime/lynxtime1612/lynxtime161200131/66830822-human-male-avatar-icon-simple-design-for-web-and-mobile.jpg',
                    receiver: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                },
                {
                    message: 'Yooo', sender: 'https://image.flaticon.com/icons/png/512/194/194938.png',
                    receiver: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                },
                {
                    message: 'Aaaaaaa', sender: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png',
                    receiver: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                },
                {
                    message: 'LoooooL',
                    sender: 'https://cdn4.iconfinder.com/data/icons/men-avatars-icons-set-1/256/21-512.png',
                    receiver: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                }
            ],
            newMessageText: ''
        },
        sidebar: {
            onlineFriendsList: [
                {
                    name: 'Anton',
                    img: 'https://p7.hiclipart.com/preview/129/94/328/computer-icons-avatar-icon-design-male-teacher.jpg'
                },
                {
                    name: 'Sten',
                    img: 'https://cdn4.iconfinder.com/data/icons/men-avatars-icons-set-1/256/21-512.png'
                },
                {
                    name: 'Alex',
                    img: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'
                },
                {
                    name: 'John',
                    img: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png'
                }
            ],
        },
    },
    getState() {
        return this._state;
    },

    _callSubscriber(state) {
        console.log('subscribe!');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};

export default store;