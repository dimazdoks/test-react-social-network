import React, {Suspense} from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import {Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>;
        else
            return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navigation/>

                    <div className="app-wrapper__content">

                        <Suspense fallback={<Preloader />}>
                            <Route path="/profile/:userId?" component={ProfileContainer}/>
                            <Route path="/dialog" component={DialogsContainer}/>
                        </Suspense>

                        <Route path="/users" component={UsersContainer}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>

                        <Route path="/login" component={Login}/>
                    </div>
                </div>
            );
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
