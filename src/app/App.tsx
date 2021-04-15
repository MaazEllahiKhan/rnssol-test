import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import NotFound from './pages/NotFound/NotFound';
import SignUp from './pages/SignUp/SignUp';
import logIn from './pages/LogIn/LogIn';


import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container } from 'react-bootstrap';
// import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.TOP_CENTER,
  transition: transitions.SCALE
}

const AlertTemplate = (props: any) => (
  <div style={props.style} className="d-flex row justify-content-center">
    {props.options.type === 'info' && (
      <div style={{ background: '#99ec99', paddingLeft: '10px', paddingRight: '10px' }}>
        <span>!</span>
        <span style={{}} className="ml-2">{props.message}</span>
      </div>
    )}
    {props.options.type === 'success' && (
      <div style={{ background: '#99b3ec', paddingLeft: '10px', paddingRight: '10px' }}>
        <span>:)</span>
        <span style={{}} className="ml-2">{props.message}</span>
      </div>
    )}
    {props.options.type === 'error' && (
      <div style={{ background: '#ff6a6a', paddingLeft: '10px', paddingRight: '10px' }}>
        <span>:(</span>
        <span style={{}} className="ml-2">{props.message}</span>
      </div>
    )}

    <button onClick={props.close} style={{ border: "none", background: '#8c8d9a' }}>X</button>
  </div>
)

function App() {
  return (
    <Container fluid className="d-flex">
      {/* <HashRouter> */}
      <AlertProvider template={AlertTemplate} {...options}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" ><Redirect to="/login" /></Route>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={logIn} />
            <Route path='/dashboard'  component={DefaultLayout} />
            <Route path='*' exact={true} component={NotFound} />
          </Switch>
        </BrowserRouter>
      </AlertProvider>

      {/* </HashRouter> */}
    </Container>
  );
}

export default App;
