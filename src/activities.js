import React from 'react';
import actimg from "./images/activitiesPage.jpg";

class Activities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [{}]
        };
    }

    componentDidMount() {
        let t = this;
        fetch('./activities/info')
            .then(response => response.json())
            .then(function (data) {
                t.setState({
                    events: data.data
                })
                return data.data;
            });
    }

    render() {

        // Use images in JSX
        let img1 = <img src={actimg} alt="activities page image" />;
        let img1caption = <figcaption>Oil Painting</figcaption>;

        let pagecontent = <>
            <h2><svg height="25" viewBox="0 0 21 15" width="21"><g fill="none" fillRule="evenodd" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8" /><path d="m5.5 9.5 2 2 5-5" /></g></svg> Scheduled Activities</h2>
            <ul>
                <li>Drawing for kids</li>
                <li>Sketching session</li>
                <li>Outdoor painting</li>
            </ul>
            <h2><svg height="25" viewBox="0 0 21 13" width="21"><g fill="none" fillRule="evenodd" transform="translate(2 2)"><path d="m2.5.5h12c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2z" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" /><path d="m.5 4.5h16" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" /><g fill="#2a2e3b"><g><circle cx="8.5" cy="8.5" r="1" /><circle cx="4.5" cy="8.5" r="1" /><circle cx="12.5" cy="8.5" r="1" /></g><g><circle cx="8.5" cy="12.5" r="1" /><circle cx="4.5" cy="12.5" r="1" /><circle cx="12.5" cy="12.5" r="1" /></g></g></g></svg> Upcoming Activities</h2>
            <ul>
                <li>Knife Painting</li>
                <li>Wall Painting</li>
                <li>Nature Drawing</li>
            </ul>
            <figure>{img1}{img1caption}</figure>
            <svg height="25" viewBox="0 0 21 13" width="21"><g fill="none" fillRule="evenodd" stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round" transform="matrix(-1 0 0 1 20 2)"><path d="m8.5 2.56534572h2c3.3137085 0 6 2.6862915 6 6v1.93465428c0 3.3137085-2.6862915 6-6 6h-2c-3.3137085 0-6-2.6862915-6-6v-1.93465428c0-3.3137085 2.6862915-6 6-6z" /><path d="m3.94265851-.12029102c-1.05323083.28505997-1.86575682 1.17688618-1.86575682 2.30840383 0 1.16606183.73081563 2.21070886 1.78973019 2.50733508" transform="matrix(.62932039 .77714596 -.77714596 .62932039 2.893856 -1.491094)" /><path d="m16.9295345-.10708618c-1.0898445.26224883-1.9419712 1.17003523-1.9419712 2.3284815 0 1.16644061.7312905 2.21138754 1.7907622 2.50762392" transform="matrix(-.62932039 .77714596 .77714596 .62932039 24.205765 -11.545558)" /><path d="m9.5 5.5v4h-3.5" /><path d="m15 15 2 2" /><path d="m2 15 2 2" transform="matrix(-1 0 0 1 6 0)" /></g></svg> Check here for frequent updates
        </>;

        let myTable;

        let tableRows = this.state.events.map(function (event, index) {
            return <tr key={"event" + index}><td>{event.name}</td>
                <td>{event.description}</td>
                <td>{event.dates}</td></tr>;
        });

        myTable = <table>
            <caption>Activities Info</caption>
            <thead>
                <tr>
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
            <h3> -- Work in progeress --</h3>
            {myTable}
            {pagecontent}
        </main>;
    }
}

export default Activities;