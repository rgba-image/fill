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
