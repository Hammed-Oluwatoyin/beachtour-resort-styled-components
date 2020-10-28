import styled from 'styled-components';
import homeImg from "../../images/homeBcg.jpeg";
import {setFlex, setBackground} from "../../styles";
const Hero = styled.header`
                    min-height: 100vh;
                    ${props =>setBackground(  {img : props.img}  ) };
                   
                   ${setFlex()};

                    

            `;

export default Hero;