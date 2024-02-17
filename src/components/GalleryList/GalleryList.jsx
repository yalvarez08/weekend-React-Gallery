import axios from 'axios';
import {useEffect, useState} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props) {
    
let [galleryList, setGalleryList] = useState([]);
    //GET /api/gallery
    const fetchGallery = () => {
    axios.get('/api/gallery')
        .then(response => {
            console.log('GET request was successful:', response);
            galleryList = response.data;
            setGalleryList(galleryList);
        })
        .catch(err => {
            console.log('GET error in getting gallery list', err);
        })
    }
    //On load, get array of gallery
    useEffect(
        fetchGallery, []
    );

    


}

export default GalleryList