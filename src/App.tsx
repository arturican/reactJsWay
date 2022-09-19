import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Public from './components/Public/Public'

function App() {
  return (

    <div className='app-wrapper'>
     <Header />
     <Navbar />
     <Public />
    </div>
  );
}




export default App;
