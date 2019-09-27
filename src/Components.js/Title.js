import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';



const TitleStyle = styled.h1`
text-align: center;
width: 100%;
font-family: 'Dancing Script';
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  
`;

// const FontAwesomeIcon = styled.FontAwesomeIcon `
// width: 100%;`
// ;

const randomDateButton = styled.button`
width: 100px;
height: 30px;
color: blue;
border: 0;
margin: 5px 10px;
&:hover {
  background: ${props => (props.primary ? "#2a2223" : "#fff")};
  color: ${props => (props.primary ? "#fff" : "#2a2223")};
}
`;




//const [nasaData, setNasaData] = useState({});



const Title = (props) => {


    return (
        
<Wrapper>
  <TitleStyle>Space Photo of the Day</TitleStyle>
  <FontAwesomeIcon icon={faCamera} size='3x' />
  <div> </div>
  <button><randomDateButton>Click For A Random Date</randomDateButton></button>
</Wrapper>

        
    )
}

export default Title;