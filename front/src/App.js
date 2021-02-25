import Components from './components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Navbar} from './components/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    
      <Router>
        <Navbar />
        <div className="container p-4">
          <Switch>
            <Route exact path="/" component={Components.MessageList} />
            <Route exact path="/newmessage" component={Components.MessageForm} />
          </Switch>
        </div>
      </Router>
    
  );
}

export default App;
