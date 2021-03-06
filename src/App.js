import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import QuestionDetails from './components/questions/QuestionDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateQuestion from './components/questions/AddQuestion';
import Profile from './components/dashboard/Profile'
import Notifications from './components/dashboard/Notifications'
function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/question/:id' component={QuestionDetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/create' component={CreateQuestion} />
          <Route path='/profiledetails' component={Profile} />
          <Route path='/notifications' component={Notifications}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
