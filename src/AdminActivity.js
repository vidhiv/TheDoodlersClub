import React from 'react';
import eventsAdmin from "./eventData.json";

class ManageActivities extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "", 
            description: "",
            dates: "",
            events : eventsAdmin
        };
    }

    nameChange(e){
        this.setState({name: e.currentTarget.value});
    }
    descriptionChange(e){
        this.setState({description: e.currentTarget.value});
    }
    timimngsChange(e){
        this.setState({dates: e.currentTarget.value});
    }

    addEvent() {
        this.setState({events: this.state.events.concat({
            "name" : this.state.name,
            "description" : this.state.description,
            "dates" : this.state.dates,
        })});
    }

    deleteEvent(i) {
        let eventList = this.state.events.filter(function(event, index){
            if(index === i)
                return false;
            else
                return true;
          })
          this.setState({events: eventList});
    }

    render () {
        let pagecontent = <>
            <h2><svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="#2d9284" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 3)"><path d="m8 16c4.4380025 0 8-3.5262833 8-7.96428571 0-4.43800246-3.5619975-8.03571429-8-8.03571429-4.43800245 0-8 3.59771183-8 8.03571429 0 4.43800241 3.56199755 7.96428571 8 7.96428571z"/><path d="m4 8h8"/><path d="m8 12.0563492v-8.0563492z"/></g></svg> Add Activity</h2>
            <div id="addNewEvent">
                <label>Name: </label>
                <input type="text" name="name" id="name" required minLength="5" value={this.state.name} onChange = {this.nameChange.bind(this)} />
                <label>Description: </label>
                <input type="text" name="description" id="description" required minLength="10" value={this.state.description} onChange = {this.descriptionChange.bind(this)}/>
                <label>Dates: </label>
                <input type="text" name="dates" id="dates" required minLength="5" value={this.state.dates} onChange = {this.timimngsChange.bind(this)}/>
                <button type="button" id="addEvent" onClick = {this.addEvent.bind(this)} >Add</button>
            </div>
        </>;

        let that = this;
        let tableRows = this.state.events.map(function(event, index){
            return <tr key={"event" + index} >
                    <td><button type="button" className="deleteRow" onClick = {that.deleteEvent.bind(that, index)}>Delete</button></td>
                    <td>{event.name}</td>
                    <td>{event.description}</td>
                    <td>{event.dates}</td>
                </tr>;
        });
    
        let myTable = <table>
            <caption>Activities Info</caption>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Timimngs</th>
                </tr>
            </thead>
            <tbody id="activitiesBody">
                {tableRows}
            </tbody>
        </table>;
    
        return <main>
            {pagecontent}
            {myTable}
            </main>;
        
    }
}

export default ManageActivities;