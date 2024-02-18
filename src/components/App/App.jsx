import axios from 'axios';
import {useEffect, useState} from 'react';

import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  
    return (
      <div className="App" data-testid="app">
        <Header />
        <GalleryList />        
      </div>
    );
}

export default App;
