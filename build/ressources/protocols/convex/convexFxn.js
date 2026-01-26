"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvexFxnPools = void 0;
const curveLP_1 = require("../curve/curveLP");
const ConvexFxnPoolKeys = ["USDC_fxUSD", "GHO_fxUSD", "fxUSD_reUSD", "msUSD_fxUSD"];
exports.ConvexFxnPools = {
    // STABLECOIN POOLS
    USDC_fxUSD: {
        lpToken: curveLP_1.CURVE_LPS.LP_USDC_fxUSD,
        pid: 32,
    },
    GHO_fxUSD: {
        lpToken: curveLP_1.CURVE_LPS.DUO_GHO_fxUSD,
        pid: 14,
    },
    fxUSD_reUSD: {
        lpToken: curveLP_1.CURVE_LPS.DUO_fxUSD_reUSD,
        pid: 38,
    },
    msUSD_fxUSD: {
        lpToken: curveLP_1.CURVE_LPS.DUO_msUSD_fxUSD,
        pid: 41,
    },
};
