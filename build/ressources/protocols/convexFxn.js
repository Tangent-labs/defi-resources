"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvexFxnPools = void 0;
const curve_1 = require("../lps/curve");
const ConvexFxnPoolKeys = ["USDC_fxUSD"];
exports.ConvexFxnPools = {
    // STABLECOIN POOLS
    USDC_fxUSD: {
        lpToken: curve_1.CRV_LP_USDC_fxUSD,
        pid: 32,
    },
};
