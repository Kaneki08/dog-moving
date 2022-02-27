import React,{ PureComponent } from 'react';
import dog from '../assets/dog.gif';

class Dog extends PureComponent{
    render(){
        //game privete
        const size = 100;
        const x = this.props.x -size/2;
        const y = this.props.y -size/2;

        //actual game spirit
        return(
            <img src={dog} alt="dog" style={{position:"absolute", width: size, height: size, left: x, top: y}} />
        );
    }
}

export {Dog};
