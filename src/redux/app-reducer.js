import {getMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'react-learn/app/INITIALIZED-SUCCESS';

let startState = {
    initialized: false
};

const appReducer = (state = startState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promises =  dispatch(getMe());
    Promise.all([promises])
        .then(() => {
            dispatch(initializedSuccess());
        });
};

export default appReducer;