import React from 'react';
import Sidebar from "./Sidebar";
import {connect} from "react-redux";


function mapStateToProps(state) {
    return {listOnline: state.sidebar.onlineFriendsList};
}

function mapDispatchToProps(dispatch) {
    return {};
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);
export default SidebarContainer;