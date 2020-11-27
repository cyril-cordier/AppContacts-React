import React, {Component} from 'react';
import Header from './composants/interface/Header'
import Liste from './composants/contact/Liste'
import {Provider} from './context'
import AddContact from './composants/contact/AddContact'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import APropos from './composants/pages/APropos'
import Erreur from './composants/pages/Erreur'



import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {

  render() {

      return (
        <Provider>
          <Router>
            <div className="App">
              <Header />
              <div className="container">
                <Switch>
                  <Route exact path='/liste' component={Liste}/>
                  <Route exact path='/' component={Liste}/>
                  <Route exact path='/ajoute' component={AddContact}/>
                  <Route exact path='/apropos' component={APropos}/>
                  <Route component={Erreur}/>
                </Switch>
              </div>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
