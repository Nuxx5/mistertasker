import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import { TaskApp } from './pages/TaskApp/TaskApp';
import { HomePage } from "./pages/HomePage/HomePage";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { About } from './pages/About/About';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { TaskDetails } from './pages/TaskDetails/TaskDetails';
import { TaskEdit } from './pages/TaskEdit/TaskEdit';
import { userService } from './services/userService';

function setValid() {
  return userService.getLoggedinUser();
}
export function App() {

  const PrivateRoute = (props) => {
    const isSignup = setValid()
    return isSignup ? <Route component={props.component} path={props.path} /> : <Redirect to="/signup" />
  }

  return (
    <Router>
    <div className="App">
    <AppHeader />
    <Switch>
    <Route component={TaskEdit} path='/task/edit/:id?' />
    <Route component={SignupPage} path='/signup' />
    <Route component={TaskDetails} path='/task/:id' />
    <PrivateRoute component={TaskApp} path='/task' />
    <PrivateRoute component={About} path='/about' />
    <PrivateRoute component={HomePage} isUser={true} path='/' />
      </Switch>
    </div>
    </Router>
  );
}

