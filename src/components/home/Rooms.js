import React, { Component } from 'react';
import styled from 'styled-components';
import Room from "./Room";
import Title from "../globals/Title";
import Section from "../globals/Section";
import rooms from "./rooms-data";
import {setColor, media, setRem} from "../../styles";



const RoomsCenter =styled.div`
                            width:90vw;
                            margin: 0 auto;
                        ${media.tablet`
                             display:grid;
                             grid-template-columns:repeat(3, 1fr);
                             grid-column-gap:${setRem(32)};
                             `}
                            `;


export default class Rooms extends Component {

    state = {
        rooms:rooms
    };

    render() {
        return (
           <Section color={setColor.lightGrey}>
               <Title title="our rooms" center />
               <RoomsCenter>
               {this.state.rooms.map((room) => {
                   return <Room key={room.id} room={room} />
               })}

           </RoomsCenter>
           </Section>
          
        );
    }
}
