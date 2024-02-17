import axios from 'axios';
import {useState} from 'react';


function GalleryItem(props) {


const handleLikeBtn = (id) => {
    
    axios.put(`/api/gallery/like/${id}`)
        .then(response => {
        console.log('PUT request was successful:', response);
        props.fetchGallery()
        })  
        .catch(err => {
            console.log('PUT error in updating "likes" value:', err);
        })
}

}


export default GalleryItem