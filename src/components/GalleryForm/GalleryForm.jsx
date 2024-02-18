import axios from 'axios';
import {useState} from 'react';
import './GalleryForm.css';

function GalleryForm(props) {
    const [urlInput, setUrlInput] = useState('');
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
   

    const handleAddToGallery = (event) => {
        event.preventDefault();

        axios({
            method: 'POST',
            url: '/api/gallery',
            data: {
                url: urlInput,
                title: titleInput,
                description: descriptionInput
            }
        })
        .then(response => {
            console.log('POST request was successful:', response);
            props.fetchGallery();
           
            setUrlInput('');
            setTitleInput('');
            setDescriptionInput('');
        })
        .catch(err => {
            console.log('POST error in posting new item:', err);
        })
    }

    return (
        <section>
            <form onSubmit={handleAddToGallery}>
                <h3>📃Use form below to add new item to gallery📃</h3>
                <label htmlFor="url-input">url:</label>
                <input id="url-input" value={urlInput} onChange={e => setUrlInput(e.target.value)} /> 
                <label htmlFor="title-input">title:</label>
                <input id="title-input" value={titleInput} onChange={e => setTitleInput(e.target.value)} />
                <label htmlFor="description-input">description:</label>
                <input id="description-input" value={descriptionInput} onChange={e => setDescriptionInput(e.target.value)} />
                <button id="submit-btn" type="submit">Add To Gallery</button>
            </form>
        </section>

    )
}

export default GalleryForm