const DIRECTIONS = ["north", "east", "south", "west"];
const util = require("util");

class PathFinderWieldedByAliera {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.path = [start];
    this.choices = [];
    this.nextDirection = "";
  }

  findPath(startOn = 0) {
    this.nextDirection = this.getNextDirection(
      this.currentCell(),
      startOn
    );
    if (this.finished()) {
      return this.path;
    } else if (this.canGoForward() === true) {
        this.goForward(this.nextDirection, this.currentCell());
        return this.findPath(0);
    } else {
      const direction = this.goBack();
      return this.findPath(direction);
    }
  }

  goForward(direction, cell) {
    this.path.push(cell[direction]);
    this.choices.push(direction);
  }

  goBack() {
    console.log('go backward')
    this.path.pop();
    const direction = this.choices.pop();
    return DIRECTIONS.indexOf(direction) + 1;
  }

  canGoForward() {
    if (this.nextDirection === false) {
      if (this.isStart(this.currentCell())) {
        throw new Error("Returned to start and have checked all paths.");
      }
      // no more turns
      return false
    }
    // Only check if it's not the first move
    if (this.haveBeenHere(this.currentCell()[this.nextDirection]) && this.path.length > 1) { 
        return false
    }
    return true;
  }

  // should return false if all directions exhausted.
  getNextDirection(maze, startOn = 0) {
    for (let i = startOn; i < DIRECTIONS.length; i++) {
      const direction = DIRECTIONS[i];
      if (maze[direction] && !this.isBackwards(direction)) {
        return direction;
      }
    }
    return false;
  }

  isBackwards(direction) {
    const oppositeDirections = {
      north: "south",
      east: "west",
      south: "north",
      west: "east",
    };
    if (this.choices.length === 0) {
      return false;
    }
    return direction === oppositeDirections[this.lastDirection()];
  }
  
  lastDirection() {
    return this.choices[this.choices.length - 1];
  }

  haveBeenHere(cell) {
    return this.path.indexOf(cell) > -1;
  }

  isStart(cell) {
    if (cell.x == this.start.x && cell.y === this.start.y) {
      return true;
    }
    return false;
  }

  finished() {
    if (
      this.currentCell().x === this.end.x &&
      this.currentCell().y === this.end.y
    ) {
      return true;
    }
    return false;
  }

  currentCell() {
    return this.path[this.path.length - 1]
  }
}

function findPath(start, end) {
  const pathFinder = new PathFinderWieldedByAliera(start, end);
  return pathFinder.findPath();
}
// I wish Santa could do some magic here...

// const width = Math.abs(start.x - end.x)
// const length = Math.abs(start.y - end.y)
// const maze = createMaze(width, height)

// TODO shortest path
// check x diff with current position (position) + or - or 0
// move x if not 0.

// var maze = [
//   [
//     { x: 0, y: 0 },
//     { x: 1, y: 0 },
//   ],
//   [
//     { x: 0, y: 1 },
//     { x: 1, y: 1 },
//   ],
// ];
// maze.cell = function (x, y) {
//   return this[y][x];
// };
// maze[0][0].south = maze.cell(0, 1);
// maze[0][0].east = maze.cell(1, 0);
// maze[0][1].west = maze.cell(0, 0);
// maze[1][0].north = maze.cell(0, 0);
// maze[1][0].east = maze.cell(1, 1);
// maze[1][1].west = maze.cell(0, 1);

// Log
// +-+-+-+
// |     |
// + +-+-+
// |     |
// + + +-+
// | |   |
// +-+-+-+

// var maze = [
//   [
//     { x: 0, y: 0 },
//     { x: 1, y: 0 },
//     { x: 2, y: 0 },
//   ],
//   [
//     { x: 0, y: 1 },
//     { x: 1, y: 1 },
//     { x: 2, y: 1 },
//   ],
//   [
//     { x: 0, y: 2 },
//     { x: 1, y: 2 },
//     { x: 2, y: 2 },
//   ],
// ];
// maze.cell = function (x, y) {
//   return this[y][x];
// };
// maze[0][0].south = maze.cell(0, 1);
// maze[0][0].east = maze.cell(1, 0);
// maze[0][1].east = maze.cell(2, 0);
// maze[0][1].west = maze.cell(0, 0);
// maze[0][2].west = maze.cell(1, 0);
// maze[1][0].north = maze.cell(0, 0);
// maze[1][0].south = maze.cell(0, 2);
// maze[1][0].east = maze.cell(1, 1);
// maze[1][1].south = maze.cell(1, 2);
// maze[1][1].east = maze.cell(2, 1);
// maze[1][1].west = maze.cell(0, 1);
// maze[1][2].west = maze.cell(1, 1);
// maze[2][0].north = maze.cell(0, 1);
// maze[2][1].north = maze.cell(1, 1);
// maze[2][1].east = maze.cell(2, 2);
// maze[2][2].west = maze.cell(1, 2);
// const result = findPath(maze[0][0], maze[2][2]);
// console.log(result);

module.exports = PathFinderWieldedByAliera