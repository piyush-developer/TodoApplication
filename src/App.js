import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { BrowserRouter as Router ,NavLink,Switch,Route} from 'react-router-dom';
import TodoList from './Components/TodoList';
import Admin from './Components/Admin';
import Test from './Components/Test';
import Test2 from './Components/Test2';
function App() {
  return (
    <div>
    <Router>
       

  
 <Switch>
  <Route path='/' exact component={Login}/>
  <Route path='/signup' component={Signup}/>
  <Route path='/test2' component={Test2}/>
  <Route path='/admin' component={Admin}/> 
</Switch>


      </Router>
  
    </div>
  );
}

export default App;
