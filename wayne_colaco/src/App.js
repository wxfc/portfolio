import React from 'react';
import './App.css';
import MyStory from './MyStory'
import Aspirations from './Aspirations'
import Hobbies from './Hobbies'


function App() {
  return (
    <div className="App">
      <div className="welcome-wrapper">
        <div className="heading">
          
        </div>
        <div className="me">
          
        </div>
      </div>

        <div className="projects-wrapper">
          <div className="projects">

          </div>
        </div>

        <div className="about-me">
          <MyStory />
          <Aspirations />
          <Hobbies />
          <div className="about-me-wrapper">

          </div>

          <div className="contact">

          </div>
        </div>
        
      
    </div>
  );
}

export default App;
