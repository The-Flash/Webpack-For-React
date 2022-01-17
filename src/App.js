import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent, { ImportedComponent } from 'react-imported-component';

import Home from './components/Home';
import Loading from './components/Loading';

const AsyncDynamicPage = importedComponent(
  () => import("./components/DynamicPage")
)

const AsyncNoMatch = importedComponent(
  () => import("./components/NoMatch")
)

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPage} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;