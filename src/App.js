import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'


//pages
import Home from './pages/HomePage'
import Store from './pages/Store'
import Navbar from './component/Navbar'
import Single from './pages/Single'
import Sidecart from './component/Sidecart'
function App() {
  return (
    <>
      <Navbar />
      <Sidecart />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/single/:id" component={Single} />
      </Switch>
    </>
  );
}

export default App;
