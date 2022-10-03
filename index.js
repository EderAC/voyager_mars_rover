const prompt = require('prompt');
prompt.start();

prompt.get(['upperRight', 'coordinates', 'commands'], (err, input) => {
    const [x, y, d] = input.coordinates.split(' ');
    const upperRight = input.upperRight.split(' ')
    const finalPos = Rover([x, y], d, upperRight, input.commands);
    console.log(finalPos)
})


function Rover(roverLocation, roverDirection, upperRight, commands){
    if(Number(roverLocation[0]) > Number(upperRight[0]) || Number(roverLocation[1]) > Number(upperRight[1])){
        return 'Rover out of the plateau'
    }

    var directions = ['N', 'E', 'S', 'W'];
    var RoverDirection = roverDirection;
    var RoverLocation = roverLocation;

    for (const c of commands) {
        if(c === 'M') move()
        else turn(c)
    }

    return `${RoverLocation[0]} ${RoverLocation[1]} ${RoverDirection}`

    function move(){
        var x=0, y=0
       
            if(RoverDirection === 'E') x += 1;
            else if(RoverDirection === 'W') x -= 1;       
            else if(RoverDirection === 'N') y += 1;
            else if(RoverDirection === 'S') y -= 1;
            RoverLocation = [ Number(RoverLocation[0]) + x, Number(RoverLocation[1]) + y]
        
    }

    function turn(direction){
        var newDirection = 0
        if(direction === 'L') {
            newDirection = directions.indexOf(RoverDirection) - 1;
        } else if( direction === 'R') {
            newDirection = (directions.indexOf(RoverDirection) + 1) < 4 ? 
                directions.indexOf(RoverDirection) + 1 :
                0;
        } else return;

        RoverDirection = newDirection === -1 ? directions[directions.length + newDirection] : directions[newDirection]
        newDirection = 0
    }

}

module.exports = Rover;