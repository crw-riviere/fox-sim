import RandomGenerator from '../services/randomGenerator.js'
import {Point} from 'paper';
import { encode } from 'punycode';

export default class Fox {
    constructor(boundaries, x, y, entities) {
        this.boundaries = boundaries;
        this.position = new Point(x,y);
        this.movements = [{x,y}];
        this.radius = 50;
        this.moveRange = 1;
        this.destination = this.position;
        this.entities = entities;
        this.detectedEntity = false;
    }

    get otherEntities(){
        return this.entities.filter(e => e != this)
    }

    addMovement(x,y){
        this.movements.push({x,y});
    }

    getEntityInRadius(){
        for(var entity of this.otherEntities){
            const isClose = this.position.isClose(entity.position, this.radius);
            if(isClose){
                this.detectedEntity = true;
                return entity;
            }
        }
        this.detectedEntity = false;
        return null;
    }

    move() {
        
        let entity = this.getEntityInRadius();
        if(!!entity)
            this.flight(entity);
        else
            this.moveToDestination();
        
        
        this.position = this.moveWithinBoundaries(this.position);
        this.addMovement(this.position.x,this.position.y);
    }

    flight(entity){
        let vector = entity.position.subtract(this.position)
        vector.length = this.moveRange
        this.position = this.position.subtract(vector)
    }

    moveToDestination(){
        let destinationReached = this.destination.equals(this.position.round());
        if(destinationReached){
            let newDestination = new Point( Math.floor(Math.random() * this.boundaries.width), Math.floor(Math.random() * this.boundaries.height))
            this.destination = this.moveWithinBoundaries(newDestination);
        } 

        let vector = this.destination.subtract(this.position)
        vector.length = 1;
        let newPos = this.position.add(vector)
        this.position = newPos;  
          
    }

    randomMovement(){
        let newPosition = this.position.clone();
        switch (RandomGenerator.next(8)) {
            case 0:
                newPosition.x += this.moveRange;
                break;
            case 1:
                newPosition.x -= this.moveRange;
                break;
            case 2:
                newPosition.y += this.moveRange;
                break;
            case 3:
                newPosition.y -= this.moveRange;
                break;
            case 4:
                newPosition.x += this.moveRange;
                newPosition.y += this.moveRange;
                break;
            case 5:
                newPosition.x -= this.moveRange;
                newPosition.y -= this.moveRange;
                break;
            case 6:
                newPosition.x += this.moveRange;
                newPosition.y -= this.moveRange;
                break;
            case 7:
                newPosition.x -= this.moveRange;
                newPosition.y += this.moveRange;
                break;
            default:
                break;

        }

        this.position = newPosition;
      
    }
    
    moveWithinBoundaries(position){
        if (position.x < 0) position.x = 0; 

        if (position.x >= this.boundaries.height) position.x = this.boundaries.height-1; 

        if (position.y < 0) position.y = 0; 

        if (position.y >= this.boundaries.width) position.y = this.boundaries.width-1;

        return position;
    }
}