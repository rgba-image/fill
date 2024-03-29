"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = exports.ClearFactory = exports.fill = void 0;
const common_1 = require("@rgba-image/common");
const fill = (dest, color, dx = 0, dy = 0, dw = dest.width - dx, dh = dest.height - dy) => {
    dx = dx | 0;
    dy = dy | 0;
    dw = dw | 0;
    dh = dh | 0;
    if (dw <= 0 || dh <= 0)
        return;
    const [r = 0, g = 0, b = 0, a = 255] = color;
    const destData = new Uint32Array(dest.data.buffer);
    const destSize = dest.width * dest.height;
    const v = common_1.rgbaToUint32(r, g, b, a, common_1.isLittleEndian);
    for (let y = 0; y < dh; y++) {
        const destY = dy + y;
        if (destY < 0 || destY >= dest.height)
            continue;
        for (let x = 0; x < dw; x++) {
            const destX = dx + x;
            const destIndex = destY * dest.width + destX;
            if (destIndex >= destSize)
                continue;
            destData[destIndex] = v;
        }
    }
};
exports.fill = fill;
const ClearFactory = (fill) => {
    const clear = (dest, dx = 0, dy = 0, dw = dest.width - dx, dh = dest.height - dy) => fill(dest, [0, 0, 0, 0], dx, dy, dw, dh);
    return clear;
};
exports.ClearFactory = ClearFactory;
exports.clear = exports.ClearFactory(exports.fill);
//# sourceMappingURL=index.js.map