import React, {Component} from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import { getEvents, extractLocations,  checkToken, getAccessToken } from '../api';
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
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
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
        return <div className='App' />;
    return (
      <div className="App">
        <NumberOfEvents
          updateNumberofEvents = {this.updateNumberofEvents}
        />
        <CitySearch 
            locations ={this.state.locations} 
            updateEvents = {this.updateEvents}
        />

        <div className='data-vis-wrapper'>
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

        <div className='event_graph'>Events in each city</div>
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
        <EventList 
            events={this.state.events}
            numberOfEvents={this.state.numberOfEvents}
        />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
              getAccessToken={() => { getAccessToken() }}
        />
      </div>
    );
  }
}

export default App;
