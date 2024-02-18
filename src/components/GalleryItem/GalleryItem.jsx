import axios from 'axios';
import {useState} from 'react';
import './GalleryItem.css';


function GalleryItem(props) {
//props.url
//props.title
//props.description
//props.likes
const [toggle, setToggle] = useState(true);

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

const handleToggleImage = () => {
    setToggle(!toggle);
}

    return (
        <div className="photo" data-testid="galleryItem">
            <h3>{props.title}</h3>
            <span className="gallery-frame">
                {toggle ? <img className="single_img" src={props.url}></img> : <p>{props.description}</p>}

            </span>
            <button className="toggle-btn" data-testid="toggle" onClick={handleToggleImage}>Toggle Image</button>
            <button className="like_btn" data-testid="like" onClick={() => handleLikeBtn(props.id)}>Like 👍</button>
            <p>number of likes: {props.likes}</p>

        </div>
    );
}


export default GalleryItem