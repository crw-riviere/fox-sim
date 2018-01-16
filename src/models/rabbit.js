import Entity from "./entity";

export default class Rabbit extends Entity{
    constructor(x, y, boundaries, entities) {
        super(x, y, boundaries, entities);

        this.colour = 'blue';
        this.radius = 50;
        this.moveRange = 2;
        this.destination = this.position;
    }
}