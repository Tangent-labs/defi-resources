"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LPS = exports.TYPES_CURVE = void 0;
const curve_1 = require("../erc20/curve");
const stakeDao_1 = require("../erc20/stakeDao");
const curve_2 = require("../lps/curve");
const TYPE_FACTORY = "factory";
const TYPE_MAIN = "main";
const TYPE_FACTORY_CRYPTO = "factory-crypto";
const TYPE_FACTORY_CRVUSD = "factory-crvusd";
const TYPE_FACTORY_TRICRYPTO = "factory-tricrypto";
const TYPE_FACTORY_STABLE_NG = "factory-stable-ng";
const TYPE_CRYPTO = "crypto";
const TYPE_FACTORY_TWOCRYPTO = "factory-twocrypto";
exports.TYPES_CURVE = [
    TYPE_FACTORY,
    TYPE_MAIN,
    TYPE_FACTORY_CRYPTO,
    TYPE_FACTORY_CRVUSD,
    TYPE_FACTORY_TRICRYPTO,
    TYPE_CRYPTO,
    TYPE_FACTORY_STABLE_NG,
    TYPE_FACTORY_TWOCRYPTO,
];
exports.LPS = {
    [curve_2.FRAX3CRV]: { type: TYPE_MAIN, stake_gauge: stakeDao_1.SD_FRAX_3CRV, curve_gauge: curve_1.CURVE_FRAX_3CRV_GAUGE },
    [curve_2.TRI_USDC_WBTC_ETH]: {
        type: TYPE_FACTORY_TRICRYPTO,
        stake_gauge: stakeDao_1.SDT_TRI_USDC_WBTC_ETH_GAUGE,
        curve_gauge: curve_1.CURVE_TRI_USDC_WBTC_ETH_GAUGE,
    },
    [curve_2.CRVUSD_USDT]: { type: TYPE_FACTORY_CRVUSD, stake_gauge: stakeDao_1.SDT_CRVUSD_USDT_GAUGE, curve_gauge: curve_1.CURVE_CRVUSD_USDT_GAUGE },
    [curve_2.STG_USDC_LP]: {
        type: TYPE_FACTORY_CRYPTO,
        stake_gauge: stakeDao_1.SDT_STG_USDC_GAUGE,
        curve_gauge: curve_1.CURVE_STG_USDC_GAUGE,
        curve_pool: curve_2.STG_USDC_POOL,
    },
    [curve_2.SDCRV_CRV]: { type: TYPE_FACTORY, stake_gauge: stakeDao_1.SDT_SDCRV_CRV_GAUGE, curve_gauge: curve_1.CURVE_SDCRV_CRV_GAUGE },
    [curve_2.CRVUSD_USDC]: { type: TYPE_FACTORY_CRVUSD, stake_gauge: stakeDao_1.SDT_CRVUSD_USDC_GAUGE, curve_gauge: curve_1.CURVE_CRVUSD_USDC_GAUGE },
    [curve_2.FRXETH_ETH_LP]: {
        type: TYPE_MAIN,
        stake_gauge: stakeDao_1.SDT_FRXETH_ETH_GAUGE,
        curve_gauge: curve_1.CURVE_FRXETH_ETH_GAUGE,
        curve_pool: curve_2.FRXETH_ETH_POOL,
    },
    [curve_2.TRI_USDT_WBTC_ETH_1]: {
        type: TYPE_FACTORY_TRICRYPTO,
        stake_gauge: stakeDao_1.SDT_TRI_USDT_WBTC_ETH_1_GAUGE,
        curve_gauge: curve_1.CURVE_TRI_USDT_WBTC_ETH_1_GAUGE,
    },
    [curve_2.TRI_CRVUSD_TBTC_WSTETH]: {
        type: TYPE_FACTORY_TRICRYPTO,
        stake_gauge: stakeDao_1.SDT_TRI_CRVUSD_TBTC_WSTETH_GAUGE,
        curve_gauge: curve_1.CURVE_TRI_CRVUSD_TBTC_WSTETH_GAUGE,
    },
    [curve_2.AGEUR_EUROC]: { type: TYPE_FACTORY, stake_gauge: stakeDao_1.SDT_AGEUR_EUROC_GAUGE, curve_gauge: curve_1.CURVE_AGEUR_EUROC_GAUGE },
    [curve_2.MIM_DAI_USDC_USDT]: { type: TYPE_FACTORY, stake_gauge: stakeDao_1.SDT_MIM_DAI_USDC_USDT_GAUGE, curve_gauge: curve_1.CURVE_MIM_DAI_USDC_USDT_GAUGE },
    [curve_2.CRV_DUO_cvxCRV_CRV]: { type: TYPE_FACTORY, stake_gauge: stakeDao_1.SDT_CVXCRV_CRV_GAUGE, curve_gauge: curve_1.CURVE_CVXCRV_CRV_GAUGE },
    [curve_2.SDFXS_FXS]: { type: TYPE_FACTORY, stake_gauge: stakeDao_1.SDT_SDFXS_FXS_GAUGE, curve_gauge: curve_1.CURVE_SDFXS_FXS_GAUGE },
    [curve_2.FRAX_USDC_LP]: {
        type: TYPE_MAIN,
        stake_gauge: stakeDao_1.SDT_FRAX_USDC_GAUGE,
        curve_gauge: curve_1.CURVE_FRAX_USDC_GAUGE,
        curve_pool: curve_2.FRAX_USDC_POOL,
    },
    [curve_2.ALUSD_FRAX_USDC]: { type: TYPE_FACTORY, stake_gauge: stakeDao_1.SDT_ALUSD_FRAX_USDC_GAUGE, curve_gauge: curve_1.CURVE_ALUSD_FRAX_USDC_GAUGE },
    [curve_2.TRI_USDT_WBTC_ETH_2_LP]: {
        type: TYPE_CRYPTO,
        stake_gauge: stakeDao_1.SDT_TRI_USDT_WBTC_ETH_2_GAUGE,
        curve_gauge: curve_1.CURVE_TRI_USDT_WBTC_ETH_2_GAUGE,
        curve_pool: curve_2.TRI_USDT_WBTC_ETH_2_POOL,
    },
    [curve_2.RETH_ETH_LP]: {
        type: TYPE_MAIN,
        stake_gauge: stakeDao_1.SDT_RETH_ETH_GAUGE,
        curve_gauge: curve_1.CURVE_RETH_ETH_GAUGE,
        curve_pool: curve_2.RETH_ETH_POOL,
    },
    [curve_2.CRVUSD_XAI]: { type: TYPE_FACTORY_CRVUSD, stake_gauge: stakeDao_1.SDT_CRVUSD_XAI_GAUGE, curve_gauge: curve_1.CURVE_CRVUSD_XAI_GAUGE },
    [curve_2.COIL_FRAX_USDC_LP]: {
        type: TYPE_FACTORY_CRYPTO,
        stake_gauge: stakeDao_1.SDT_COIL_FRAX_USDC_GAUGE,
        curve_gauge: curve_1.CURVE_COIL_FRAX_USDC_GAUGE,
        curve_pool: curve_2.COIL_FRAX_USDC_POOL,
    },
    [curve_2.CRVUSD_SUSD]: { type: TYPE_FACTORY_CRVUSD, stake_gauge: stakeDao_1.SDT_CRVUSD_SUSD_GAUGE, curve_gauge: curve_1.CURVE_CRVUSD_SUSD_GAUGE },
    [curve_2.CRVUSD_DOLA]: { type: TYPE_FACTORY_CRVUSD, stake_gauge: stakeDao_1.SDT_CRVUSD_DOLA_GAUGE, curve_gauge: curve_1.CURVE_CRVUSD_DOLA_GAUGE },
    [curve_2.TRI_CRVUSD_ETH_CRV]: {
        type: TYPE_FACTORY_TRICRYPTO,
        stake_gauge: stakeDao_1.SDT_TRI_CRVUSD_ETH_CRV_GAUGE,
        curve_gauge: curve_1.CURVE_TRI_CRVUSD_ETH_CRV_GAUGE,
    },
    [curve_2.MKUSD_FRAX_USDC]: { type: TYPE_FACTORY, stake_gauge: stakeDao_1.SDT_MKUSD_FRAX_USDC_GAUGE, curve_gauge: curve_1.CURVE_MKUSD_FRAX_USDC_GAUGE },
    [curve_2.CNC_ETH_LP]: { type: TYPE_FACTORY_CRYPTO, stake_gauge: stakeDao_1.SDT_CNC_ETH_GAUGE, curve_gauge: curve_1.CURVE_CNC_ETH_GAUGE, curve_pool: curve_2.CNC_ETH_POOL },
    [curve_2.XAI_FRAX_USDC]: { type: TYPE_FACTORY, stake_gauge: stakeDao_1.SDT_XAI_FRAX_USDC_GAUGE, curve_gauge: curve_1.CURVE_XAI_FRAX_USDC_GAUGE },
    [curve_2.TRI_CRVUSD_FRXETH_SDT]: {
        type: TYPE_FACTORY_TRICRYPTO,
        stake_gauge: stakeDao_1.SDT_TRI_CRVUSD_FRXETH_SDT_GAUGE,
        curve_gauge: curve_1.CURVE_TRI_CRVUSD_FRXETH_SDT_GAUGE,
    },
    [curve_2.STETH_ETH_LP]: {
        type: TYPE_MAIN,
        stake_gauge: stakeDao_1.SDT_STETH_ETH_GAUGE,
        curve_gauge: curve_1.CURVE_STETH_ETH_GAUGE,
        curve_pool: curve_2.STETH_ETH_POOL,
    },
    [curve_2.DETH_FRXETH]: { type: TYPE_FACTORY, stake_gauge: stakeDao_1.SDT_DETH_FRXETH_GAUGE, curve_gauge: curve_1.CURVE_DETH_FRXETH_GAUGE },
    [curve_2.CRVUSD_FRAX]: { type: TYPE_FACTORY_CRVUSD, stake_gauge: stakeDao_1.SDT_CRVUSD_FRAX_GAUGE, curve_gauge: curve_1.CURVE_CRVUSD_FRAX_GAUGE },
    [curve_2.ETHp_WETH_LP]: {
        type: TYPE_FACTORY_CRYPTO,
        stake_gauge: stakeDao_1.SDT_ETHp_WETH_GAUGE,
        curve_gauge: curve_1.CURVE_ETHp_WETH_GAUGE,
        curve_pool: curve_2.ETHp_WETH_POOL,
    },
    [curve_2.WETH_SDT_LP]: {
        type: TYPE_FACTORY_CRYPTO,
        stake_gauge: stakeDao_1.SDT_WETH_SDT_GAUGE,
        curve_gauge: curve_1.CURVE_WETH_SDT_GAUGE,
        curve_pool: curve_2.WETH_SDT_POOL,
    },
    [curve_2.CRV_DUO_PXETH_STETH]: {
        type: TYPE_FACTORY_STABLE_NG,
        stake_gauge: stakeDao_1.SDT_PXETH_STETH_GAUGE,
        curve_gauge: curve_1.CURVE_PXETH_STETH_GAUGE,
    },
    [curve_2.CRV_DUO_PXETH_FRXETH]: {
        type: TYPE_FACTORY_STABLE_NG,
        stake_gauge: stakeDao_1.SDT_PXETH_FRXETH_GAUGE,
        curve_gauge: curve_1.CURVE_PXETH_FRXETH_GAUGE,
    },
    [curve_2.CRV_DUO_PYUSD_USDC]: {
        type: TYPE_FACTORY_STABLE_NG,
        stake_gauge: stakeDao_1.SDT_PYUSD_USDC_GAUGE,
        curve_gauge: curve_1.CURVE_PYUSD_USDC_GAUGE,
    },
    [curve_2.CRV_DUO_CVG_ETH]: {
        type: TYPE_FACTORY_TWOCRYPTO,
        stake_gauge: stakeDao_1.SDT_CVG_ETH_GAUGE,
        curve_gauge: curve_1.CURVE_CVG_ETH_GAUGE,
    },
    [curve_2.CRV_DUO_cvgSDT_SDT]: {
        type: TYPE_FACTORY_STABLE_NG,
        stake_gauge: stakeDao_1.SDT_cvgSDT_SDT_GAUGE,
        curve_gauge: curve_1.CURVE_cvgSDT_SDT_GAUGE,
    },
};
