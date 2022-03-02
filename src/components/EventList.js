import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Event from './Event';

import '../css/Eventlist.css';

class EventList extends Component {
   render() {
      const {events} = this.props;
      return (
      <Row className="EventList">
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