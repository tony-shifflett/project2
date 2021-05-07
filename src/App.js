import React, {useState} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import SelectionPage from './components/SelectionPage';
import LocationDisplay from './components/LocationDisplay';


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
      </Switch>
    </div>
  );
}

export default App;

