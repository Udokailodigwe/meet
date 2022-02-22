import React from 'react';
import {shallow} from 'enzyme';
import NumberOfEvents from '../components/NumberOfEvents';

describe ('<NumberOfEvents /> components', () => {
   let  NumberOfEventsWrapper;
   beforeAll(() => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
   });

   test('render number of event input', () => {
      expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
   });

   test('render number of events', () =>{
      expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1)
   });

   test("render number of events 32 by default", () => {
      expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
   });

   // test("changed number of Event state, when input number is changed by user", () => {
   // const eventObject = { target: { value: 32 } };
   // NumberOfEventsWrapper.find(".number-of-events").simulate("change", eventObject);
   // expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
   // });
});

