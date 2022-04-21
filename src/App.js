// import './App.css';
import Frontend from './frontend/MasterLayout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component = {Frontend} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
