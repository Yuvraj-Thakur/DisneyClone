import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>Om shree Ganeshaya namaha</h1> */}
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
