# meet app

The main aim of this project meet app is to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

## USER STORIES
1. USER STORY 
As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

2. USER STORY 
As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
	SCENERIO 1: An event element is collapsed by default
⦁		Given: that a user is on the events page
⦁	 	When: the user did not click or hover on any city
⦁	   	 then:  the event element remain in its initial state(i.e. collapsed).
	SCENARIO 2: User can expand an event to see its details
⦁		Given: a user  is on the event page 
⦁		When: the user clicked or hovered on any event
⦁		then: the event should expand to see details
	SCENARIO 3: User can collapse an event to hide its details		
⦁	Given: a user has accessed the event section successfully to get his event
⦁	when: user clicks on an expanded event, or unhover on the event
⦁	then: the event is collapsed to initial state

3. USER STORY 
As a user, I would like to be able to specify the number of events I want to view in the app, so that I can see more or fewer events in the events list at once.
SCENARIO 1: When user hasn’t specified a number, 32 is the default number	
⦁	Given: a user has not selected the number of event to view
⦁	When: after user has been registered and logged in
⦁	Then: a defualt number of 32 is assigned generically to a registered user
	Scenario 2: User can change the number of events they want to see
⦁		Given: a user want to change the number of event view
⦁		When: a user selects a dropdown and amount of event view they want
⦁		Then: the amount of events they user selected will be displayed on mainpage

4. USER STORY 
As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.	
	SCENARIO 1: Show cached data when there’s no internet connection
⦁		Given: a user has previously accessed events online and is currently offline
⦁		When: app or event page is opened
⦁		Then: stored cached data will be made available to user
	Scenario 2: Show error when user changes the settings (city, time range)
⦁		Given: user is offline 
⦁		When: user tries to change city, time range settings
⦁		Then: show error message

5. USER STORY 
As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.
Scenario 1: Show a chart with the number of upcoming events in each city
⦁	Given: a user is logged in on main page
⦁	When: they want to access upcoming events
⦁	Then: updated event will shown on main page.	

## Key Features
1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. View a chart showing the number of upcoming events by city

## Technical Requirements
● The app will be a React application.
● The app will be built using the TDD technique.
● The app will use the Google Calendar API and OAuth2 authentication flow.
The app will use serverless functions (AWS lambda is preferred) for the authorization
server instead of using a traditional server.
● The app’s code will be hosted in a Git repository on GitHub.
● The app will work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera,
as well as on IE11.
● The app will display well on all screen sizes (including mobile and tablet) widths of
1920px and 320px.
● The app will pass Lighthouse’s PWA checklist.
● The app will work offline or in slow network conditions with the help of a service
worker.
● Users may be able to install the app on desktop and add the app to their home screen
on mobile.
● The app will be deployed on GitHub Pages.
● The API call will use React axios and async/await.
● The app will implement an alert system using an OOP approach to show information to
the user.
● The app will make use of data visualization (recharts preferred).
● The app will be covered by tests with a coverage rate >= 90%.
● The app will be monitored using an online monitoring too

## URL SOURCE
 https://udokailodigwe.github.io/meet