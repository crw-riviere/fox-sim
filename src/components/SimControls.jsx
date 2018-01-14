import React from 'react';
import RangeSlider from './RangeSlider.jsx';

export default class SimControls extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <RangeSlider id="speed" name="Speed" min="1" max="60" defaultValue="30" handleInput={this.props.onSpeedChange} />                
                <br />
                <RangeSlider id="fox-count" name="Fox Count" type="range" min="1" max={this.props.maxEntityCount.toString()} defaultValue="50" handleInput={this.props.onFoxCountChange} />
                <br />
                <button onClick={this.props.onPlay}>
                    Play
            </button>
            </div>
        )
    }
}