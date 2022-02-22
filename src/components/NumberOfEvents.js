import React, { Component } from 'react';

class NumberOfEvents extends Component {
   state = {
      numberOfEvents: 32,
      message: ' ',
   }



handleInputChange = (event) => {
   this.setState({
      numberOfEvents: event.target.value,
   });
   this.props.updateNumberofEvents(event.target.value);
};


   // handleInputChange = (event) => {
   //    const number = event.target.value;
   //    if (number < 1 && number > 32) {
   //       this.setState({
   //          message: 'please choose between 1 and 32',
   //       });
   //       this.props.updateNumberofEvents(32);
   //    } else {
   //       this.setState({
   //          numberOfEvents: number,
   //          message: ' ',
   //       });
   //    }
   //    this.props.updateNmuberOfEvents(event.target.value);
   // };

   render ( ) {
      return (
         <div className='NumberOfEvents'>
            <p><b>Number of Events: </b></p>
            <input 
            type = 'number'
            className='number-of-events'
            value = {this.state.numberOfEvents}
            onChange = {this.handleInputChange}
            />
            </div>
      );
   }
}

export default NumberOfEvents;