import * as assert from 'assert'
import * as fs from 'fs'
import { createImage } from '@rgba-image/create-image'
import { fromPng } from '@rgba-image/png'
import { fill, clear } from '..'

const fillRegionPng = fs.readFileSync( './src/test/fixtures/fill-region.png' )
const clearRegionPng = fs.readFileSync( './src/test/fixtures/clear-region.png' )
const fillAllPng = fs.readFileSync( './src/test/fixtures/fill-all.png' )
const clearAllPng = fs.readFileSync( './src/test/fixtures/clear-all.png' )

const expectFillRegion = fromPng( fillRegionPng )
const expectClearRegion = fromPng( clearRegionPng )
const expectFillAll = fromPng( fillAllPng )
const expectClearAll = fromPng( clearAllPng )

describe( 'fill', () => {
  describe( 'fill', () => {
    it( 'fill all', () => {
      const image = createImage( 16, 16 )

      fill( image, [ 51, 153, 255, 127 ] )

      assert.deepEqual( image, expectFillAll )
    })

    it( 'fill region', () => {
      const image = createImage( 16, 16 )

      fill( image, [ 51, 153, 255, 127 ], 4, 4, 8, 8 )

      assert.deepEqual( image, expectFillRegion )
    } )

    it( 'ignores out of bounds', () => {
      const image = createImage( 16, 16 )

      fill( image, [ 51, 153, 255, 127 ], 0, 0, 20, 20 )

      assert.deepEqual( image, expectFillAll )
    })


    it( 'does an early return when dw or dh are 0', () => {
      const emptyData = new Uint8Array( 16 * 16 * 4 )
      const swDest = createImage( 16, 16 )
      const shDest = createImage( 16, 16 )

      fill( swDest, [ 51, 153, 255, 127 ], 0, 0, 0, 16 )
      fill( shDest, [ 51, 153, 255, 127 ], 0, 0, 16, 0 )

      assert.deepEqual( swDest.data, emptyData )
      assert.deepEqual( shDest.data, emptyData )
    } )

    // no test, just lazy benchmarking
    it( 'fill big', () => {
      const image = createImage( 2048, 2048 )

      fill( image, [ 51, 153, 255, 127 ], 0, 0, 2560, 2560 )
    })
  })

  describe( 'clear', () => {
    it( 'clear all', () => {
      const image = createImage( 16, 16 )

      fill( image, [ 51, 153, 255, 127 ] )
      clear( image )

      assert.deepEqual( image, expectClearAll )
    } )

    it( 'clear region', () => {
      const image = createImage( 16, 16 )

      fill( image, [ 51, 153, 255, 127 ] )
      clear( image, 4, 4, 8, 8 )

      assert.deepEqual( image, expectClearRegion )
    } )
  })
})
