"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@rgba-image/common");
exports.fill = (dest, color, dx = 0, dy = 0, dw = dest.width - dx, dh = dest.height - dy) => {
    dx = dx | 0;
    dy = dy | 0;
    dw = dw | 0;
    dh = dh | 0;
    const [r, g, b, a] = color;
    const destData = new Uint32Array(dest.data.buffer);
    const destSize = dest.width * dest.height;
    const v = common_1.rgbaToUint32(r, g, b, a, common_1.isLittleEndian);
    for (let y = 0; y < dh; y++) {
        for (let x = 0; x < dw; x++) {
            const destX = dx + x;
            const destY = dy + y;
            const destIndex = destY * dest.width + destX;
            if (destIndex >= destSize)
                continue;
            destData[destIndex] = v;
        }
    }
};
exports.ClearFactory = (fill) => {
    const clear = (dest, dx = 0, dy = 0, dw = dest.width - dx, dh = dest.height - dy) => fill(dest, [0, 0, 0, 0], dx, dy, dw, dh);
    return clear;
};
exports.clear = exports.ClearFactory(exports.fill);
//# sourceMappingURL=index.js.map