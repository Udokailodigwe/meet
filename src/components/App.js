import React, {Component} from 'react';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from '../api';
import '../css/App.css';
import '../css/nprogress.css';

class App extends Component{
  state = {
    events: [ ],
    locations: [ ],
		numberOfEvents: 32,
    location: 'all',
  }

componentDidMount () {
  this.mounted = true;
  getEvents().then((events) => {
    if (this.mounted) {
      this.setState({ 
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
      });
    }   
  });
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
    return (
      <div className="App">
        <NumberOfEvents
          updateNumberofEvents = {this.updateNumberofEvents}
        />
        <CitySearch 
            locations ={this.state.locations} 
            updateEvents = {this.updateEvents}/>
        <EventList 
            events={this.state.events}
            numberOfEvents={this.state.numberOfEvents}
            />
      </div>
    );
  }
}

export default App;
