import Fox from '../models/fox.js';
import Rabbit from '../models/rabbit.js';

export default class Simulator {
    constructor(height, width, foxes, rabbits) {
        this.boundaries = {height,width};
        this.foxes = foxes || [];
        this.rabbits = rabbits || [];
    }

    get maxEntityCount(){
        return this.boundaries.x * this.boundaries.y;
    }

    addFox(x, y){
        this.foxes.push(           
            new Fox(
                this.boundaries.height / 2,
                this.boundaries.width / 2,
                this.boundaries,
                this.foxes
            ));
    }

    addRabbit(x, y){
        this.foxes.push(           
            new Rabbit(
                this.boundaries.height / 2,
                this.boundaries.width / 2,
                this.boundaries,
                this.foxes
            ));
    }

    setFoxCount(count){
        if(count < this.foxes.length){
             this.foxes = this.foxes.slice(0, count);
        }

        if(count > this.foxes.length){
            let additionalCount = count - this.foxes.length;
            for(let i = 0; i < additionalCount; i++){
                this.addFox();
            }
        }
    }

    setRabbitCount(count){
        if(count < this.rabbits.length){
             this.rabbits = this.rabbits.slice(0, count);
        }

        if(count > this.rabbits.length){
            let additionalCount = count - this.rabbits.length;
            for(let i = 0; i < additionalCount; i++){
                this.addRabbit();
            }
        }
    }

    simulateTurn() {
        this.foxes.forEach(fox => {
            fox.move();
        })
    }
}