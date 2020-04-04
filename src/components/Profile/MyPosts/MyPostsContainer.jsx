import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreator(text));
        }
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;