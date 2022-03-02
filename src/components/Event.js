import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdOutlinePlace  } from 'react-icons/md';
import Moment from "react-moment";


class Event extends Component {
   state = {
      collapsed: true,
      buttonText: 'See More'
   };

   eventDetails = () => {
      this.setState({
         collapsed: !this.state.collapsed,
         buttonText: this.state.collapsed ? 'See Less' : 'See More',         
      });
   };

   render() {
      const { event} = this.props;
      return (
         <Card className='event'>
            <Card.Body>
            <div>
               <Card.Title className='event_summary'>{event.summary}</Card.Title>
                  <Card.Text className='even_date'><FaRegCalendarAlt/><Moment format='DD.MM.YYYY HH:MM'>{event.start.dateTime}</Moment>o'Clock</Card.Text>
                  <Card.Text className='event_location'><MdOutlinePlace />{event.location}</Card.Text>
                  <Card.Text className='event_time'>Time Zone: {event.start.timeZone}</Card.Text>
            </div>
            {/* collapse data */}
            {!this.state.collapsed && (
            <div className='event_description' >
               <Card.Subtitle>Description:</Card.Subtitle>
               <Card.Text>{event.description}</Card.Text>
            </div>
            )}
            <Button  className="details_button" onClick={this.eventDetails}>
               {this.state.buttonText} 
            </Button>
            </Card.Body>
         </Card>
      );
   }
}
export default Event;