import React from 'react';
import './Photo.css';
import { useParams, Link } from 'react-router-dom';
import { NotFound } from '../NotFound/NotFound';
import { saveAs } from 'file-saver';
let uuid = 0;

export function Photo({ photos }) {


    const getPhotoById = (photos, id) => photos.find(photo => photo.id === id);

    const { id } = useParams();
    const photo = getPhotoById(photos, id);
    // console.log(photos, photo); 
    const handleDonwloadImage = () => {
        uuid++
        saveAs(photo.urls.regular, `picture${uuid}.jpg`);
    }
    return (
        <div className="Photo">
            <Link className='Photo-link' to='..'>Go back</Link>
            {
                photo ?
                    <>
                        <img className="Photo-image" src={photo.urls.regular} alt={photo.description} />
                        <button onClick={handleDonwloadImage} className='Photo-download-btn'>Click To Download</button>

                        <p className="Photo-title">{photo.description}</p>
                        <p className="Photo-subtitle">{photo.alt_description}</p>

                    </>
                    : <NotFound />
            }
        </div>
    );
}
