import React from 'react';
import styled from 'styled-components';





const Image = (props) => {
    // const [photo, setPhoto] = useState([]);



    // useEffect(() => {
    //     Axios.get(`https://api.nasa.gov/planetary/apod?api_key=vWXqbHXX0GUda5vXpWNFne66KmvhapEIZ4quBnfW`)
    //     .then(res => {
    //         const photo = res.data.url
    //         setPhoto(photo);
    //     })
    // }, [photo])


    const SpacePhoto = styled.div`
    border: 1px bold white;
  `;

    return (
        <SpacePhoto>
            <img src={props.photo} alt="Space photo of the day"></img>
            {/* <button>Previous photo</button> */}
        </SpacePhoto>
        
    )

}

export default Image;