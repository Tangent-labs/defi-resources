"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvexFxnPools = void 0;
const curve_1 = require("../lps/curve");
const ConvexFxnPoolKeys = ["USDC_fxUSD", "GHO_fxUSD", "fxUSD_reUSD", "msUSD_fxUSD"];
exports.ConvexFxnPools = {
    // STABLECOIN POOLS
    USDC_fxUSD: {
        lpToken: curve_1.CRV_LP_USDC_fxUSD,
        pid: 32,
    },
    GHO_fxUSD: {
        lpToken: curve_1.CRV_DUO_GHO_fxUSD,
        pid: 14,
    },
    fxUSD_reUSD: {
        lpToken: curve_1.CRV_DUO_fxUSD_reUSD,
        pid: 38,
    },
    msUSD_fxUSD: {
        lpToken: curve_1.CRV_DUO_msUSD_fxUSD,
        pid: 41,
    },
};
