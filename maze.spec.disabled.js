// const PathFinderWieldedByAliera = require("./maze");
// let maze = [];
// let pathFinder;
// let start;
// let end;

// function initializePathFinder() {
//     maze = [
//         [
//           { x: 0, y: 0 },
//           { x: 1, y: 0 },
//           { x: 2, y: 0 },
//         ],
//         [
//           { x: 0, y: 1 },
//           { x: 1, y: 1 },
//           { x: 2, y: 1 },
//         ],
//         [
//           { x: 0, y: 2 },
//           { x: 1, y: 2 },
//           { x: 2, y: 2 },
//         ],
//       ];
//       maze.cell = function (x, y) {
//         return this[y][x];
//       };
//       maze[0][0].south = maze.cell(0, 1);
//       maze[0][0].east = maze.cell(1, 0);
//       maze[0][1].east = maze.cell(2, 0);
//       maze[0][1].west = maze.cell(0, 0);
//       maze[0][2].west = maze.cell(1, 0);
//       maze[1][0].north = maze.cell(0, 0);
//       maze[1][0].south = maze.cell(0, 2);
//       maze[1][0].east = maze.cell(1, 1);
//       maze[1][1].south = maze.cell(1, 2);
//       maze[1][1].east = maze.cell(2, 1);
//       maze[1][1].west = maze.cell(0, 1);
//       maze[1][2].west = maze.cell(1, 1);
//       maze[2][0].north = maze.cell(0, 1);
//       maze[2][1].north = maze.cell(1, 1);
//       maze[2][1].east = maze.cell(2, 2);
//       maze[2][2].west = maze.cell(1, 2);
//       start = maze[0][0];
//       end = maze[2][2];
//       pathFinder = new PathFinderWieldedByAliera(start, end);
// }

// describe("PathFinderWieldedByAliera.js", () => {
//   beforeEach(() => {
//     initializePathFinder()
//   });

//   test("goForward should add the direction to choices", () => {
//     const nextDirection = "east";
//     const currentCell = start;
//     const expectedChoices = ["east"];
//     pathFinder.goForward(nextDirection, currentCell);
//     expect(pathFinder.choices[0]).toBe(expectedChoices[0]);
//   });

//   test("go Forward should add the next cell to the path", () => {
//     const nextDirection = "east";
//     const currentCell = start;
//     pathFinder.goForward(nextDirection, currentCell);
//     const expectedPath = [start, start.east];
//     expect(pathFinder.path.length).toBe(2);
//     expect(pathFinder.path[1]).toEqual(expectedPath[1]);
//   });

//   describe("After advancing twice", () => {
//     beforeEach(() => {
//         pathFinder.choices.push('east')
//         pathFinder.path.push(start.east)
//         pathFinder.choices.push('east')
//         pathFinder.path.push(start.east.east)
//     })
//     test("goBack should drop the final (right) cell from the path", () => {
//         const expected = [start, start.east]
//         expect
//     });

//     test("goBack should drop the last (right) direction from choices", () => {
//         const expected = ['east']
//     });

//     test('isBackwards should be true for west if the last move was east.', () => {
//       const actual = pathFinder.isBackwards('west')
//       expect(actual).toBe(true)
//     })

//     test('isBackwards should be false for north if the last move was east.', () => {
//       const actual = pathFinder.isBackwards('north')
//       expect(actual).toBe(false)
//     })
//   });

//   test('isStart should return true if the current cell has the same coordinates as start.', () => {
//     expect(pathFinder.isStart(start)).toBe(true);
//   })

//   test('haveBeenHere should be false if it is a cell not in the path array', () => {
//     const actual = pathFinder.haveBeenHere(start.east)
//     expect(actual).toBe(false)
//   })

//   test('haveBeenHere should be true if the cell in the path array', () => {
//     pathFinder.path.push(start.east)
//     const actual = pathFinder.haveBeenHere(start.east)
//     expect(actual).toBe(true)
//   })


// });
