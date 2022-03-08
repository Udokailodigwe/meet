import React, { Component } from 'react';

class Alert extends Component {
   constructor(props) {
      super(props);
      this.color = null;
   }

   getStyle = () => {
      return {
         color : this.color,
      };
   }

   render () {
      return (
            <p style={this.getStyle()}>{this.props.text}</p>
         
      );
   }
}

export class InfoAlert extends Alert {
   constructor(props){
      super(props);
      this.color = 'skyblue';
   }
}

export class ErrorAlert extends Alert {
   constructor (props) {
      super(props);
      this.color = 'red';
   }
}

export class WarningAlert extends Alert {
   constructor(props){
      super(props);
      this.color = 'khaki';
   }
}
