import React from 'react';
import {shallow} from 'enzyme';
import NumberOfEvents from '../components/NumberOfEvents';

describe ('<NumberOfEvents /> components', () => {
   let  NumberOfEventsWrapper;
   beforeAll(() => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
   });

   test('render text input', () => {
      expect(NumberOfEventsWrapper.find('.inputNumber')).toHaveLength(1);
   });

   test('render text input correctly', () => {
      const numberOfEvents = NumberOfEventsWrapper.prop('numberOfEvents');
      expect(NumberOfEventsWrapper.find('.number-of-events').prop('value')).toBe(numberOfEvents);
   });
});

