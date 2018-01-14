import PathGenerator from '../../src/services/pathGenerator.js';

test('correct path generated for single movement',() => {
    let m = [{x:1,y:1}]

    let result = PathGenerator.generate(m);

    expect(result).toBe('M 1 1');
})

test('correct path generated for multiline movement',() => {
    let m = [{x:1,y:1},{x:2,y:2},{x:3,y:3}]

    let result = PathGenerator.generate(m);

    expect(result).toBe('M 1 1 L 2 2 L 3 3');
})