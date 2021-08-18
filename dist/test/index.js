"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const fs = require("fs");
const create_image_1 = require("@rgba-image/create-image");
const png_1 = require("@rgba-image/png");
const __1 = require("..");
const fillRegionPng = fs.readFileSync('./src/test/fixtures/fill-region.png');
const clearRegionPng = fs.readFileSync('./src/test/fixtures/clear-region.png');
const fillAllPng = fs.readFileSync('./src/test/fixtures/fill-all.png');
const clearAllPng = fs.readFileSync('./src/test/fixtures/clear-all.png');
const expectFillRegion = png_1.fromPng(fillRegionPng);
const expectClearRegion = png_1.fromPng(clearRegionPng);
const expectFillAll = png_1.fromPng(fillAllPng);
const expectClearAll = png_1.fromPng(clearAllPng);
const allEmpty = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0)
            return false;
    }
    return true;
};
describe('fill', () => {
    describe('fill', () => {
        it('fill all', () => {
            const image = create_image_1.createImage(16, 16);
            __1.fill(image, [51, 153, 255, 127]);
            assert.deepEqual(image, expectFillAll);
        });
        it('fill region', () => {
            const image = create_image_1.createImage(16, 16);
            __1.fill(image, [51, 153, 255, 127], 4, 4, 8, 8);
            assert.deepEqual(image, expectFillRegion);
        });
        it('ignores out of bounds', () => {
            const image = create_image_1.createImage(16, 16);
            __1.fill(image, [51, 153, 255, 127], 0, 0, 20, 20);
            assert.deepEqual(image, expectFillAll);
        });
        it('does an early return when dw or dh are 0', () => {
            const swDest = create_image_1.createImage(16, 16);
            const shDest = create_image_1.createImage(16, 16);
            __1.fill(swDest, [51, 153, 255, 127], 0, 0, 0, 16);
            __1.fill(shDest, [51, 153, 255, 127], 0, 0, 16, 0);
            assert(allEmpty(swDest.data));
            assert(allEmpty(shDest.data));
        });
        // no test, just lazy benchmarking
        it('fill big', () => {
            const image = create_image_1.createImage(2048, 2048);
            __1.fill(image, [51, 153, 255, 127], 0, 0, 2560, 2560);
        });
    });
    describe('clear', () => {
        it('clear all', () => {
            const image = create_image_1.createImage(16, 16);
            __1.fill(image, [51, 153, 255, 127]);
            __1.clear(image);
            assert.deepEqual(image, expectClearAll);
        });
        it('clear region', () => {
            const image = create_image_1.createImage(16, 16);
            __1.fill(image, [51, 153, 255, 127]);
            __1.clear(image, 4, 4, 8, 8);
            assert.deepEqual(image, expectClearRegion);
        });
    });
});
//# sourceMappingURL=index.js.map