import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import TeamSpeakers from './components/TeamSpeakers';
import PlaceDate from './components/PlaceAndDate';
import Speakers from './components/Speakers';
import Modal from './components/Modal';
import Footer from './components/Footer';
function App(){
  return(
    <div>
      <Header/>
      <Main/>
      <TeamSpeakers/>
      <PlaceDate/>
      <Speakers/>
      <Footer/>
      <Modal/>

    </div>
    
        
);
}


export default App;
