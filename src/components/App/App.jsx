import {useEffect, useState} from 'react';

import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';


function App() {

  
    return (
      <div className="App" data-testid="app">
        <Header />
        <GalleryForm />
        <GalleryList />        
      </div>
    );
}

export default App;
