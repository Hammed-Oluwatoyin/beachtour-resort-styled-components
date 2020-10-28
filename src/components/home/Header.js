import React from 'react'
import Hero from '../globals/Hero';
import homeImg from '../../images/homeBcg.jpeg';
import Banner from '../globals/Banner';
import {PrimaryButton} from '../globals/Button';
const Header = () => {
    return (
    <Hero img={homeImg}>
        <Banner title="beachtour resort"
                text ="lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi providnet eos sapiente deleniti in quisquam."
                greeting="Welcome to " 
                >
            <PrimaryButton t="1rem">
                view details
            </PrimaryButton>
        </Banner>
            
        
    </Hero>)
}

export default Header;
