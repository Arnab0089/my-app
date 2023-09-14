
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
import React,{useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState('light');

  const [modeName, setmodeName] = useState('Dark Mode');

  const toggler=()=>{
    if(darkMode==='dark'){
      setDarkMode('light');
      document.body.style.backgroundColor='white';
      setmodeName('Dark Mode');

    }
    else{
      setDarkMode('dark');
   
      document.body.style.backgroundColor='slateblue';
      setmodeName('Light Mode');
    }
  }


  return (
    <>
    <Router>
    <Navbar title="Text Utilles" mode={darkMode} toggleMode={toggler} modeName1={modeName}/>
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
          <Textfrom heading='Enter Your Text Here: ' mode={darkMode}/>
  
          </Route>
    </Switch>
    
    
   
    </Router>
    </>
   
  );
}

export default App;
