export {}

//enum is short for enumeraton, a datatype consisting of a set of named value
// enum as numeric values
/* enum Direction{
    UP=0, 
    DOWN,
    FORWARD
}

const Turning = (direction:number)=>{
    switch (direction) {
        case Direction.UP:
            console.log("Going Up!")
            break;
        case Direction.DOWN:
            console.log("Going Down!")
        default:
            console.log("Going Forward!")
            break;
    }
}
 */

enum Direction{
    UP="UP",
    DOWN="DOWN",
    FORWARD="FORWARD"
}

const directionChange = (direction:"UP"|"DOWN"|"FORWARD")=>{
 switch (direction) {
    case Direction.UP:
        console.log("UP")
        break;
    case Direction.DOWN:
        console.log("DOWN")
        break;
    default:
        console.log("Forward")
        break;
 }
}

directionChange(Direction.DOWN)


