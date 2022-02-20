import React, { Component } from 'react';

class Event extends Component {
   render() {
      return (
         <div>
            <p>{{this.props.event.summary}}</p>
         </div>
      );
   }
}

export default Event;