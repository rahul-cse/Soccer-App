import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import NavbarComponent from './Component/NavbarComponent';
import HomeComponent from './Component/HomeComponent';
import StandingsComponent from './Component/StandingsComponent';
import HighlightsComponent from './Component/HighlightsComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent/>
        <Switch>
          <Route path="/" exact component={HomeComponent}></Route>
          <Route path="/standings/:leagueId" component={StandingsComponent}></Route>
          <Route path="/highlights" component={HighlightsComponent}></Route>
        </Switch>
        
        
      </header>
    </div>
  );
}

export default App;
