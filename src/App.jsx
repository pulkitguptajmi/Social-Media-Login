import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (
    <main>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <link rel="stylesheet" href="./App.css"></link>
        </head>
        <body>
          <h2>Pesto Assignment :: Login Form </h2>
          <p>Resize the browser window to see the responsive effect. When the screen is less than 500px wide, make the two columns stack on top of each other instead of next to each other.</p>

          <div class="container">
            <div class="row">
              <h2 style={{ textAlign: "center" }}>Social Media or Manual login? Your choice :)</h2>
              <div class="vl">
                <span class="vl-innertext">OR</span>
              </div>

              <div class="col">
                <a href="#" class="fb btn">
                  <i class="fa fa-facebook fa-fw"></i> <span tyle={{ textAlign: "center" }} >Login with Facebook</span>
                </a>
                <a href="#" class="twitter btn">
                  <i class="fa fa-twitter fa-fw"></i> <span tyle={{ textAlign: "center" }} >Login with Twitter</span>
                </a>
                <a href="#" class="google btn"><i class="fa fa-google fa-fw">
                </i> <span tyle={{ textAlign: "center" }} >Login with Google</span>
                </a>
              </div>

              <div class="col">
                <div class="hide-md-lg">
                  <p>Or sign in manually:</p>
                </div>

                <input type="text" name="username" placeholder="Your Username" required></input>
                <input type="password" name="password" placeholder="Your Password" required></input>
                <input type="submit" value="Login !"></input>
              </div>

            </div>
          </div>

          <div class="bottom-container">
            <div class="row">
              <div class="col">
                <a href="#" style={{ color: "white" }} class="btn">Sign up!</a>
              </div>
              <div class="col">
                <a href="#" style={{ color: "white" }} class="btn">Forgot password?</a>
              </div>
            </div>
          </div>
        </body>
      </html>
    </main>
  );
}

export default App;