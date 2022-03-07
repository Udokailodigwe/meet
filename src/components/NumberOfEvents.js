import React, { Component } from 'react';
import {ErrorAlert} from './Alert';

import '../css/Numberofevents.css';

class NumberOfEvents extends Component {
   state = {
      numberOfEvents: 32
   }

handleInputChange = (event) => {
   const number = event.target.value;
   if (number > 0 && number < 33) {
      this.setState({
         numberOfEvents: number,
         errorMessage: ' '
      });
      this.props.updateNumberofEvents (number);
   }else {
      this.setState({
         errorMessage: 'Please choose between number 1 to 32 only! '
   });
      this.props.updateNumberofEvents(32);
   }
};

render ( ) {
      return (
         <div>
            <div className='NumberOfEvents'>
                  <p id='search_number'>Select the amount of events to be shown </p>
                  <input 
               type = 'number'
               className='number-of-events'
               value = {this.state.numberOfEvents}
               onChange = {this.handleInputChange}
               />
            </div>
            <p className='error_text'>
               <ErrorAlert className='error_text'  text={this.state.errorMessage} />
            </p>
            </div>
      );
   }
}

export default NumberOfEvents;