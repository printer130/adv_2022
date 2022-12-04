function fitsInOneBox(boxes) {
  let isInOneBox = false
  const dicc = ["l", "w", "h"]

  const ascList = ({ list, side }) => list.sort((a, b) => a[side] - b[side])

  dicc.forEach((letter) => {
    const list = ascList({ list: boxes, side: letter })

    for (let idx = 0; idx < list.length - 1; idx++) {
      if (list[idx]["l"] < list[idx + 1]["l"]
        & list[idx]["w"] < list[idx + 1]["w"]
        & list[idx]["h"] < list[idx + 1]["h"]) {
        isInOneBox = true
        continue
      } else {
        isInOneBox = false
        break
      }
    }
  })

  return isInOneBox
}

const boxes = [
  { l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 },
]

console.log(fitsInOneBox(boxes))