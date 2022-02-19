import React, { Component } from 'react';

class NumberOfEvents extends Component {
   state = {
      numberOfEvents: 32,
   }

   handleInputChange = (event) => {
      const number = event.target.value;
      if (number > 0 && number <=32) {
         this.setState({
            numberOfEvents: number,
         });
      } 
   };

   render ( ) {
      return (
         <div className='NumberOfEvents'>
            <p><b>Number of Events: </b></p>
            <input 
            type = "number"
            className='number-of-events'
            value = {this.state.numberOfEvents}
            onChange = {(e) => this.handleInputChange(e)}
            />
            </div>
      );
   }
}

export default NumberOfEvents;