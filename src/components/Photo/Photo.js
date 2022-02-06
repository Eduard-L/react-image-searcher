import React from 'react';
import './Photo.css';
import { useParams, Link } from 'react-router-dom';
import { NotFound } from '../NotFound/NotFound';


export function Photo({ photos }) {

    const getPhotoById = (photos, id) => photos.find(photo => photo.id === id);

    const { id } = useParams();
    const photo = getPhotoById(photos, id);
    console.log(photos, photo); // you need to show it to students as well, otherwise they won't understand comparisons by id 

    return (
        <div className="Photo">
            <Link className='Photo-link' to='..'>Go back</Link>
            {
                photo ?
                    <>
                        <img className="Photo-image" src={photo.urls.regular} alt={photo.description} />
                        <p className="Photo-title">{photo.description}</p>
                        <p className="Photo-subtitle">{photo.alt_description}</p>
                    </>
                    : <NotFound />
            }
        </div>
    );
}
