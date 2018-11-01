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