import { HashRouter as Router, Route } from "react-router-dom";
import { Details, Home } from '../routes';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Details} />
    </Router>
  );
}

export default App;
