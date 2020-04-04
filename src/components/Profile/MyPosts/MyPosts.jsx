import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControl";

const MyPosts = (props) => {
    let postsItems = props.posts.map(p => <Post message={p.message} likesCount={p.like}/>);

    let addNewPost = (value) => {
        props.addPost(value.newPostBody);
    };

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>

            <AddMyPostReduxFrom onSubmit={addNewPost}/>

            <div className={s.posts}>
                {postsItems}
            </div>
        </div>
    );
};

const maxLength50 = maxLengthCreator(50);

const AddMyPostFrom = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component={Textarea} placeholder={'write some text'}
                           name={'newPostBody'} validate={[required, maxLength50]}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    );
};

const AddMyPostReduxFrom = reduxForm({form: 'posts'})(AddMyPostFrom);
export default MyPosts;