import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Event from './Event';
import { WarningAlert } from './Alert';

import '../css/Eventlist.css';

class EventList extends Component {  

render() {
      const {events} = this.props;
      return (
      <Row className="EventList">
            {events.length >= 1 &&
               <p className='warning_text'>
               <WarningAlert  text='Most displayed events will soon be, or already outdated! '/>
               </p>
            }
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