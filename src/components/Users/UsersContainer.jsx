import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followUser,
    unfollowUser,
    setCurrentPage,
    toggleFollowingInProgress,
    requestUsers
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {
    getFollowingInProgres,
    getIsFetching,
    getTotalUsersCount,
    getUserCurrentPage, getUsers,
    getUsersPageSize
} from "../../redux/selectors";

class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage = (p) => {
        this.props.getUsers(p, this.props.pageSize);
    };

    render() {
        return this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                             pageSize={this.props.pageSize}
                                                             currentPage={this.props.currentPage}
                                                             setCurrentPage={this.setCurrentPage}
                                                             users={this.props.users}
                                                             unfollow={this.props.unfollowUser}
                                                             follow={this.props.followUser}
                                                             followingInProgres={this.props.followingInProgres}/>


    }
}

function mapStateToProps(state) {

    return {
        users: getUsers(state),
        pageSize: getUsersPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getUserCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgres: getFollowingInProgres(state)
    };
}

let mapDispatchToProps = {
    followUser,
    unfollowUser,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers: requestUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);