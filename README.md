# meet app

The main aim of this project meet app is to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## USER STORIES
**USER STORY 1** </br>
As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

**USER STORY 2** </br>
As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.</br>
	SCENERIO 1: An event element is collapsed by default
   </br>
⦁		Given: that a user is on the events page </br>
⦁	 	When: the user did not click or hover on any city </br>
⦁	   then:  the event element remain in its initial state (i.e. collapsed).</br>
	SCENARIO 2: User can expand an event to see its details </br>
⦁		Given: a user  is on the event page  </br>
⦁		When: the user clicked or hovered on any event</br>
⦁		then: the event should expand to see details</br>
	SCENARIO 3: User can collapse an event to hide its details	</br>	
⦁	Given: a user has accessed the event section successfully to get his event </br>
⦁	when: user clicks on an expanded event, or unhover on the event</br>
⦁	then: the event is collapsed to initial state</br>

**USER STORY 3** 
As a user, I would like to be able to specify the number of events I want to view in the app, so that I can see more or fewer events in the events list at once. </br>
SCENARIO 1: When user hasn’t specified a number, 32 is the default number	</br>
⦁	Given: a user has not selected the number of event to view</br>
⦁	When: after user has been registered and logged in</br>
⦁	Then: a defualt number of 32 is assigned generically to a registered user</br>
	Scenario 2: User can change the number of events they want to see</br>
⦁		Given: a user want to change the number of event view</br>
⦁		When: a user selects a dropdown and amount of event view they want</br>
⦁		Then: the amount of events they user selected will be displayed on mainpage</br>

**USER STORY 4** </br>
As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.	</br>
	SCENARIO 1: Show cached data when there’s no internet connection 
   </br>
⦁		Given: a user has previously accessed events online and is currently offline</br>
⦁		When: app or event page is opened</br>
⦁		Then: stored cached data will be made available to user</br>
	Scenario 2: Show error when user changes the settings (city, time range)</br>
⦁		Given: user is offline </br>
⦁		When: user tries to change city, time range settings</br>
⦁		Then: show error message</br>

**USER STORY 5** </br>
As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.</br>
Scenario 1: Show a chart with the number of upcoming events in each city</br>
⦁	Given: a user is logged in on main page</br>
⦁	When: they want to access upcoming events</br>
⦁	Then: updated event will shown on main page.	</br>

## Key Features
1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. View a chart showing the number of upcoming events by city

## Technical Requirements
● The app will be a React application. </br>
● The app will be built using the TDD technique.</br>
● The app will use the Google Calendar API and OAuth2 authentication flow.</br>
● The app will use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.</br>
● The app’s code will be hosted in a Git repository on GitHub.</br>
● The app will work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.</br>
● The app will display well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.</br>
● The app will pass Lighthouse’s PWA checklist.</br>
● The app will work offline or in slow network conditions with the help of a service worker.</br>
● Users may be able to install the app on desktop and add the app to their home screen on mobile.</br>
● The app will be deployed on GitHub Pages.</br>
● The API call will use React axios and async/await.</br>
● The app will implement an alert system using an OOP approach to show information to the user.</br>
● The app will make use of data visualization (recharts preferred).</br>
● The app will be covered by tests with a coverage rate >= 90%.</br>
● The app will be monitored using an online monitoring too</br>

## URL SOURCE
 https://udokailodigwe.github.io/meet