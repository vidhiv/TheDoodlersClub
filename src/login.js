import React from 'react';

let mainPage;
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "", //testing@mocha.com / admin - vidhi@mocha.com
            password: "", //mochachai
            msg : ""
        };
        mainPage = props.t;
    }

    username(e) {
        this.setState({ username: e.currentTarget.value });
    }

    password(e) {
        this.setState({ password: e.currentTarget.value });
    }

    checkLogin() {
        let t = this;
        fetch('./login', {
            method: 'POST',
            body: JSON.stringify({
                "email": this.state.username,
                "password": this.state.password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(function (response) {
                if (response.status == 200) {
                    response.json().then(function (data) {
                        data = data.data;
                        mainPage.setState({
                            role: data.role,
                            show: "home",
                            sessionVar: data
                        });
                    });
                } else {
                    t.setState({
                        msg : "User/Password Error"
                    })
                }
            });
    }

    render() {
        let formContents = <> <label>Email: </label>
            <input type="email" name="username" id="username" value={this.state.username} onChange={this.username.bind(this)} required /><br /><br />
            <label>Password: </label>
            <input type="password" name="password" id="password" value={this.state.password} onChange={this.password.bind(this)} required /><br /><br />
            <button type="button" id="clickLogin" onClick={this.checkLogin.bind(this)}>Login</button>
            <label className ="checkResponse">{this.state.msg}</label>
        </>;
        let pagecontent = <form method="POST" className="loginForm">{formContents}</form>;

        return <main id="LoginPage">
            {pagecontent}
        </main>;
    }
}

export default Login;