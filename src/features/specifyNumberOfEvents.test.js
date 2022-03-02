import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import {mount} from 'enzyme';
import App from '../components/App';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

//step definition

defineFeature(feature, (test) => {
   let AppWrapper;
   test('When user hasnt specified a number, 32 is the default number.', ({ given, when, then }) => {
      given('the user is on the main page of the app', async () => {
         AppWrapper = await mount (<App />);
      });

      when('the user hasnt specified a number of events', () => {    
         AppWrapper.update();
      });

      then('the default number of displayed events will be 32 and 2 with local test at once', () => {
         expect(AppWrapper.state('numberOfEvents')).toBe(32);

      });
   });

   test('User can change the number of events they want to see.', ({ given, when, then }) => {
      given('the user is on the main page', async() => {
         AppWrapper = await mount (<App />);
      });

      when('the user set a number of events they want to see in the number of events box', () => {
         AppWrapper.update();
         const eventObject = {target: {value: 1}};
         AppWrapper.find('.number-of-events').simulate('change', eventObject);
      });

      then('this number of events will be displayed', () => {
         AppWrapper.update();
         expect(AppWrapper.find('.event')).toHaveLength(2);
      });
   });
});