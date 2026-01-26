"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cvxAssets_LP_ARRAY = void 0;
const commonERC20_1 = require("../erc20/commonERC20");
const convex_1 = require("../erc20/convex");
const curveLP_1 = require("../protocols/curve/curveLP");
const stakeDao_1 = require("./stakeDao");
exports.cvxAssets_LP_ARRAY = [
    {
        name: "cvgCVX",
        address: convex_1.cvgCVX,
        referenceAsset: commonERC20_1.COMMON_ERC20S.CVX,
        referenceIndex: 0,
        pool: curveLP_1.CURVE_LPS.DUO_cvgCVX_CVX1,
        type: stakeDao_1.CURVE_TYPE,
    },
    {
        name: "cvxCRV",
        address: convex_1.cvxCRV,
        referenceAsset: commonERC20_1.COMMON_ERC20S.CRV,
        referenceIndex: 0,
        pool: curveLP_1.CURVE_LPS.DUO_cvxCRV_CRV,
        type: stakeDao_1.CURVE_TYPE,
    },
    {
        name: "cvxFXS",
        address: convex_1.cvxFXS,
        referenceAsset: commonERC20_1.COMMON_ERC20S.FXS,
        referenceIndex: 0,
        pool: curveLP_1.CURVE_LPS.DUO_cvxFXS_FXS,
        type: stakeDao_1.CURVE_TYPE,
    },
    {
        name: "cvxFXN",
        address: convex_1.cvxFXN,
        referenceAsset: commonERC20_1.COMMON_ERC20S.FXN,
        referenceIndex: 0,
        pool: curveLP_1.CURVE_LPS.DUO_cvxFXN_FXN,
        type: stakeDao_1.CURVE_TYPE,
    },
];
