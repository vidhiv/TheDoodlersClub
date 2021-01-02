import React from 'react';
import constants from "./constant.json";

let mainP;
class Logout extends React.Component {

    constructor(props) {
        super(props);
        mainP = props.t;
    }

    componentDidMount() {
        fetch(constants["url"] + '/logout')
            .then(function (response) {
                if (response.status == 200) {
                    console.log("Success");
                    mainP.setState({
                        role: "guest",
                        show: "home",
                        sessionVar: {}
                    });
                } else {    
                    console.log("Failed");
                }
            });
    }

    render() {
        return <main></main>
    }
}

export default Logout;