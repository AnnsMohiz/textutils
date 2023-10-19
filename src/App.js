
import './App.css';
import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import Alert from './Components/Alert';
import About from './Components/About';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link,
} from "react-router-dom";
import TextUtils from './Components/TextUtils';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('');


  const showAlert = (message, type) =>
  {
      setAlert ({
        msg: message,
        typ: type
        
      })
      setTimeout(() => {
        setAlert (null);
      },1500 );
  }

  const toggleMode = () =>
  {
    if(mode === 'light')
    {
      setMode ('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode is Enabled", "success")
     
    }
    else
    {
      setMode ('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode is Enabled", "success")
    }
  }
  return (
    
   
  <Router>
  <>
  
    {/* Navbar here   */}
    <Navbar title ="TextUtils" aboutText = "About"mode={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
   
   {/* Text Area Here  */}
   <div className="container">
   <Routes>
          <Route exact path='/TextUtils' element ={<TextUtils mode={mode}/>}></Route>
          <Route exact path='/about'element ={<About mode={mode}/>}></Route>
          <Route exact path='/'element ={ <TextForms showAlert={showAlert}  heading = "Enter the text to analyze below"mode={mode}/>}></Route>
    </Routes>

    </div>
    </>
    </Router>
    
  
    
  );
}



export default App;
