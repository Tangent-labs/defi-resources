"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.THIEF_TOKEN_CONFIG = void 0;
const common_1 = require("./common");
const curve_1 = require("../lps/curve");
const stakeDao_1 = require("./stakeDao");
const convex_1 = require("./convex");
exports.THIEF_TOKEN_CONFIG = {
    CVG: {
        isVyper: false,
        slotBalance: 0,
        address: common_1.CVG,
        decimals: 18,
    },
    DAI: {
        isVyper: false,
        slotBalance: 2,
        address: common_1.DAI,
        decimals: 18,
    },
    FRAX: {
        isVyper: false,
        slotBalance: 0,
        address: common_1.FRAX,
        decimals: 18,
    },
    WETH: {
        isVyper: false,
        slotBalance: 3,
        address: common_1.WETH,
        decimals: 18,
    },
    CRV: {
        isVyper: true,
        slotBalance: 3,
        address: common_1.CRV,
        decimals: 18,
    },
    CVX: {
        isVyper: false,
        slotBalance: 0,
        address: common_1.CVX,
        decimals: 18,
    },
    CNC: {
        isVyper: false,
        slotBalance: 0,
        address: common_1.CNC,
        decimals: 18,
    },
    FXS: {
        isVyper: false,
        slotBalance: 0,
        address: common_1.FXS,
        decimals: 18,
    },
    PENDLE: {
        isVyper: false,
        slotBalance: 15,
        address: common_1.PENDLE,
        decimals: 18,
    },
    SDT: {
        isVyper: false,
        slotBalance: 0,
        address: common_1.SDT,
        decimals: 18,
    },
    FRAXBP: {
        isVyper: true,
        slotBalance: 7,
        address: curve_1.CRV_DUO_FRAXBP,
        decimals: 18,
    },
    USDC: {
        isVyper: false,
        slotBalance: 9,
        address: common_1.USDC,
        decimals: 6,
    },
    USDT: {
        isVyper: false,
        slotBalance: 2,
        address: common_1.USDT,
        decimals: 6,
    },
    _3CRV: {
        isVyper: true,
        slotBalance: 3,
        address: curve_1._3CRV,
        decimals: 18,
    },
    CRVUSD: {
        isVyper: true,
        slotBalance: 1,
        address: common_1.crvUSD,
        decimals: 18,
    },
    SDFRAX3CRV: {
        isVyper: false,
        slotBalance: 0,
        address: stakeDao_1.SD_FRAX_3CRV,
        decimals: 18,
    },
    wstETH: {
        isVyper: false,
        slotBalance: 0,
        address: common_1.wstETH,
        decimals: 18,
    },
    FIS: {
        isVyper: false,
        slotBalance: 1,
        address: common_1.FIS,
        decimals: 18,
    },
    LDO: {
        isVyper: false,
        slotBalance: 1,
        address: common_1.LDO,
        decimals: 18,
    },
    SPELL: {
        isVyper: false,
        slotBalance: 0,
        address: common_1.SPELL,
        decimals: 18,
    },
    sd_CRV: {
        isVyper: false,
        slotBalance: 0,
        address: stakeDao_1.sdCRV,
        decimals: 18,
    },
    sd_CRV_GAUGE: {
        isVyper: true,
        slotBalance: 12,
        address: stakeDao_1.sdCRV_GAUGE,
        decimals: 18,
    },
    sd_PENDLE: {
        isVyper: false,
        slotBalance: 0,
        address: stakeDao_1.sdPENDLE,
        decimals: 18,
    },
    sd_FXS: {
        isVyper: false,
        slotBalance: 0,
        address: stakeDao_1.sdFXS,
        decimals: 18,
    },
    // BAL
    sd_BAL: {
        isVyper: false,
        slotBalance: 0,
        address: stakeDao_1.sdBAL,
        decimals: 18,
    },
    BB_A_USD: {
        isVyper: false,
        slotBalance: 0,
        address: stakeDao_1.BB_A_USD,
        decimals: 18,
    },
    BB_A_USD_OLD: {
        isVyper: false,
        slotBalance: 0,
        address: stakeDao_1.BB_A_USD_OLD,
        decimals: 18,
    },
    BAL: {
        isVyper: false,
        slotBalance: 1,
        address: common_1.BAL,
        decimals: 18,
    },
    // ANGLE
    sd_ANGLE: {
        isVyper: false,
        slotBalance: 0,
        address: stakeDao_1.sdANGLE,
        decimals: 18,
    },
    SAN_USD_EUR: {
        isVyper: false,
        slotBalance: 51,
        address: stakeDao_1.SAN_USDC_EUR,
        decimals: 6,
    },
    AG_EUR: {
        isVyper: false,
        slotBalance: 51,
        address: common_1.AG_EUR,
        decimals: 18,
    },
    ANGLE: {
        isVyper: false,
        slotBalance: 0,
        address: common_1.ANGLE,
        decimals: 18,
    },
    FXN: {
        isVyper: true,
        slotBalance: 6,
        address: common_1.FXN,
        decimals: 18,
    },
    sd_FXN: {
        isVyper: false,
        slotBalance: 0,
        address: stakeDao_1.sdFXN,
        decimals: 18,
    },
    // LP
    TRICRYPTO_USDC: {
        isVyper: true,
        slotBalance: 23,
        address: curve_1.CRV_TRI_CRYPTO_USDC,
        decimals: 18,
    },
    CRVUSD_USDT: {
        isVyper: true,
        slotBalance: 20,
        address: curve_1.CRV_DUO_USDT_crvUSD,
        decimals: 18,
    },
    STG_USDC: {
        isVyper: true,
        slotBalance: 6,
        address: curve_1.CRV_DUO_STG_USDC,
        decimals: 18,
    },
    // TricryptoLlama V2
    TRICRYPTO_LLAMA: {
        isVyper: true,
        slotBalance: 23,
        address: curve_1.CRV_TRI_CRYPTO_LLAMA,
        decimals: 18,
    },
    SDCRV_CRV: {
        isVyper: true,
        slotBalance: 20,
        address: curve_1.CRV_DUO_SDCRV_CRV,
        decimals: 18,
    },
    CRVUSD_USDC: {
        isVyper: true,
        slotBalance: 20,
        address: curve_1.CRV_DUO_USDC_crvUSD,
        decimals: 18,
    },
    FRX_ETH_ETH: {
        isVyper: true,
        slotBalance: 7,
        address: curve_1.CRV_DUO_frxETH_ETH,
        decimals: 18,
    },
    TRICRYPTO_USDT: {
        isVyper: true,
        slotBalance: 23,
        address: curve_1.CRV_TRI_CRYPTO_USDT,
        decimals: 18,
    },
    CVXCRV_CRV: {
        isVyper: true,
        slotBalance: 20,
        address: curve_1.CRV_DUO_cvxCRV_CRV,
        decimals: 18,
    },
    SDFXS_FXS: {
        isVyper: true,
        slotBalance: 20,
        address: curve_1.CRV_DUO_SDFXS_FXS,
        decimals: 18,
    },
    AGEUR_EUROC: {
        isVyper: true,
        slotBalance: 24,
        address: curve_1.CRV_DUO_agEUR_EUROC,
        decimals: 18,
    },
    MIM_3CRV: {
        isVyper: true,
        slotBalance: 15,
        address: curve_1.CRV_DUO_MIM_3CRV,
        decimals: 18,
    },
    DETH_FRXETH: {
        isVyper: true,
        slotBalance: 20,
        address: curve_1.CRV_DUO_dETH_frxETH,
        decimals: 18,
    },
    FRAX_USDC: {
        isVyper: true,
        slotBalance: 24,
        address: curve_1.CRV_DUO_FRAXBP,
        decimals: 18,
    },
    ALUSD_FRAX_USDC: {
        isVyper: true,
        slotBalance: 17,
        address: curve_1.CRV_DUO_alUSD_FRAXBP,
        decimals: 18,
    },
    TRICRYPTO_USDT2: {
        isVyper: true,
        slotBalance: 2,
        address: curve_1.CRV_TRI_CRYPTO_USDT2,
        decimals: 18,
    },
    RETH_ETH: {
        isVyper: true,
        slotBalance: 2,
        address: curve_1.CRV_DUO_ETH_rETH,
        decimals: 18,
    },
    CRVUSD_XAI: {
        isVyper: true,
        slotBalance: 20,
        address: curve_1.CRV_DUO_XAI_crvUSD,
        decimals: 18,
    },
    COIL_FRAX_USDC: {
        isVyper: true,
        slotBalance: 6,
        address: curve_1.CRV_DUO_COIL_FRAXBP,
        decimals: 18,
    },
    CRVUSD_SUSD: {
        isVyper: true,
        slotBalance: 20,
        address: curve_1.CRV_DUO_sUSD_CRVUSD,
        decimals: 18,
    },
    CRVUSD_DOLA: {
        isVyper: true,
        slotBalance: 20,
        address: curve_1.CRV_DUO_DOLA_crvUSD,
        decimals: 18,
    },
    MKUSD_FRAX_USDC: {
        isVyper: true,
        slotBalance: 17,
        address: curve_1.CRV_DUO_mkUSD_FRAXBP,
        decimals: 18,
    },
    CNC_ETH: {
        isVyper: true,
        slotBalance: 6,
        address: curve_1.LP_CRV_DUO_ETH_CNC,
        decimals: 18,
    },
    XAI_FRAX_USDC: {
        isVyper: true,
        slotBalance: 17,
        address: curve_1.CRV_DUO_XAI_FRAXBP,
        decimals: 18,
    },
    CRVUSD_FRXETH_SDT: {
        isVyper: true,
        slotBalance: 23,
        address: curve_1.CRV_TRI_CRYPTO_SDT,
        decimals: 18,
    },
    TRICRV: {
        isVyper: true,
        slotBalance: 23,
        address: curve_1.CRV_TRI_CRYPTO_CRV,
        decimals: 18,
    },
    STETH_ETH: {
        isVyper: true,
        slotBalance: 2,
        address: curve_1.CRV_DUO_stETH_ETH,
        decimals: 18,
    },
    _80_BAL_20_WETH: {
        isVyper: false,
        slotBalance: 0,
        address: stakeDao_1._80BAL_20WETH,
        decimals: 18,
    },
    SD_FRAX_3CRV: {
        isVyper: false,
        slotBalance: 0,
        address: stakeDao_1.SD_FRAX_3CRV,
        decimals: 18,
    },
    CRVUSD_FRAX: {
        isVyper: true,
        slotBalance: 20,
        address: curve_1.CRV_DUO_crvUSD_FRAX,
        decimals: 18,
    },
    ETHp_WETH: {
        isVyper: true,
        slotBalance: 6,
        address: curve_1.CRV_DUO_ETHp_WETH,
        decimals: 18,
    },
    WETH_SDT: {
        isVyper: true,
        slotBalance: 6,
        address: curve_1.CRV_DUO_WETH_SDT,
        decimals: 18,
    },
    PXETH_STETH: {
        isVyper: true,
        slotBalance: 38,
        address: curve_1.CRV_DUO_pxETH_stETH,
        decimals: 18,
    },
    PXETH_FRXETH: {
        isVyper: true,
        slotBalance: 38,
        address: curve_1.CRV_DUO_pxETH_frxETH,
        decimals: 18,
    },
    PYUSD_USDC: {
        isVyper: true,
        slotBalance: 38,
        address: curve_1.CRV_DUO_PYUSD_USDC,
        decimals: 18,
    },
    sd_YFI: {
        isVyper: false,
        slotBalance: 0,
        address: stakeDao_1.sdYFI,
        decimals: 18,
    },
    sd_APW: {
        isVyper: false,
        slotBalance: 0,
        address: stakeDao_1.sdAPW,
        decimals: 18,
    },
    CVG_ETH: {
        isVyper: true,
        slotBalance: 22,
        address: curve_1.CRV_DUO_CVG_ETH,
        decimals: 18,
    },
    cvgSDT_SDT: {
        isVyper: true,
        slotBalance: 38,
        address: curve_1.CRV_DUO_cvgSDT_SDT,
        decimals: 18,
    },
    // CONVEX
    CVX_CRV: {
        isVyper: false,
        slotBalance: 0,
        address: convex_1.CVX_CRV,
        decimals: 18,
    },
    CVX_FXS: {
        isVyper: false,
        slotBalance: 0,
        address: convex_1.CVX_FXS,
        decimals: 18,
    },
    CVX_PRISMA: {
        isVyper: false,
        slotBalance: 0,
        address: convex_1.CVX_PRISMA,
        decimals: 18,
    },
    CVX_FXN: {
        isVyper: false,
        slotBalance: 0,
        address: convex_1.CVX_FXN,
        decimals: 18,
    },
    CVX_FPIS: {
        isVyper: false,
        slotBalance: 0,
        address: convex_1.CVX_FPIS,
        decimals: 18,
    },
    //FRAXLP ASSETS
    eUSD: {
        isVyper: false,
        slotBalance: 201,
        address: common_1.eUSD,
        decimals: 18,
    },
    eUSD_FRAXLP: {
        isVyper: true,
        slotBalance: 17,
        address: curve_1.CRV_DUO_eUSD_FRAXBP,
        decimals: 18,
    },
    PRISMA: {
        isVyper: false,
        slotBalance: 7,
        address: common_1.PRISMA,
        decimals: 18,
    },
    FPIS: {
        isVyper: false,
        slotBalance: 0,
        address: common_1.FPIS,
        decimals: 18,
    },
    YFI: {
        isVyper: false,
        slotBalance: 0,
        address: common_1.YFI,
        decimals: 18,
    },
    dYFI: {
        isVyper: false,
        slotBalance: 0,
        address: common_1.dYFI,
        decimals: 18,
    },
    APW: {
        isVyper: false,
        slotBalance: 101,
        address: common_1.APW,
        decimals: 18,
    },
    PYUSD: {
        isVyper: false,
        slotBalance: 1212,
        address: common_1.PYUSD,
        decimals: 6,
    },
    mkUSD: {
        isVyper: false,
        slotBalance: 0,
        address: common_1.mkUSD,
        decimals: 18,
    },
};
