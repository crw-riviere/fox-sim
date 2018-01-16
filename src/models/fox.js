import RandomGenerator from '../services/randomGenerator.js'
import Entity from './entity.js';
import {Point} from 'paper';

export default class Fox extends Entity{
    constructor(x, y, boundaries, entities) {
        super(x, y, boundaries, entities);
        
        this.colour = 'orange';
        this.radius = 20;
        this.moveRange = 1;
        this.destination = this.position;
    }

   


}