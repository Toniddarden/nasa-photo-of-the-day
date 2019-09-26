import React, { useState, useEffect } from 'react';
import Axios from 'axios';


const Image = () => {
    const [photo, setPhoto] = useState([]);



    useEffect(() => {
        Axios.get(`https://api.nasa.gov/planetary/apod?api_key=vWXqbHXX0GUda5vXpWNFne66KmvhapEIZ4quBnfW`)
        .then(res => {
            const photo = res.data.url
            setPhoto(photo);
        })
    }, [photo])

    return (
        <div>
            <img src={photo} alt="Space photo of the day" onClick={() => setPhoto(photo + 1)}></img>
            {/* <button>Previous photo</button> */}
        </div>
        
    )

}

export default Image;