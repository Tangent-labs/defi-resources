"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cvxAssets_LP_ARRAY = void 0;
const common_1 = require("../erc20/common");
const convex_1 = require("../erc20/convex");
const curveLP_1 = require("../protocols/curve/curveLP");
const stakeDao_1 = require("./stakeDao");
exports.cvxAssets_LP_ARRAY = [
    {
        name: "cvgCVX",
        address: convex_1.cvgCVX,
        referenceAsset: common_1.CVX,
        referenceIndex: 0,
        pool: curveLP_1.CURVE_LPS.DUO_cvgCVX_CVX1,
        type: stakeDao_1.CURVE_TYPE,
    },
    {
        name: "cvxCRV",
        address: convex_1.cvxCRV,
        referenceAsset: common_1.CRV,
        referenceIndex: 0,
        pool: curveLP_1.CURVE_LPS.DUO_cvxCRV_CRV,
        type: stakeDao_1.CURVE_TYPE,
    },
    {
        name: "cvxFXS",
        address: convex_1.cvxFXS,
        referenceAsset: common_1.FXS,
        referenceIndex: 0,
        pool: curveLP_1.CURVE_LPS.DUO_cvxFXS_FXS,
        type: stakeDao_1.CURVE_TYPE,
    },
    {
        name: "cvxFXN",
        address: convex_1.cvxFXN,
        referenceAsset: common_1.FXN,
        referenceIndex: 0,
        pool: curveLP_1.CURVE_LPS.DUO_cvxFXN_FXN,
        type: stakeDao_1.CURVE_TYPE,
    },
];
