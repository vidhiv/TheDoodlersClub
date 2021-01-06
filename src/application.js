import React from 'react';

class Application extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            interest: "Drawing for kids",
            showClass: false
        };
    }

    username(e) {
        this.setState({ username: e.currentTarget.value });
    }

    password(e) {
        this.setState({ password: e.currentTarget.value });
    }

    email(e) {
        this.setState({ email: e.currentTarget.value });
    }

    interest(e) {
        this.setState({ interest: e.currentTarget.value });
    }

    applynow() {
        this.setState({ showClass: !this.state.showClass });
    }

    render() {
        let formContents = <> <label>Name: </label>
            <input type="text" name="username" id="username" value={this.state.username} onChange={this.username.bind(this)} required minLength="3" maxLength="20" />
            <label>Email: </label>
            <input type="email" name="emailid" id="emailid" value={this.state.email} onChange={this.email.bind(this)} required minLength="5" maxLength="50" />
            <label>Password: </label>
            <input type="password" name="password" id="password" value={this.state.password} onChange={this.password.bind(this)} required minLength="6" maxLength="10" />
            <label>Interested In: </label>
            <select name="activities" id="activities" onChange={this.interest.bind(this)}>
                <option value="Drawing for kids">Drawing for kids</option>
                <option value="Sketching session">Sketching session</option>
                <option value="Outdoor painting">Outdoor painting</option>
                <option value="Knife painting">Knife painting</option>
                <option value="Other">Other</option>
            </select>
            <button type="button" id="applyNow" onClick={this.applynow.bind(this)}>Apply now!!!</button>
        </>;
        let pagecontent = <form method="POST" className="applicationForm">{formContents}</form>;

        let sectionContents = <section id="ThanksDialog" className={this.state.showClass ? "showSection" : "hiddenSection"}>
            <div id="Dialogdiv">
                <h3>Thank you for applying!!!</h3>
                <p id="ThanksP">
                    <label>Name : {this.state.username}</label>
                    <label>Email : {this.state.email}</label>
                    <label>Interested in : {this.state.interest}</label>
                </p>
                <button type="button" id="closeBox" onClick={this.applynow.bind(this)}>Close</button>
            </div>  
        </section>

        return <main id="applicationForm">
            {pagecontent}
            {sectionContents}
        </main>;
    }
}


export default Application;