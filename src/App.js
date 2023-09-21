// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
// import About from './Components/About';

function App() {
  const [mode, setmode] = useState('light')
  const toggleMode = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" Mode={mode} Toggle={toggleMode} />
      <div className="container">
        {/* <Routes> Updated to Routes */}
        {/* <Route path="/about" element={<About />} /> Updated to element */}
        {/* <Route path="/" element={} /> Updated to element */}
        <TextForm heading="Enter your text" Mode={mode} />
        {/* </Routes> */}

      </div>
    {/* </Router > */}
    </>
  );
}

export default App;