"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cvxAssets_LP_ARRAY = void 0;
const common_1 = require("../erc20/common");
const convex_1 = require("../erc20/convex");
const curve_1 = require("../lps/curve");
const stakeDao_1 = require("./stakeDao");
exports.cvxAssets_LP_ARRAY = [
    {
        name: "cvgCVX",
        address: convex_1.cvgCVX,
        referenceAsset: common_1.CVX,
        referenceIndex: 0,
        pool: curve_1.CRV_DUO_cvgCVX_CVX1,
        type: stakeDao_1.CURVE_TYPE,
    },
    {
        name: "cvxCRV",
        address: convex_1.CVX_CRV,
        referenceAsset: common_1.CRV,
        referenceIndex: 0,
        pool: curve_1.CRV_DUO_cvxCRV_CRV,
        type: stakeDao_1.CURVE_TYPE,
    },
    {
        name: "cvxFXS",
        address: convex_1.CVX_FXS,
        referenceAsset: common_1.FXS,
        referenceIndex: 0,
        pool: curve_1.CRV_DUO_cvxFXS_FXS,
        type: stakeDao_1.CURVE_TYPE,
    },
    {
        name: "cvxFXN",
        address: convex_1.CVX_FXN,
        referenceAsset: common_1.FXN,
        referenceIndex: 0,
        pool: curve_1.CRV_DUO_cvxFXN_FXN,
        type: stakeDao_1.CURVE_TYPE,
    },
    {
        name: "cvxPRISMA",
        address: convex_1.CVX_PRISMA,
        referenceAsset: common_1.PRISMA,
        referenceIndex: 0,
        pool: curve_1.CRV_DUO_cvxPRISMA_PRISMA,
        type: stakeDao_1.CURVE_TYPE,
    },
];
