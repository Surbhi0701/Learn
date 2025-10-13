// import './App.css';
// import Alert from './components/Alert';
// import About from './components/About';
// import Navbar from './components/Navbar';
// import Textform from './components/Textform';
// import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


// function App() {
//   const [mode, setMode]=useState('light');
//   const[alert, setAlert]=useState(null);

//   const showAlert=(message, type)=>{
//     setAlert({
//       msg:message,
//       type:type
//     })
//     setTimeout(()=>{
//       setAlert(null);
//     },3000);
//   }

//   const toggleMode=()=>{
//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743';
//       showAlert("Dark Mode has Enabled","success");
//       document.title="LEARN - Dark Mode";
//     }
//     else{
//      setMode('light'); 
//      document.body.style.backgroundColor = 'white';
//      showAlert("Light Mode has Enabled","success");
//      document.title="LEARN - Light Mode";
//     }
//   }
//   return (
//     <>
//     <Router>
//       <Navbar title="Learn" about="About Us" mode={mode} toggleMode={toggleMode}/>
//       <Alert alert={alert}/>
//       {/* <Navbar/> */}
//       {/* <Navbar title="Learn"/> */}
  
//       <div className="container my-3">
//         <Switch>
//           <Route path="/about">
//             <About />
            
//           </Route>
         
//           <Route path="/">
//               <Textform showAlert={showAlert} heading="Enter Your Text" mode={mode}/>
//           </Route>
//         </Switch>
//       </div>
//       </Router>
//     </>
//   );
// }

// export default App;
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has Enabled", "success");
      document.title = "LEARN - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has Enabled", "success");
      document.title = "LEARN - Light Mode";
    }
  }

  return (
    <>
        <Router>
        <Navbar title="Learn" about="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} mode={mode}/>
            <Route path="/" element={<Textform showAlert={showAlert} heading="Enter Your Text" mode={mode} />} />
          </Routes>

        </div>
        </Router> 
    </>
  );
}

export default App;
