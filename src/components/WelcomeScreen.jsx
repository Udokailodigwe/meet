import React from "react";
import '../css/WelcomeScreen.css';

function WelcomeScreen(props) {
   return props.showWelcomeScreen === undefined ?
      (<div className="WelcomeScreen">
            <h1 className="welcome_text">Welcome to the Meet app</h1>
               <h4>
                  Log in to see upcoming events around the world for full-stack developers
               </h4>
                        <div class="button_cont" align="center">
                           <img
                              class="google-icon"
                              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                              alt="Google sign-in"
                           />
                        <button onClick={() => { props.getAccessToken() }}
                           rel="nofollow noopener"
                           class="btn-text"
                        >
                           <b>Sign in with google</b>
                        </button>
                        <div className="createGoogleAccount">
            <p className="sign_in-text">Need a Google account to sign in?<br></br> 
            Create one <a href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp">here!</a>
            </p>
                        </div>
                        </div>
                     <a
                        href="https://udokailodigwe.github.io/meet/privacy.html"
                        rel="nofollow noopener"
                        style={{textDecoration: 'none'}}
                        className = 'privacy'
                     >
                        Privacy policy
                     </a>
                  </div>
                  )
                  : null
   }
export default WelcomeScreen;

