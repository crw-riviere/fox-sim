import Fox from '../../src/models/fox.js';

test('fox less than boundaries moves within',() => {
    let fox = new Fox({height:1, width:1},-1,-1);
    fox.moveWithinBoundaries();

    expect(fox.x).toEqual(0);
    expect(fox.y).toEqual(0);
})


test('fox more than boundaries moves within',() => {
    let fox = new Fox({height:1, width:1},2,2);
    fox.moveWithinBoundaries();

    expect(fox.x).toEqual(0);
    expect(fox.y).toEqual(0);
})