import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab1} from "./Tabs/tab1";
import { Tab2 } from "./Tabs/tab2";
import Home from "./Tabs/home";
import BgImg from "./hospital2.png";
import {useDispatch,useSelector} from 'react-redux';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Update } from './action';
const App=()=>{
  const dispatch=useDispatch();
  const handleRowUpdate = (newData, oldData) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
      if (oldData) {
          dispatch(Update(newData)) }
    }, 600);
  });
  return(
   
    <div style={{backgroundImage: `url(${BgImg})` }}>
        <Router>
          <nav className="nav nav-dark bg-dark">
            <ul className="nav mr-auto ">
              <li>
               <Link to="/" className="nav-link">
               <button type="button" className="btn btn-primary btn-sm">Home</button>
                  
              </Link>
              </li>
              <li>
                <Link to="/tab1" className="nav-link">
                <button type="button" className="btn btn-primary btn-sm">
                  Tab1
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/tab2" className="nav-link">
                <button type="button" className="btn btn-primary btn-sm">
                  Tab2
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
          <Route exact path="/" render={props=><Home {...props}/>}></Route>
          <Route path="/tab1" render={props=><Tab1  onRowUpdate={handleRowUpdate} {...props} />} ></Route>
          <Route path="/tab2" render={props=><Tab2  onRowUpdate={handleRowUpdate} {...props} />} ></Route>
          </Switch>
        </Router>
        </div>
  );
  }
 export default App;
 
 