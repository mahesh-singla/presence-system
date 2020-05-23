import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Footer from './components/Footer';
import Status from './components/Status';
import UserContextProvider from './context/UserContextProvider';
import Error from './components/Error';

function App() {
  return (
    <>
      <CssBaseline />
      <UserContextProvider>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/status" component={Status} />
          <Route component={Error}/>
        </Switch>
      </UserContextProvider>
      <Footer />
    </>
  );
}

export default App;
