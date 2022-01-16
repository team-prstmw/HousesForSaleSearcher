import './App.css';

import { Route, Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={IndexPage} />
          <Route path="/user" component={UserPage} />
          <Route path="/addhouse" component={AddHousePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
