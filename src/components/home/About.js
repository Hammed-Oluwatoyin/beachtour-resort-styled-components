import React from "react";
import styled from "styled-components";
import Section from "../globals/Section";
import Title from "../globals/Title";
import aboutImg from "../../images/aboutBcg.jpeg";
import {
        setRem,
        setBorder,
        setColor,
        setLetterSpacing,
        media
} from "../../styles";
import {PrimaryButton } from "../globals/Button";

const About  = () => {
    return ( <Section>
                <AboutCenter>
                <div className="about-img">
                    <img src={aboutImg} alt="about us"  />
                </div>
                <div className="about-info">
                    <Title title="about us" />
                    <p>
                     Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Est quisquam corruption
                    dicta tempora sequi sapiente!,
                    "Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Est quisquam corruption  
                    dicta tempora sequi sapiente!",
                    "Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Est quisquam corruption 
                    dicta tempora sequi sapiente!",

                     </p>
                     
            <PrimaryButton> read more</PrimaryButton>
                </div>
                
                </AboutCenter>

                    
                    

                </Section>);
}

const AboutCenter =styled.div`
                            .about-img,
                            .about-info {
                                padding: ${setRem(0)};
                            }
                            .about-img {
                                img{
                                    width:100%;
                                display:block;
                                border: ${setBorder({ width: setRem(6),
                                     color: setColor.primaryColor })}
                                            }
                                }
                            .about-info {
                                p{ 
                                    ${setLetterSpacing(3)}; 
                                
                                }
                            }
                                width: 90vw;
                                margin: 0 auto;
                                ${media.desktop`
                                    .about-img,
                                    .about-info {
                                        padding: ${ setRem(0) };
                                    }
                                    width:100vw;
                                    max-width: 1170px;
                                    display:grid;
                                    grid-template-columns: 1fr 1fr;
                                    grid-column-gap: ${setRem(40)};
                                    .about-img {
                                        align-self: center;
                                    }
                                    .about-info {
                                        p{
                                            width: 80%;
                                        }
                                    }
                                    
                                    `}
                            
                               
                               
                                
                                `;

export default About;