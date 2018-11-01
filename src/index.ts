import { rgbaToUint32, isLittleEndian, MutateColor, Mutate } from '@rgba-image/common'

export const fill: MutateColor = ( dest: ImageData, color: Iterable<number>, dx = 0, dy = 0, dw = dest.width - dx, dh = dest.height - dy ) => {
  dx = dx | 0
  dy = dy | 0
  dw = dw | 0
  dh = dh | 0

  const [ r, g, b, a ] = color

  const destData = new Uint32Array( dest.data.buffer )
  const destSize = dest.width * dest.height

  const v = rgbaToUint32( r, g, b, a, isLittleEndian )

  for ( let y = 0; y < dh; y++ ) {
    for ( let x = 0; x < dw; x++ ) {
      const destX = dx + x
      const destY = dy + y
      const destIndex = destY * dest.width + destX

      if ( destIndex >= destSize ) continue

      destData[ destIndex ] = v
    }
  }
}

export const ClearFactory = ( fill: MutateColor ) => {
  const clear: Mutate = ( dest: ImageData, dx = 0, dy = 0, dw = dest.width - dx, dh = dest.height - dy ) =>
    fill( dest, [ 0, 0, 0, 0 ], dx, dy, dw, dh )

  return clear
}

export const clear = ClearFactory( fill )
