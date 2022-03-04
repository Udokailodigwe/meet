import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Event from './Event';

import '../css/Eventlist.css';

class EventList extends Component {
   render() {
      const {events} = this.props;
      return (
      <Row className="EventList">
         {events.length === 0 && 
            <div>
               <h2>Fetching events...</h2>
               <i>
               (Please note, events won't display if number of event input is 0
               </i>
            </div>}
         {events.map((event) => (
            <Col className='col' key={event.id}> 
               <Event  event={event} />
            </Col>
         ))}
      </Row>
      );
   }
}

export default EventList;