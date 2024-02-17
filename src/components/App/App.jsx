import axios from 'axios';
import {useEffect, useState} from 'react';

import Header from '../Header/Header';
import GalleryList

function App() {

  
    return (
      <div className="App" data-testid="app">
        <Header />

        {/* <GalleryList /> */}
        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/dogs_are_life.jpeg"/>
        <img src="images/family.jpeg"/>
      </div>
    );
}

export default App;
