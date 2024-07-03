"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPECIAL_LP_TOKENS = exports.SDASSETS = exports.BALANCER_TYPE = exports.CURVE_TYPE = exports.REWARDS_TOKEN_SD_ASSETS = exports.SD_TOKENS_LIST = void 0;
const common_1 = require("../erc20/common");
const curve_1 = require("../erc20/curve");
const stakeDao_1 = require("../erc20/stakeDao");
const balancer_1 = require("../lps/balancer");
const curve_2 = require("../lps/curve");
exports.SD_TOKENS_LIST = [stakeDao_1.sdCRV, stakeDao_1.sdPENDLE, stakeDao_1.sdFXS, stakeDao_1.sdBAL, stakeDao_1.sdANGLE, stakeDao_1.sdFXN, stakeDao_1.sdYFI, stakeDao_1.sdAPW];
exports.REWARDS_TOKEN_SD_ASSETS = {
    [stakeDao_1.sdCRV_GAUGE]: [curve_2._3CRV, common_1.CRV, common_1.crvUSD],
    [stakeDao_1.sdBAL_GAUGE]: [common_1.BAL, common_1.USDC],
    [stakeDao_1.sdANGLE_GAUGE]: [stakeDao_1.SAN_USDC_EUR, common_1.AG_EUR, common_1.ANGLE],
    [stakeDao_1.sdPENDLE_GAUGE]: [common_1.WETH, common_1.PENDLE],
    [stakeDao_1.sdFXN_GAUGE]: [common_1.wstETH],
    [stakeDao_1.sdFXS_GAUGE]: [common_1.FXS],
    [stakeDao_1.sdYFI_GAUGE]: [common_1.YFI, common_1.dYFI],
    [stakeDao_1.sdAPW_GAUGE]: [common_1.APW],
};
// Mapping
exports.CURVE_TYPE = 1;
exports.BALANCER_TYPE = 2;
exports.SDASSETS = [
    {
        name: "cvgSDT",
        address: common_1.cvgSDT,
        referenceAsset: common_1.SDT,
        referenceIndex: 0,
        pool: curve_2.CRV_DUO_cvgSDT_SDT,
        type: exports.CURVE_TYPE,
        gauge: stakeDao_1.SDT_cvgSDT_SDT_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdCRV",
        address: stakeDao_1.sdCRV,
        referenceAsset: common_1.CRV,
        referenceIndex: 0,
        pool: curve_2.CRV_DUO_SDCRV_CRV,
        type: exports.CURVE_TYPE,
        gauge: stakeDao_1.sdCRV_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdFXS",
        address: stakeDao_1.sdFXS,
        referenceAsset: common_1.FXS,
        referenceIndex: 0,
        pool: curve_2.CRV_DUO_SDFXS_FXS,
        type: exports.CURVE_TYPE,
        gauge: stakeDao_1.sdFXS_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdBAL",
        address: stakeDao_1.sdBAL,
        referenceAsset: common_1.BAL,
        referenceIndex: 0,
        pool: balancer_1.BAL_SDBAL,
        type: exports.BALANCER_TYPE,
        gauge: stakeDao_1.sdBAL_GAUGE,
        referencePool: stakeDao_1._80BAL_20WETH,
        idReferencePool: balancer_1.BAL_80BAL_20WETH_ID,
    },
    {
        name: "sdANGLE",
        address: stakeDao_1.sdANGLE,
        referenceAsset: common_1.ANGLE,
        referenceIndex: 0,
        pool: curve_2.CRV_DUO_SDANGLE_ANGLE,
        type: exports.CURVE_TYPE,
        gauge: stakeDao_1.sdANGLE_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdPENDLE",
        address: stakeDao_1.sdPENDLE,
        referenceAsset: common_1.PENDLE,
        referenceIndex: 0,
        pool: curve_2.CRV_DUO_SDPENDLE_PENDLE,
        type: exports.CURVE_TYPE,
        gauge: stakeDao_1.sdPENDLE_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdFXN",
        address: stakeDao_1.sdFXN,
        referenceAsset: common_1.FXN,
        referenceIndex: 0,
        pool: curve_2.CRV_DUO_SDFXN_FXN,
        type: exports.CURVE_TYPE,
        gauge: stakeDao_1.sdFXN_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdYFI",
        address: stakeDao_1.sdYFI,
        referenceAsset: common_1.YFI,
        referenceIndex: 0,
        pool: curve_2.CRV_DUO_SDYFI_YFI,
        type: exports.CURVE_TYPE,
        gauge: stakeDao_1.sdYFI_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdAPW",
        address: stakeDao_1.sdAPW,
        referenceAsset: common_1.APW,
        referenceIndex: 0,
        pool: curve_2.CRV_DUO_SDAPW_APW,
        type: exports.CURVE_TYPE,
        gauge: stakeDao_1.sdAPW_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
];
exports.SPECIAL_LP_TOKENS = {
    // TriLlama => WsETH
    [curve_1.CURVE_TRI_CRVUSD_TBTC_WSTETH_GAUGE]: [common_1.wstETH],
    // Mim 3CRV => SPELL
    [curve_1.CURVE_MIM_DAI_USDC_USDT_GAUGE]: [common_1.SPELL],
    // rCRV => FIS
    [stakeDao_1.SDT_RETH_ETH_GAUGE]: [common_1.FIS],
    // CNC-ETH => CNC
    [curve_1.CURVE_CNC_ETH_GAUGE]: [common_1.CNC],
    // ETH-stETH => LDO
    [curve_1.CURVE_STETH_ETH_GAUGE]: [common_1.LDO],
};
