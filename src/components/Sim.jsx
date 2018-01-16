import React from 'react';
import Map from './Map.jsx';
import SimControls from './SimControls.jsx';
import EntityList from './EntityList.jsx'

import Simulator from '../controllers/simulator.js'

export default class Sim extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSimulatorPaused:true, 
            fpsInterval: 1000/60,
            foxes:[],
            rabbits:[]
        };
        this.now = Date.now();
        this.then = Date.now();
        this.elapsed = 0;
        
        this.handlePlay = this.handlePlay.bind(this);
        this.handleSpeedChange = this.handleSpeedChange.bind(this);
        this.handleFoxCountChange = this.handleFoxCountChange.bind(this);
        this.animate = this.animate.bind(this);

        this.simulator = new Simulator(200, 200);
        this.simulator.setFoxCount(2);
        this.simulator.setRabbitCount(2);
    }

    animate() {
        requestAnimationFrame(this.animate);

        this.now = Date.now();
        this.elapsed = this.now - this.then;

        if (!this.state.isSimulatorPaused && this.elapsed > this.state.fpsInterval) {

            // Get ready for next frame by setting then=now, but also adjust for your
            // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
            this.then = this.now - (this.elapsed % this.state.fpsInterval);

            // Put your drawing code here
            this.simulator.simulateTurn();
            this.setState({
                foxes: this.simulator.foxes,
                rabbits: this.simulator.rabbits
            });
        }
    }

    handlePlay(){
        requestAnimationFrame(this.animate);

        let paused = this.state.isSimulatorPaused;
        console.log(paused);
        this.setState({isSimulatorPaused:!paused});
    }

    handleSpeedChange(e){
        this.setState({fpsInterval:1000/e.target.value});
    }

    handleFoxCountChange(e){
        this.simulator.setFoxCount(e.target.value);
    }

    render() {
        let entityList = this.state.foxes.concat(this.state.rabbits);
        return (
            <div>
                <Map
                    height={this.simulator.boundaries.height}
                    width={this.simulator.boundaries.width}
                    foxes={this.state.foxes}
                    rabbits={this.state.rabbits}
                />
                <EntityList entities={entityList}/>
                <SimControls 
                    maxEntityCount={this.simulator.maxEntityCount}
                    onPlay={this.handlePlay}
                    onSpeedChange={this.handleSpeedChange}
                    onFoxCountChange={this.handleFoxCountChange}
                     />
            </div>
        )
    }
}