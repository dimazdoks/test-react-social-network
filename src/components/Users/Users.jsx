import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

function Users(props) {
    return <div>
        <Paginator totalItemsCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   currentPage={props.currentPage}
                   setCurrentPage={props.setCurrentPage}/>

        {props.users.map(u => <User user={u} key={u.id}
                                    followingInProgres={props.followingInProgres}
                                    unfollow={props.unfollow}
                                    follow={props.follow}/>)}
    </div>;
}

export default Users;