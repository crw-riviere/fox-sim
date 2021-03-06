import React from 'react';

export default class EntityList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let entities = this.props.entities;
        let listItems = (!!entities) ? entities.map((e,i) => 
            <li key={i}> X: {e.position.x.toFixed(0)} Y: {e.position.y.toFixed(0)} -> {e.destination.x} {e.destination.y} Detected: {e.detectedEntity ? 'true':'false'}</li>
        ) : [];
        return (
            <ul>
                {listItems}
            </ul>
        )
    }
}