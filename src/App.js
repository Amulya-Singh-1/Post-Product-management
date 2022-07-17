import React from 'react';
import './App.css';
import Header from './components/Header';
import Details from './Details';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div>

    
    <Router>
      <Routes>
        <Route exact path='/' element={ <Header /> } >
            
        </Route>
      </Routes>
      <Routes>
        <Route path='/details' element={ <Details /> }>
            
        </Route>
      </Routes> 
    </Router>
    
    </div>
  );
}

export default App;
