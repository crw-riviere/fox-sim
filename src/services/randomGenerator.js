export default class RandomGenerator {
    static next(max){
        return Math.floor(Math.random() * max);
    }
} 