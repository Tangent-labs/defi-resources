"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPECIAL_LP_TOKENS = exports.SDASSETS = exports.BALANCER_TYPE = exports.CURVE_TYPE = exports.REWARDS_TOKEN_SD_ASSETS = exports.SD_TOKENS_LIST = void 0;
const curveGauges_1 = require("../protocols/curve/curveGauges");
const stakeDao_1 = require("../erc20/stakeDao");
const balancer_1 = require("../lps/balancer");
const curveLP_1 = require("../protocols/curve/curveLP");
const commonERC20_1 = require("../erc20/commonERC20");
exports.SD_TOKENS_LIST = [stakeDao_1.sdCRV, stakeDao_1.sdPENDLE, stakeDao_1.sdFXS, stakeDao_1.sdBAL, stakeDao_1.sdANGLE, stakeDao_1.sdFXN, stakeDao_1.sdYFI, stakeDao_1.sdAPW];
exports.REWARDS_TOKEN_SD_ASSETS = {
    [stakeDao_1.sdCRV_GAUGE]: [curveLP_1.CURVE_LPS._3CRV, commonERC20_1.COMMON_ERC20S.CRV, commonERC20_1.COMMON_ERC20S.crvUSD],
    [stakeDao_1.sdBAL_GAUGE]: [commonERC20_1.COMMON_ERC20S.BAL, commonERC20_1.COMMON_ERC20S.USDC],
    [stakeDao_1.sdANGLE_GAUGE]: [stakeDao_1.SAN_USDC_EUR, commonERC20_1.COMMON_ERC20S.AG_EUR, commonERC20_1.COMMON_ERC20S.ANGLE],
    [stakeDao_1.sdPENDLE_GAUGE]: [commonERC20_1.COMMON_ERC20S.WETH, commonERC20_1.COMMON_ERC20S.PENDLE],
    [stakeDao_1.sdFXN_GAUGE]: [commonERC20_1.COMMON_ERC20S.wstETH],
    [stakeDao_1.sdFXS_GAUGE]: [commonERC20_1.COMMON_ERC20S.FXS],
    [stakeDao_1.sdYFI_GAUGE]: [commonERC20_1.COMMON_ERC20S.YFI, commonERC20_1.COMMON_ERC20S.dYFI],
    [stakeDao_1.sdAPW_GAUGE]: [commonERC20_1.COMMON_ERC20S.APW],
};
// Mapping
exports.CURVE_TYPE = 1;
exports.BALANCER_TYPE = 2;
exports.SDASSETS = [
    {
        name: "cvgSDT",
        address: commonERC20_1.COMMON_ERC20S.cvgSDT,
        referenceAsset: commonERC20_1.COMMON_ERC20S.SDT,
        referenceIndex: 0,
        pool: curveLP_1.CURVE_LPS.DUO_cvgSDT_SDT,
        type: exports.CURVE_TYPE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdCRV",
        address: stakeDao_1.sdCRV,
        referenceAsset: commonERC20_1.COMMON_ERC20S.CRV,
        referenceIndex: 0,
        pool: curveLP_1.CURVE_LPS.DUO_SDCRV_CRV,
        type: exports.CURVE_TYPE,
        gauge: stakeDao_1.sdCRV_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdFXS",
        address: stakeDao_1.sdFXS,
        referenceAsset: commonERC20_1.COMMON_ERC20S.FXS,
        referenceIndex: 0,
        pool: curveLP_1.CURVE_LPS.DUO_SDFXS_FXS,
        type: exports.CURVE_TYPE,
        gauge: stakeDao_1.sdFXS_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdBAL",
        address: stakeDao_1.sdBAL,
        referenceAsset: commonERC20_1.COMMON_ERC20S.BAL,
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
        referenceAsset: commonERC20_1.COMMON_ERC20S.ANGLE,
        referenceIndex: 0,
        pool: curveLP_1.CURVE_LPS.DUO_SDANGLE_ANGLE,
        type: exports.CURVE_TYPE,
        gauge: stakeDao_1.sdANGLE_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdPENDLE",
        address: stakeDao_1.sdPENDLE,
        referenceAsset: commonERC20_1.COMMON_ERC20S.PENDLE,
        referenceIndex: 0,
        pool: curveLP_1.CURVE_LPS.DUO_SDPENDLE_PENDLE,
        type: exports.CURVE_TYPE,
        gauge: stakeDao_1.sdPENDLE_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdFXN",
        address: stakeDao_1.sdFXN,
        referenceAsset: commonERC20_1.COMMON_ERC20S.FXN,
        referenceIndex: 0,
        pool: curveLP_1.CURVE_LPS.DUO_SDFXN_FXN,
        type: exports.CURVE_TYPE,
        gauge: stakeDao_1.sdFXN_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdYFI",
        address: stakeDao_1.sdYFI,
        referenceAsset: commonERC20_1.COMMON_ERC20S.YFI,
        referenceIndex: 0,
        pool: curveLP_1.CURVE_LPS.DUO_SDYFI_YFI,
        type: exports.CURVE_TYPE,
        gauge: stakeDao_1.sdYFI_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdAPW",
        address: stakeDao_1.sdAPW,
        referenceAsset: commonERC20_1.COMMON_ERC20S.APW,
        referenceIndex: 0,
        pool: curveLP_1.CURVE_LPS.DUO_SDAPW_APW,
        type: exports.CURVE_TYPE,
        gauge: stakeDao_1.sdAPW_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
];
exports.SPECIAL_LP_TOKENS = {
    // TriLlama => WsETH
    [curveGauges_1.CURVE_GAUGES.TRI_crvUSD_TBTC_WSTETH]: [commonERC20_1.COMMON_ERC20S.wstETH],
    // Mim 3CRV => SPELL
    [curveGauges_1.CURVE_GAUGES.MIM_DAI_USDC_USDT]: [commonERC20_1.COMMON_ERC20S.SPELL],
    // rCRV => FIS
    [stakeDao_1.SDT_RETH_ETH_GAUGE]: [commonERC20_1.COMMON_ERC20S.FIS],
    // CNC-ETH => CNC
    [curveGauges_1.CURVE_GAUGES.CNC_ETH]: [commonERC20_1.COMMON_ERC20S.CNC],
    // ETH-stETH => LDO
    [curveGauges_1.CURVE_GAUGES.STETH_ETH]: [commonERC20_1.COMMON_ERC20S.LDO],
};
