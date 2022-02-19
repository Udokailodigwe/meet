import React from 'react';
import {shallow} from 'enzyme';
import NumberOfEvents from '../components/NumberOfEvents';

describe ('<NumberOfEvents /> components', () => {
   let  NumberOfEventsWrapper;
   beforeAll(() => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
   });

   test('render text input', () => {
      expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
   });
});

