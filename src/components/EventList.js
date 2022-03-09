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
            <p className='warning_text'>
            {!navigator.online ?
               (<WarningAlert  text='You are currently offline! Displayed events might be out of date!'/>) : (<WarningAlert text=' '/>)
            }</p>
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