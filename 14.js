function getOptimalPath(path) {

  const aux = (i, j) => {
    if (i === path.length) return 0

    const min = Math.min(
      aux(i + 1, j),
      aux(i + 1, j + 1)
    )
    return min + path[i][j]
  }

  const res = aux(0, 0)
  return res
}