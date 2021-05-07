import React, {useState} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import SelectionPage from './components/SelectionPage';
import DisplayOfficials from './DisplayOfficials';



function App() {
  let [zipCode, setZipCode] = useState("")
  const [civicData, setCivicData] = useState(null)
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"
        render={(routerProps) => <HomePage {...routerProps} setZipCode={setZipCode} zipCode={zipCode}/>}
        />
       
        <Route
          path="/SelectionPage"
          render={(routerProps) => <SelectionPage {...routerProps} zipCode={zipCode} 
          civicData={civicData} setCivicData={setCivicData}/>}
        />

        <Route
          path="/Federal"
          render={(routerProps) => <DisplayOfficials {...routerProps} zipCode={zipCode} level={"federal"} civicData={civicData} setCivicData={setCivicData}/>}
        />

        <Route
          path="/State"
          render={(routerProps) => <DisplayOfficials {...routerProps} zipCode={zipCode} level={"state"} civicData={civicData} setCivicData={setCivicData}/>}
        />
      </Switch>
    </div>
  );
}

export default App;

