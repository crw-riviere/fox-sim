export default class PathGenerator {
    static generate(m) {
        if (!m) {
            return '';
        }

        // const moveCommand =`M ${m[0].x} ${m[0].y}`;

        // if(m.length <= 1){
        //     return moveCommand;
        // }

        // const lineCommand = m.slice(1, m.length).reduce((a, c) => ` L ${a.x} ${a.y} L ${c.x} ${c.y}`);
        // return moveCommand + lineCommand;

        let moveCommand =`M ${m[0].x} ${m[0].y}`;

        if (m.length > 1) {
            for (let i = 1; i < m.length; i++) {
                moveCommand += ` L ${m[i].x} ${m[i].y}`;
            }
        }

        return moveCommand;
    }
}