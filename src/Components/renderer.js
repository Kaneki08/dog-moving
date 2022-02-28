import React,{ PureComponent } from 'react';
import dog from '../assets/dog_edited.png';
import {DOG_CHAR_WIDTH, DOG_CHAR_HEIGHT} from '../constants';

class Dog extends PureComponent{
    render(){
        //game privete
        //const size = 100;
        const x = this.props.x -DOG_CHAR_WIDTH/2;
        const y = this.props.y -DOG_CHAR_HEIGHT/2;

        //actual game spirit
        return(
            <img src={dog} alt="dog" style={{position:"absolute", width: DOG_CHAR_WIDTH, height: DOG_CHAR_HEIGHT, left: x, top: y}} />
        );
    }
}

export {Dog};
