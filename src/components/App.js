import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import { getEvents, extractLocations,  checkToken, getAccessToken} from '../api';
import '../css/App.css';
import '../css/nprogress.css';
import WelcomeScreen from './WelcomeScreen';
import {
  ScatterChart,
  Scatter,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import {Accordion} from 'react-bootstrap';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';





class App extends Component{
  state = {
    events: [ ],
    locations: [ ],
		numberOfEvents: 32,
    location: 'all',
    showWelcomeScreen: undefined

  }

 async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    // this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
              this.setState({ showWelcomeScreen: true });

        }
      });
    } 
  }

componentWillUnmount() {
  this.mounted = false;
}

updateEvents = (location, eventCount) => {
  this.mounted = true;
  getEvents().then((events) => {
    const locationEvents = location === "all"
      ?events 
      :events.filter((event) => event.location === location);
    if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
      });
    }
  });
};

updateNumberofEvents = (eventNumbers) => {
  this.setState({
    numberOfEvents: eventNumbers
  });
  this.updateEvents(this.state.location, eventNumbers);
};

getData = () => {
  const {locations, events} = this.state;
  const data =locations.map((location) => {
    const number = events.filter((event) => 
      event.location === location).length
      const city = location.split(',').shift()
      return {city, number}
  })
return data;
}

render() {
    if( this.state.showWelcomeScreen === undefined) 
        return <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
              getAccessToken={() => { getAccessToken() }}
        />;
    return (
      <div className="App">
        <h1>MEET APP</h1>
        <CitySearch 
            locations ={this.state.locations} 
            updateEvents = {this.updateEvents}
        />
        <NumberOfEvents
          updateNumberofEvents = {this.updateNumberofEvents}
        />
        <Accordion flush>
          <div className='data-vis-wrapper'>
          <AccordionItem eventKey="0">
            <Accordion.Header>Percentage of Eventgenres</Accordion.Header>
              <Accordion.Body>
                <EventGenre events={this.state.events}/>
              </Accordion.Body>
          </AccordionItem>
        <AccordionItem eventKey="1">
            <Accordion.Header>Events per Location</Accordion.Header>
              <Accordion.Body>
                  <ResponsiveContainer height = {400}>
                  <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20,}}>
                  <CartesianGrid />
                  <XAxis type="category" dataKey="city" name="city" />
                  <YAxis 
                    allowDecimals={false} 
                    type="number" 
                    dataKey="number" 
                    name="number of events" 
                  />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter data={this.getData()} fill="#ebe3c0" />
                  </ScatterChart>
                  </ResponsiveContainer>
              </Accordion.Body>
          </AccordionItem>
        </div>
      </Accordion>

      <div className='data-vis-wrapper2'>
        <EventGenre events={this.state.events}/>

        <ResponsiveContainer height = {400}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20,}}>
            <CartesianGrid />
            <XAxis type="category" dataKey="city" name="city" />
            <YAxis 
                allowDecimals={false} 
                type="number" 
                dataKey="number" 
                name="number of events" 
                />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#ffd700" />
          </ScatterChart>
        </ResponsiveContainer>
        </div>
        <EventList 
            events={this.state.events}
            numberOfEvents={this.state.numberOfEvents}
        />
      </div>
    );
  }
}

export default App;
