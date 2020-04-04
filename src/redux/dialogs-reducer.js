const ADD_MESSAGE = 'react-learn/dialogs/ADD-MESSAGE';

const imgUrl = 'https://p7.hiclipart.com/preview/129/94/328/computer-icons-avatar-icon-design-male-teacher.jpg';

const startState = {
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
    ]
};

const dialogsReducer = (state = startState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newItem = {
                message: action.newMessageBody,
                sender: imgUrl,
                receiver: imgUrl
            };
            return {
                ...state,
                messages: [...state.messages, newItem]
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});
export default dialogsReducer;