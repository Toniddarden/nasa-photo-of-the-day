import React, { useState, useEffect } from "react";
import Axios from "axios";

const Data = () => {
    const [spaceContent, setSpaceContent] = useState('');

    useEffect(() => {
        Axios.get(`https://api.nasa.gov/planetary/apod?api_key=vWXqbHXX0GUda5vXpWNFne66KmvhapEIZ4quBnfW`)
        .then(res => {
            const spaceContent = res.data.explanation
            setSpaceContent(spaceContent);
        })
    }, [spaceContent])

    return (
        <div>
            <p>{spaceContent}</p>
        </div>
    )





}

export default Data;