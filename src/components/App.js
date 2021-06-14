import React from "react"
import Signup from "./authentication/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Profile from "./authentication/Profile"
import Login from "./authentication/Login"
import PrivateRoute from "./authentication/PrivateRoute"
import ForgotPassword from "./authentication/ForgotPassword"
import UpdateProfile from "./authentication/UpdateProfile"
import Dashboard from "./google-drive/Dashboard"


function App() {
  return (
   <>
        <Router>
          <AuthProvider>
          <Switch>
              {/* Google Drive Clone Routes */}
              {/* Profile */}
              <PrivateRoute exact path="/" component={Dashboard}/>
              <PrivateRoute  path="/user" component={Profile} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute exact path="/folder/:folderId" component={Dashboard}/>
            
            
              /* 
              Authentication Routes  */
             <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      
    </>
  )
}

export default App
