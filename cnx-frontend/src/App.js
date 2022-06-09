import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DealerList from './components/Dealer/DealerList'
import VehicleList from './components/Vehicle/VehicleList'
import NotFound from './components/Other/NotFound'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={DealerList}/>
          <Route exact path='/vehicles/:id' component={VehicleList}/>
          <Route  path='*' component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
