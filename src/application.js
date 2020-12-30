import React from 'react';

let formContents = <> <label>Name: </label>
            <input type="text" name="username" id="username" required minLength="3" maxLength="20" />
            <label>Email: </label>
            <input type="email" name="emailid" id="emailid" required minLength="5" maxLength="50" />
            <label>Password: </label>
            <input type="password" name="password" id="password" required minLength="6" maxLength="10" />
            <label>Interested In: </label> 
            <select name="activities" id="activities">
                <option value="Drawing for kids">Drawing for kids</option>
                <option value="Sketching session">Sketching session</option>
                <option value="Outdoor painting">Outdoor painting</option>
                <option value="Knife painting">Knife painting</option>
                <option value="Other">Other</option>
            </select>
            <button type="button" id="applyNow" >Apply now!!!</button>
        </>;
let pagecontent = <form method="POST" className="applicationForm">{formContents}</form>;

function Application() {
    return <main id="applicationForm">
        {pagecontent}
        </main>;

}

export default Application;