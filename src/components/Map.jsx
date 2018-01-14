import React from 'react';
import Entity from './Entity.jsx'
import * as d3 from  'd3';

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.renderMap = this.renderMap.bind(this);
    }
   
    renderMap(){
        const foxes = this.props.foxes || [];

        var g = this.svg
        .selectAll('g')
        .data(foxes)
        .enter()
        .append('g');

        // this.svg.selectAll('circle')
        // .data(foxes)
        // .enter()
        // .append('circle')
        
        g.append('circle')
        .attr('class','radius')        
        
        g.append('circle')
        .attr('class','fox')
        
        this.svg
        .selectAll('circle.radius')
        .data(foxes)
        .attr('r', d => d.radius)
        .style('fill', d => d.detectedEntity ? 'red' : 'none')
        .style('stroke', 'black')
        .style('fill-opacity',0.1)
        .attr('cx', d => d.position.x)
        .attr('cy', d => d.position.y)

     this.svg
     .selectAll('circle.fox')
     .data(foxes)
     .attr('r', 5)
     .style('fill', 'orange')
     .attr('cx', d => d.position.x)
     .attr('cy', d => d.position.y)

    

     
    // //  .datum(d => d.position)     
     
    //  this.svg
    //  .selectAll('circle')
    //  .data(foxes)
    //  .attr('cx', d => d.destination.x)
    //  .attr('cy', d => d.destination.y)
    //  .attr('r', 10)
    //  .style('fill', 'red')
     

    //   this.svg
    //  .selectAll('path')
    //  .data(foxes)
    //  .datum(d => { return d.movements})  
    //  .attr('stroke','red')
    //  .attr('fill','none')
    //     .attr('d',m => 
    //     {  var p = 'M' + m.map(x => `${x.x} ${x.y}`).join('L');
    //         return p;
    //     })
        
    }

    componentDidMount(){
        const node = this.node;        
        this.svg = d3.select(node); 

        this.renderMap();
    }

    componentDidUpdate(){
        this.renderMap();
    }

    render() {
        let foxes = this.props.foxes;
       
        return (
        <svg height={500} width={500} ref={node => this.node = node}>
        </svg>)
    }

    // render() {
    //     let foxes = this.props.foxes;
    //     let entities =  (!!foxes) ? foxes.map((e,i) => 
    //         <Entity 
    //             w="10" 
    //             h="10" 
    //             x={e.x} 
    //             y={e.y}
    //             movements={e.movements} 
    //             key={i} />
    //     ) : [];

    //     return (
    //     <svg height={this.props.height} width={this.props.width}>
    //         {entities}
    //     </svg>)
    // }
}