import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import SelectionPage from './components/SelectionPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path='/SelectionPage'>
          <SelectionPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
