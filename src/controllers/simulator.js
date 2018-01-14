import Fox from '../models/fox.js';

export default class Simulator {
    constructor(height, width, foxes) {
        this.boundaries = {height,width};
        this.foxes = foxes || [];
    }

    get maxEntityCount(){
        return this.boundaries.x * this.boundaries.y;
    }

    addFox(x, y){
        this.foxes.push(
            // new Fox(
            //     this.boundaries,
            //     Math.floor(Math.random() * this.boundaries.height),
            //     Math.floor(Math.random() * this.boundaries.width)
            // )
            new Fox(
                this.boundaries,
                this.boundaries.height / 2,
                this.boundaries.width / 2,
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

    simulateTurn() {
        this.foxes.forEach(fox => {
            fox.move();
        })
    }
}