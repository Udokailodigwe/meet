import React, {Component} from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations,  checkToken, getAccessToken } from '../api';
import '../css/App.css';
import '../css/nprogress.css';
import WelcomeScreen from './WelcomeScreen';


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
