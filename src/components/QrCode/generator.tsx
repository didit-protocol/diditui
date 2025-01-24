import QRCodeUtil from 'qrcode'
import { JSX } from 'react'

type CoordinateMapping = [number, number[]]

const CONNECTING_ERROR_MARGIN = 0.1
const CIRCLE_SIZE_MODIFIER = 2.5
const QRCODE_MATRIX_MARGIN = 7

function isAdjecentDots(cy: number, otherCy: number, cellSize: number) {
  if (cy === otherCy) {
    return false
  }
  const diff = cy - otherCy < 0 ? otherCy - cy : cy - otherCy

  return diff <= cellSize + CONNECTING_ERROR_MARGIN
}

function getMatrix(value: string, errorCorrectionLevel: QRCodeUtil.QRCodeErrorCorrectionLevel) {
  const arr = Array.prototype.slice.call(
    QRCodeUtil.create(value, { errorCorrectionLevel }).modules.data,
    0
  )
  const sqrt = Math.sqrt(arr.length)

  return arr.reduce(
    (rows, key, index) =>
      (index % sqrt === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows,
    []
  )
}

export const QrCodeUtil = {
  generate(uri: string, size: number, dotColor: string = '#141414', logoSize?: number) {
    const edgeColor = 'transparent'
    const strokeWidth = 5
    const matrix = getMatrix(uri, 'Q')
    const cellSize = size / matrix.length
    const qrList = [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 }
    ]

    const dots: JSX.Element[] = []

    qrList.forEach(({ x, y }) => {
      const x1 = (matrix.length - QRCODE_MATRIX_MARGIN) * cellSize * x
      const y1 = (matrix.length - QRCODE_MATRIX_MARGIN) * cellSize * y
      const borderRadius = 0.3
      for (let i = 0; i < qrList.length; i += 1) {
        const dotSize = cellSize * (QRCODE_MATRIX_MARGIN - i * 2)
        dots.push(
          <rect
            key={`${x}-${y}-${i}`}
            fill={i === 2 ? dotColor : edgeColor}
            width={i === 0 ? dotSize - strokeWidth : dotSize}
            rx={i === 0 ? (dotSize - strokeWidth) * borderRadius : dotSize * borderRadius}
            ry={i === 0 ? (dotSize - strokeWidth) * borderRadius : dotSize * borderRadius}
            stroke={dotColor}
            strokeWidth={i === 0 ? strokeWidth : 0}
            height={i === 0 ? dotSize - strokeWidth : dotSize}
            x={i === 0 ? y1 + cellSize * i + strokeWidth / 2 : y1 + cellSize * i}
            y={i === 0 ? x1 + cellSize * i + strokeWidth / 2 : x1 + cellSize * i}
          />
        )
      }
    })

    const clearArenaSize = logoSize ? Math.floor((logoSize + 25) / cellSize) : 0
    const matrixMiddleStart = matrix.length / 2 - clearArenaSize / 2
    const matrixMiddleEnd = matrix.length / 2 + clearArenaSize / 2 - 1
    const circles: [number, number][] = []

    // Getting coordinates for each of the QR code dots
    matrix.forEach((row: QRCodeUtil.QRCode[], i: number) => {
      row.forEach((_, j: number) => {
        if (matrix[i][j]) {
          if (
            !(
              (i < QRCODE_MATRIX_MARGIN && j < QRCODE_MATRIX_MARGIN) ||
              (i > matrix.length - (QRCODE_MATRIX_MARGIN + 1) && j < QRCODE_MATRIX_MARGIN) ||
              (i < QRCODE_MATRIX_MARGIN && j > matrix.length - (QRCODE_MATRIX_MARGIN + 1))
            )
          ) {
            if (
              !logoSize || // Skip logo space check if logoSize is not provided
              !(
                i > matrixMiddleStart &&
                i < matrixMiddleEnd &&
                j > matrixMiddleStart &&
                j < matrixMiddleEnd
              )
            ) {
              const cx = i * cellSize + cellSize / 2
              const cy = j * cellSize + cellSize / 2
              circles.push([cx, cy])
            }
          }
        }
      })
    })

    // Cx to multiple cys
    const circlesToConnect: Record<number, number[]> = {}

    // Mapping all dots cicles on the same x axis
    circles.forEach(([cx, cy]) => {
      if (circlesToConnect[cx]) {
        circlesToConnect[cx]?.push(cy)
      } else {
        circlesToConnect[cx] = [cy]
      }
    })

    // Drawing lonely dots
    Object.entries(circlesToConnect)
      // Only get dots that have neighbors
      .map(([cx, cys]) => {
        const newCys = cys.filter(cy =>
          cys.every(otherCy => !isAdjecentDots(cy, otherCy, cellSize))
        )

        return [Number(cx), newCys] as CoordinateMapping
      })
      .forEach(([cx, cys]) => {
        cys.forEach(cy => {
          dots.push(<circle cx={cx} cy={cy} fill={dotColor} r={cellSize / CIRCLE_SIZE_MODIFIER} />)
        })
      })

    // Drawing lines for dots that are close to each other
    Object.entries(circlesToConnect)
      // Only get dots that have more than one dot on the x axis
      .filter(([_, cys]) => cys.length > 1)
      // Removing dots with no neighbors
      .map(([cx, cys]) => {
        const newCys = cys.filter(cy => cys.some(otherCy => isAdjecentDots(cy, otherCy, cellSize)))

        return [Number(cx), newCys] as CoordinateMapping
      })
      // Get the coordinates of the first and last dot of a line
      .map(([cx, cys]) => {
        cys.sort((a, b) => (a < b ? -1 : 1))
        const groups: number[][] = []

        for (const cy of cys) {
          const group = groups.find(item =>
            item.some(otherCy => isAdjecentDots(cy, otherCy, cellSize))
          )
          if (group) {
            group.push(cy)
          } else {
            groups.push([cy])
          }
        }

        return [cx, groups.map(item => [item[0], item[item.length - 1]])] as [number, number[][]]
      })
      .forEach(([cx, groups]) => {
        groups.forEach(([y1, y2]) => {
          dots.push(
            <line
              key={`${cx}-${y1}-${y2}`}
              x1={cx}
              x2={cx}
              y1={y1}
              y2={y2}
              stroke={dotColor}
              strokeWidth={cellSize / (CIRCLE_SIZE_MODIFIER / 2)}
              strokeLinecap="round"
            />
          )
        })
      })

    return dots
  }
}
