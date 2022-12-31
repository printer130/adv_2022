function canExit(maze) {
  const moves = [[1, 0], [0, 1], [-1, 0], [0, -1]]
  const wall = Array(maze.length).fill("#")
  maze.push(wall)
  maze.unshift(wall)

  maze = maze.map(row => ["#", ...row, "#"])

  function canReallyExit(maze, row, col) {

    return maze[row][col] === 'E'
      || ((maze[row][col] === ' ')
        && (maze[row][col] = '.')
        && moves.some(
          ([deltaRow, deltaCol]) =>
            canReallyExit(maze, row + deltaRow, col + deltaCol)
        ))
  }

  const startRow = maze.findIndex(
    row => row.find(x => x === 'S')
  )

  const startCol = maze[startRow].findIndex(
    col => col === 'S'
  )

  console.log({ startRow, startCol })
  maze[startRow][startCol] = ' '

  console.log(maze)

  const boolean = canReallyExit(maze, startRow, startCol)
  return boolean
}
canExit([
  [' ', ' ', 'W', ' ', 'S'],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
]) // -

/* const res = [
  ['E', 'S', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W']
]
console.log({ q: res.length })
canExit([
  ['E', 'S', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W']
]) */