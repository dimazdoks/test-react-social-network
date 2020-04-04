import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

function mapStateToPropsRedirect(state) {
    return {
        isAuth: state.auth.isAuth
    };
}

export const withAuthRedirect = (Component) => {
    function RedirectComponent(props) {
        if (props.isAuth)
            return <Component {...props}/>;
        else
            return <Redirect to='/login' />;
    }

    return connect(mapStateToPropsRedirect)(RedirectComponent);
};