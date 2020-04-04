import React from 'react';
import profileReducer, {addPostActionCreator} from "./profile-reducer";

test('new post incremention', () => {
    let action = addPostActionCreator(`It's new post!!!`);
    let state = {
        posts: [
            {id: 1, message: 'Hi!', likesCount: 11},
            {id: 2, message: 'Hi 2!', likesCount: 2},
            {id: 3, message: 'Hi 3!', likesCount: 14},
            {id: 4, message: 'Hi 4!', likesCount: 6}
        ]
    };
    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});