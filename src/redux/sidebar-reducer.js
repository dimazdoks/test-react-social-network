const startState = {
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
};

const sidebarReducer = (state = startState, action) => {
    return state;
};

export default sidebarReducer;