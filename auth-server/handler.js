const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar("v3");

//set access levels 
const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"]; //readonly

//require credentials to access calender
const credentials = {
  client_id: process.env.CLIENT_ID,
  project_id: process.env.PROJECT_ID,
  client_secret: process.env.CLIENT_SECRET,
  calendar_id: process.env.CALENDAR_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  redirect_uris: ["https://Udokailodigwe.github.io/meet/"],
  javascript_origins: ["https://Udokailodigwe.github.io", "http://localhost:3000"],
};

const { client_secret, client_id, redirect_uris, calendar_id } = credentials;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

//generate a url so users can login with google to see calender, and they also receive code as url parameter
module.exports.getAuthURL = async ()=> {
  //scopes array passed to the scope option. and shown to user when consent screen is displayed to them
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      authUrl:authUrl,
    }),
  };
};

//get access token 
module.exports.getAccessToken = async (event) => {
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  //decode the authorization extracted from the url query
  const code = decodeURIComponent(`${event.pathParameters.code}`);

      return new Promise ((resolve, reject) => {
        /**
     *  Exchange authorization code for access token with a “callback” after the exchange,
     *  The callback in this case is an arrow function with the results as parameters: “err” and “token.”
     */
          oAuth2Client.getToken(code, (err, token) => {
            if(err) {
              return reject(err);
            }
            return resolve(token);
          });
      })
      .then(token => {
        //respond with OAuth token
        return{
          statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(token),
        };
      })
      .catch (err => {
        //handle error
        console.error(err);
        return{
          statusCode: 500,
          body:JSON.stringify(err),
        };
      });
};

module.exports.getCalendarEvents = async (event) => {
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  //decode the authorization extracted from the url query
  const access_token = decodeURIComponent(`${event.pathParameters.access_token}`);
    oAuth2Client.setCredentials({ access_token });


  return new Promise (function (resolve, reject) {

    calendar.events.list(
      {
        calendarId: calendar_id,
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: "startTime",
      },
      (error, response) => {
        if (error) {
          reject (error);
        }else {
          resolve (response);
        }
      }
    );
  })
  .then (result => {
    return {
      statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({events: result.data.items})
    };
  })
  .catch (error => {
        //handle error
        console.error(error);
        return{
          statusCode: 500,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(error),
        };
      });
}