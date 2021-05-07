import React, {useState} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import SelectionPage from './components/SelectionPage';
import DisplayOfficials from './DisplayOfficials';



function App() {
  let [zipCode, setZipCode] = useState("")
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"
        render={(routerProps) => <HomePage {...routerProps} setZipCode={setZipCode} zipCode={zipCode}/>}
        />
       
        <Route
          path="/SelectionPage"
          render={(routerProps) => <SelectionPage {...routerProps} zipCode={zipCode} />}
        />

        <Route
          path="/Federal"
          render={(routerProps) => <DisplayOfficials {...routerProps} zipCode={zipCode} level={"federal"}/>}
        />

        <Route
          path="/State"
          render={(routerProps) => <DisplayOfficials {...routerProps} zipCode={zipCode} level={"state"}/>}
        />
      </Switch>
    </div>
  );
}

export default App;

