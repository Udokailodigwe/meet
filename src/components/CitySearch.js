import React, { Component } from 'react';
import '../css/Citysearch.css'
import {InfoAlert} from './Alert';


class CitySearch extends Component {
   state = {
      query: " ",
      suggestions: [ ],
      showSuggestions: undefined,
   }

   handleInputChanged = (event) => {
      const value = event.target.value;
      const suggestions = this.props.locations.filter((location) => {
         return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
      });
      if (suggestions.length === 0) {
         this.setState({
            query: value,
            infoText: 'We can not find the city you are looking for, please try another city.',
         });
      }else {
         return this.setState({
         query: value,
         suggestions,
         infoText: ' '
      });
      }
   };

   handleItemClicked = (suggestion) => {
      this.setState({
         query: suggestion,
         showSuggestions: false
      });
      this.props.updateEvents(suggestion);
   }

   render() {
      return (
         <div className="CitySearch">
            <p className = 'info_alert'>
               <InfoAlert  text={this.state.infoText} />
            </p>
            <p id = 'search_text'>Search for tech events around the world</p>
            <input
               type = 'text'
               className='city'
               value = {this.state.query}
               onChange = {this.handleInputChanged}
               onFocus={()=> {this.setState({showSuggestions: true})}}
               placeholder="Enter a city"
               />
            <ul className='suggestions' 
                  style ={this.state.showSuggestions ? {}: {display: 'none'}}>
               {this.state.suggestions.map((suggestion) => (
                  <li key={suggestion}
                        onClick={() => this.handleItemClicked(suggestion)} 
                        style={{"display":"block"}}>
                     {suggestion}
                  </li>
               ))}
               <li key='all' onClick={() => this.handleItemClicked("all")}>
                  <b >Search for cities</b>
               </li>
            </ul>
         </div>
      );
   }
}

export default CitySearch;