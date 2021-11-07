//import {useState} from 'react';
//import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from '../SignIn/login';
import Register from '../SignUp/index';
import Annonce from '../Annonce/annonce';
import Admin from '../Admin/src/App' ;
import Contact from '../Contact/contact';
import Encherir from '../Encherir/encherir';
//import Home from '../Home/home';
//import Sidebar from "../Home/Sidebar";

function App() {
  
  return (
    <div>
    <Router>
    

    <div className="App">
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/annonce' component={Annonce} />
      <Route exact path='/admin' component={Admin} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/encherir' component={Encherir} /> 

     </div>
     </Router>
     </div>
  );
}
export default App;