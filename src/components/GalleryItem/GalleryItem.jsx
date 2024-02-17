import axios from 'axios';
import {useState} from 'react';
import './GalleryItem.css';


function GalleryItem(props) {
//props.url
//props.title
//props.description
//props.likes

const handleLikeBtn = (id) => {
    
    axios.put(`/api/gallery/like/${props.id}`)
        .then(response => {
        console.log('PUT request was successful:', response);
        props.fetchGallery()
        })  
        .catch(err => {
            console.log('PUT error in updating "likes" value:', err);
        })
}

    return (
        <div className="photo" data-testid="galleryItem">
            <h3>{props.title}</h3>
            <span className="gallery-frame">
            {props.url ? <img className="single_img" src={props.url}></img> : <p>{props.description}</p>}


            </span>
            <button className="like_btn" data-testid="like" onClick={() => handleLikeBtn(props.id)}>Like 👍</button>
            <p>number of likes: {props.likes}</p>

        </div>
    );
}


export default GalleryItem