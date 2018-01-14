import React from 'react';
import PathGenerator from '../services/pathGenerator.js'

export default class Entity extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const m = this.props.movements;
        const d = (!!m) ? PathGenerator.generate(m) : '';

        return (
            <g>
                {/* <path stroke="blue" strokeWidth="1" fill="none"
                    d={d}
                /> */}
                <rect style={{ fill: 'orange' }}
                    height={this.props.h}
                    width={this.props.w}
                    x={this.props.x}
                    y={this.props.y} />
                    <path d={`M${this.props.x} ${this.props.y} L${this.props.x-5} ${this.props.y-10} L${this.props.x+5} ${this.props.y-10}`} stroke="red" strokeWidth="1" fill="none" />
            </g>
        )
    }
}