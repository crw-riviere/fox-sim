import React from 'react';

export default class RangeSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {sliderValue:this.props.defaultValue};
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e){
        this.setState({sliderValue: e.target.value});
        this.props.handleInput(e);
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.name}</label>
                <input 
                id={this.props.id}
                    type="range"
                    min={this.props.min} max={this.props.max} defaultValue={this.props.defaultValue}
                    onInput={this.handleInput} />
                   <span> {this.state.sliderValue} </span>
            </div>
        )
    }
}