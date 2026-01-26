"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LPS = exports.TYPES_CURVE = void 0;
const curveGauges_1 = require("../protocols/curve/curveGauges");
const stakeDao_1 = require("../erc20/stakeDao");
const curveLP_1 = require("../protocols/curve/curveLP");
const TYPE_FACTORY = "factory";
const TYPE_MAIN = "main";
const TYPE_FACTORY_CRYPTO = "factory-crypto";
const TYPE_FACTORY_crvUSD = "factory-crvUSD";
const TYPE_FACTORY_TRICRYPTO = "factory-tricrypto";
const TYPE_FACTORY_STABLE_NG = "factory-stable-ng";
const TYPE_CRYPTO = "crypto";
const TYPE_FACTORY_TWOCRYPTO = "factory-twocrypto";
exports.TYPES_CURVE = [
    TYPE_FACTORY,
    TYPE_MAIN,
    TYPE_FACTORY_CRYPTO,
    TYPE_FACTORY_crvUSD,
    TYPE_FACTORY_TRICRYPTO,
    TYPE_CRYPTO,
    TYPE_FACTORY_STABLE_NG,
    TYPE_FACTORY_TWOCRYPTO,
];
exports.LPS = {
    [curveLP_1.CURVE_LPS.FRAX3CRV]: { type: TYPE_MAIN, stake_gauge: stakeDao_1.SD_FRAX_3CRV, curve_gauge: curveGauges_1.CURVE_GAUGES.FRAX_3CRV },
    [curveLP_1.CURVE_LPS.TRI_USDC_WBTC_ETH]: {
        type: TYPE_FACTORY_TRICRYPTO,
        stake_gauge: stakeDao_1.SDT_TRI_USDC_WBTC_ETH_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.TRI_USDC_WBTC_ETH,
    },
    [curveLP_1.CURVE_LPS.crvUSD_USDT]: { type: TYPE_FACTORY_crvUSD, stake_gauge: stakeDao_1.SDT_crvUSD_USDT_GAUGE, curve_gauge: curveGauges_1.CURVE_GAUGES.crvUSD_USDT },
    [curveLP_1.CURVE_LPS.STG_USDC_LP]: {
        type: TYPE_FACTORY_CRYPTO,
        stake_gauge: stakeDao_1.SDT_STG_USDC_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.STG_USDC,
        curve_pool: curveLP_1.CURVE_LPS.STG_USDC_POOL,
    },
    [curveLP_1.CURVE_LPS.DUO_SDCRV_CRV]: { type: TYPE_FACTORY, stake_gauge: stakeDao_1.SDT_SDCRV_CRV_GAUGE, curve_gauge: curveGauges_1.CURVE_GAUGES.SDCRV_CRV },
    [curveLP_1.CURVE_LPS.crvUSD_USDC]: { type: TYPE_FACTORY_crvUSD, stake_gauge: stakeDao_1.SDT_crvUSD_USDC_VAULT, curve_gauge: curveGauges_1.CURVE_GAUGES.crvUSD_USDC },
    [curveLP_1.CURVE_LPS.FRXETH_ETH_LP]: {
        type: TYPE_MAIN,
        stake_gauge: stakeDao_1.SDT_FRXETH_ETH_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.FRXETH_ETH,
        curve_pool: curveLP_1.CURVE_LPS.FRXETH_ETH_POOL,
    },
    [curveLP_1.CURVE_LPS.TRI_USDT_WBTC_ETH_1]: {
        type: TYPE_FACTORY_TRICRYPTO,
        stake_gauge: stakeDao_1.SDT_TRI_USDT_WBTC_ETH_1_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.TRI_USDT_WBTC_ETH_1,
    },
    [curveLP_1.CURVE_LPS.TRI_crvUSD_TBTC_WSTETH]: {
        type: TYPE_FACTORY_TRICRYPTO,
        stake_gauge: stakeDao_1.SDT_TRI_crvUSD_TBTC_WSTETH_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.TRI_crvUSD_TBTC_WSTETH,
    },
    [curveLP_1.CURVE_LPS.AGEUR_EUROC]: { type: TYPE_FACTORY, stake_gauge: stakeDao_1.SDT_AGEUR_EUROC_GAUGE, curve_gauge: curveGauges_1.CURVE_GAUGES.AGEUR_EUROC },
    [curveLP_1.CURVE_LPS.MIM_DAI_USDC_USDT]: { type: TYPE_FACTORY, stake_gauge: stakeDao_1.SDT_MIM_DAI_USDC_USDT_GAUGE, curve_gauge: curveGauges_1.CURVE_GAUGES.MIM_DAI_USDC_USDT },
    [curveLP_1.CURVE_LPS.DUO_cvxCRV_CRV]: { type: TYPE_FACTORY, stake_gauge: stakeDao_1.SDT_CVXCRV_CRV_GAUGE, curve_gauge: curveGauges_1.CURVE_GAUGES.CVXCRV_CRV },
    [curveLP_1.CURVE_LPS.SDFXS_FXS]: { type: TYPE_FACTORY, stake_gauge: stakeDao_1.SDT_SDFXS_FXS_GAUGE, curve_gauge: curveGauges_1.CURVE_GAUGES.SDFXS_FXS },
    [curveLP_1.CURVE_LPS.FRAX_USDC_LP]: {
        type: TYPE_MAIN,
        stake_gauge: stakeDao_1.SDT_FRAX_USDC_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.FRAX_USDC,
        curve_pool: curveLP_1.CURVE_LPS.FRAX_USDC_POOL,
    },
    [curveLP_1.CURVE_LPS.ALUSD_FRAX_USDC]: { type: TYPE_FACTORY, stake_gauge: stakeDao_1.SDT_ALUSD_FRAX_USDC_GAUGE, curve_gauge: curveGauges_1.CURVE_GAUGES.ALUSD_FRAX_USDC },
    [curveLP_1.CURVE_LPS.TRI_USDT_WBTC_ETH_2_LP]: {
        type: TYPE_CRYPTO,
        stake_gauge: stakeDao_1.SDT_TRI_USDT_WBTC_ETH_2_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.TRI_USDT_WBTC_ETH_2,
        curve_pool: curveLP_1.CURVE_LPS.TRI_USDT_WBTC_ETH_2_POOL,
    },
    [curveLP_1.CURVE_LPS.RETH_ETH_LP]: {
        type: TYPE_MAIN,
        stake_gauge: stakeDao_1.SDT_RETH_ETH_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.RETH_ETH,
        curve_pool: curveLP_1.CURVE_LPS.RETH_ETH_POOL,
    },
    [curveLP_1.CURVE_LPS.crvUSD_XAI]: { type: TYPE_FACTORY_crvUSD, stake_gauge: stakeDao_1.SDT_crvUSD_XAI_GAUGE, curve_gauge: curveGauges_1.CURVE_GAUGES.crvUSD_XAI },
    [curveLP_1.CURVE_LPS.COIL_FRAX_USDC_LP]: {
        type: TYPE_FACTORY_CRYPTO,
        stake_gauge: stakeDao_1.SDT_COIL_FRAX_USDC_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.COIL_FRAX_USDC,
        curve_pool: curveLP_1.CURVE_LPS.COIL_FRAX_USDC_POOL,
    },
    [curveLP_1.CURVE_LPS.crvUSD_SUSD]: { type: TYPE_FACTORY_crvUSD, stake_gauge: stakeDao_1.SDT_crvUSD_SUSD_GAUGE, curve_gauge: curveGauges_1.CURVE_GAUGES.crvUSD_SUSD },
    [curveLP_1.CURVE_LPS.crvUSD_DOLA]: { type: TYPE_FACTORY_crvUSD, stake_gauge: stakeDao_1.SDT_crvUSD_DOLA_GAUGE, curve_gauge: curveGauges_1.CURVE_GAUGES.crvUSD_DOLA },
    [curveLP_1.CURVE_LPS.TRI_crvUSD_ETH_CRV]: {
        type: TYPE_FACTORY_TRICRYPTO,
        stake_gauge: stakeDao_1.SDT_TRI_crvUSD_ETH_CRV_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.TRI_crvUSD_ETH_CRV
    },
    [curveLP_1.CURVE_LPS.MKUSD_FRAX_USDC]: { type: TYPE_FACTORY, stake_gauge: stakeDao_1.SDT_MKUSD_FRAX_USDC_GAUGE, curve_gauge: curveGauges_1.CURVE_GAUGES.MKUSD_FRAX_USDC },
    [curveLP_1.CURVE_LPS.CNC_ETH_LP]: { type: TYPE_FACTORY_CRYPTO, stake_gauge: stakeDao_1.SDT_CNC_ETH_GAUGE, curve_gauge: curveGauges_1.CURVE_GAUGES.CNC_ETH, curve_pool: curveLP_1.CURVE_LPS.CNC_ETH_POOL },
    [curveLP_1.CURVE_LPS.XAI_FRAX_USDC]: { type: TYPE_FACTORY, stake_gauge: stakeDao_1.SDT_XAI_FRAX_USDC_GAUGE, curve_gauge: curveGauges_1.CURVE_GAUGES.XAI_FRAX_USDC },
    [curveLP_1.CURVE_LPS.TRI_crvUSD_FRXETH_SDT]: {
        type: TYPE_FACTORY_TRICRYPTO,
        stake_gauge: stakeDao_1.SDT_TRI_crvUSD_FRXETH_SDT_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.TRI_crvUSD_FRXETH_SDT,
    },
    [curveLP_1.CURVE_LPS.STETH_ETH_LP]: {
        type: TYPE_MAIN,
        stake_gauge: stakeDao_1.SDT_STETH_ETH_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.STETH_ETH,
        curve_pool: curveLP_1.CURVE_LPS.STETH_ETH_POOL,
    },
    [curveLP_1.CURVE_LPS.DETH_FRXETH]: { type: TYPE_FACTORY, stake_gauge: stakeDao_1.SDT_DETH_FRXETH_GAUGE, curve_gauge: curveGauges_1.CURVE_GAUGES.DETH_FRXETH },
    [curveLP_1.CURVE_LPS.crvUSD_FRAX]: { type: TYPE_FACTORY_crvUSD, stake_gauge: stakeDao_1.SDT_crvUSD_FRAX_GAUGE, curve_gauge: curveGauges_1.CURVE_GAUGES.crvUSD_FRAX },
    [curveLP_1.CURVE_LPS.ETHp_WETH_LP]: {
        type: TYPE_FACTORY_CRYPTO,
        stake_gauge: stakeDao_1.SDT_ETHp_WETH_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.ETHp_WETH,
        curve_pool: curveLP_1.CURVE_LPS.ETHp_WETH_POOL,
    },
    [curveLP_1.CURVE_LPS.WETH_SDT_LP]: {
        type: TYPE_FACTORY_CRYPTO,
        stake_gauge: stakeDao_1.SDT_WETH_SDT_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.WETH_SDT,
        curve_pool: curveLP_1.CURVE_LPS.WETH_SDT_POOL,
    },
    [curveLP_1.CURVE_LPS.DUO_pxETH_stETH]: {
        type: TYPE_FACTORY_STABLE_NG,
        stake_gauge: stakeDao_1.SDT_PXETH_STETH_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.PXETH_STETH,
    },
    [curveLP_1.CURVE_LPS.DUO_PXETH_FRXETH]: {
        type: TYPE_FACTORY_STABLE_NG,
        stake_gauge: stakeDao_1.SDT_PXETH_FRXETH_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.PXETH_FRXETH,
    },
    [curveLP_1.CURVE_LPS.DUO_PYUSD_USDC]: {
        type: TYPE_FACTORY_STABLE_NG,
        stake_gauge: stakeDao_1.SDT_PYUSD_USDC_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.PYUSD_USDC,
    },
    [curveLP_1.CURVE_LPS.DUO_CVG_ETH]: {
        type: TYPE_FACTORY_TWOCRYPTO,
        stake_gauge: stakeDao_1.SDT_CVG_ETH_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.CVG_ETH,
    },
    [curveLP_1.CURVE_LPS.DUO_cvgSDT_SDT]: {
        type: TYPE_FACTORY_STABLE_NG,
        stake_gauge: stakeDao_1.SDT_cvgSDT_SDT_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.cvgSDT_SDT,
    },
    [curveLP_1.CURVE_LPS.DUO_cvgCVX_CVX1]: {
        type: TYPE_FACTORY_STABLE_NG,
        stake_gauge: stakeDao_1.SDT_cvgCVX_CVX1_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.cvgCVX_CVX1
    },
    [curveLP_1.CURVE_LPS.DUO_crvUSD_ZUNUSD]: {
        type: TYPE_FACTORY_STABLE_NG,
        stake_gauge: stakeDao_1.SDT_crvUSD_zunUSD_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.crvUSD_zunUSD,
    },
    [curveLP_1.CURVE_LPS.DUO_ZUNETH_FRXETH]: {
        type: TYPE_FACTORY_STABLE_NG,
        stake_gauge: stakeDao_1.SDT_zunETH_frxETH_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.zunETH_frxETH,
    },
    [curveLP_1.CURVE_LPS.DUO_PYUSD_crvUSD]: {
        type: TYPE_FACTORY_STABLE_NG,
        stake_gauge: stakeDao_1.SDT_PYUSD_crvUSD_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.PYUSD_crvUSD,
    },
    [curveLP_1.CURVE_LPS.DUO_ETH_CVX_TOKEN]: {
        type: TYPE_MAIN,
        stake_gauge: stakeDao_1.SDT_CVX_ETH_GAUGE,
        curve_gauge: curveGauges_1.CURVE_GAUGES.CVX_ETH,
        curve_pool: curveLP_1.CURVE_LPS.DUO_ETH_CVX,
    },
};
