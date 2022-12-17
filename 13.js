function getFilesToBackup(lastBackup, changes) {
  const res_mapped = changes.filter(change => change[1] > lastBackup)
  const result = res_mapped.map(item => item[0])
  return Array.from(new Set(result)).sort((a, b) => a - b)
}

getFilesToBackup(lastBackup, changes) // => [ 1, 3 ]