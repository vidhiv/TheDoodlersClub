import React from 'react';

function Menu(props) {

    function checkActive(name) {
        let classAppend = (name == props.showmenu)? "active" : "";
        return classAppend;
    }

    let menucontent;
    let home = <li className = {checkActive("home")} onClick={() => props.loadingcomp(null, "home")}><a>Home</a></li>;
    let login = <li className = {checkActive("login")} onClick={() => props.loadingcomp(null, "login")}><a>Login</a></li>;
    let activities = <li className = {checkActive("activities")} onClick={() => props.loadingcomp(null, "activities")}><a>Activities</a></li>;
    let apply = <li className = {checkActive("apply")} onClick={() => props.loadingcomp(null, "apply")}><a>Apply Now</a></li>;
    let profile = <li className = {checkActive("profile")} onClick={() => props.loadingcomp(null, "profile")}><a>Profile</a></li>;
    let logout = <li className = {checkActive("logout")} onClick={() => props.loadingcomp(null, "logout")}><a>Logout</a></li>;
    let users = <li className = {checkActive("users")} onClick={() => props.loadingcomp(null, "users")}><a>Users</a></li>;
    let manageact = <li className = {checkActive("manageact")} onClick={() => props.loadingcomp(null, "manageact")}><a>Manage Activities</a></li>;

    switch(props.user) {
        case "user" :
            menucontent = <ul>{home}{activities}{profile}{logout}</ul>;
            break;
        case "guest" :
            menucontent = <ul>{home}{login}{activities}{apply}</ul>;
            break;
        case "admin" :
            menucontent = <ul>{home}{activities}{users}{manageact}{logout}</ul>;
            break;
                    
    }

    let menu = <nav>{menucontent}</nav>;
    return <header>
        {menu}
        <h1>{props.heading}</h1>
    </header>;
}

export default Menu;