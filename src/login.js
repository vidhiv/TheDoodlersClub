import React from 'react';

let formContents = <> <label>Email: </label>
            <input type="email" name="username" id="username" required /><br/><br/>
            <label>Password: </label>
            <input type="password" name="password" id="password" required /><br/><br/>
            <button type="button" id="clickLogin" >Login</button>
        </>;
let pagecontent = <form method="POST" className="loginForm">{formContents}</form>;

function Login() {

    return <main id="LoginPage">
        {pagecontent}
        </main>;

}

export default Login;