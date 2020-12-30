import React from "react";
import ReactDOM from "react-dom";
import Menu from "./menu";
import Home from "./home";
import Login from "./login";
import Application from "./application";
import Activities from "./activities";
import ManageActivities from "./AdminActivity";
import UnderConstruction from "./UnderConstruction";
import Logout from "./Logout";

class App extends React.Component {
    constructor(props) {
        super(props);
        // Application state variables: *role* is for RBAC == "role based access control" we have "guest", "user", and "admin"
        this.state = {
            role: "guest",
            show: "home",
            sessionVar : {}
        };
    }

    loadComponent (event, componentShow) { // loadcomponent accepts parameter and sets the value of "state.show" using setState()
        this.setState({ show: componentShow });
    }

    render() {
        let content = null;
        let heading = null;
        switch (this.state.show) {
            case "home":
                content = <Home />;
                heading = "The Doodlers Club!";
                break;
            case "login":
                content = <Login t={this} />;
                heading = "Login";
                break;
            case "activities":
                content = <Activities />;
                heading = "Activities to engage in!";
                break;
            case "apply":
                content = <Application />;
                heading = "Apply";
                break;
            case "manageact":
                content = <ManageActivities />;
                heading = "Activities Management";
                break;
            case "logout":
                content = <Logout t={this} />;
                heading = "Logout";
                break;
            default:
                content = <UnderConstruction />;
                heading = "OOPS!"
        }
        // statements/logic to set the content variable based on state
        return ( // when calling the menu component, pass the loadComponent function as parameter using bind
            <>
                <Menu heading={heading} user={this.state.role} showmenu={this.state.show} sessionVar={this.state.sessionVar} loadingcomp={this.loadComponent.bind(this)} />
                {content}
            </>
        );
    }
}
// Now rendering the App component!
ReactDOM.render(<App />, document.getElementById("root"));

// // Create contents using imported Menu
// let contents = <><Menu heading = "Apply" /> <Application /></>; 
// // let contents = <><Menu /><Home /></>;

// ReactDOM.render(contents, document.getElementById("root"));