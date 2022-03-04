import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Event from './Event';

import '../css/Eventlist.css';

class EventList extends Component {
   render() {
      const {events} = this.props;
      return (
      <Row className="EventList">
         {events.length < 1 && 
            <div>
               <h2 id= 'event_load'>Waiting for events...</h2>
               <i  id= 'event_load'>
               (Please note, events won't display if amount of event input is less than 1)
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