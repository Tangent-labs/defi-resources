

import {
    SD_FRAX_3CRV,
    sdCRV,
    sdCRV_GAUGE,
    sdPENDLE,
    sdFXS,
    sdBAL,
    BB_A_USD,
    sdANGLE,
    SAN_USDC_EUR,
    sdFXN,
    sdYFI,
    sdAPW,
    _80BAL_20WETH,
    BB_A_USD_OLD,
} from "./stakeDao";
import { cvxCRV, cvxFXS, cvxFXN, cvgCVX } from "./convex";
import { CURVE_LPS } from "../protocols/curve/curveLP";
import { COMMON_ERC20S } from "./commonERC20";

export const THIEF_TOKEN_CONFIG: {
    [tokenName: string]: {
        isVyper: boolean;
        slotBalance: number;
        address: string;
        decimals: number;
    };
} = {
    cvgSDT: {
        address: COMMON_ERC20S.cvgSDT,
        isVyper: false,
        slotBalance: 0,
        decimals: 18,
    },
    cvgCVX: {
        address: cvgCVX,
        isVyper: false,
        slotBalance: 51,
        decimals: 18,
    },
    CVG: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.CVG,
        decimals: 18,
    },

    DAI: {
        isVyper: false,
        slotBalance: 2,
        address: COMMON_ERC20S.DAI,
        decimals: 18,
    },
    FRAX: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.FRAX,
        decimals: 18,
    },
    WETH: {
        isVyper: false,
        slotBalance: 3,
        address: COMMON_ERC20S.WETH,
        decimals: 18,
    },
    CRV: {
        isVyper: true,
        slotBalance: 3,
        address: COMMON_ERC20S.CRV,
        decimals: 18,
    },
    CVX: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.CVX,
        decimals: 18,
    },
    CNC: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.CNC,
        decimals: 18,
    },
    FXS: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.FXS,
        decimals: 18,
    },
    PENDLE: {
        isVyper: false,
        slotBalance: 15,
        address: COMMON_ERC20S.PENDLE,
        decimals: 18,
    },
    SDT: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.SDT,
        decimals: 18,
    },
    FRAXBP: {
        isVyper: true,
        slotBalance: 7,
        address: CURVE_LPS.FRAX_USDC_LP,
        decimals: 18,
    },
    USDC: {
        isVyper: false,
        slotBalance: 9,
        address: COMMON_ERC20S.USDC,
        decimals: 6,
    },
    USDT: {
        isVyper: false,
        slotBalance: 2,
        address: COMMON_ERC20S.USDT,
        decimals: 6,
    },
    _3CRV: {
        isVyper: true,
        slotBalance: 3,
        address: CURVE_LPS._3CRV,
        decimals: 18,
    },

    crvUSD: {
        isVyper: true,
        slotBalance: 1,
        address: COMMON_ERC20S.crvUSD,
        decimals: 18,
    },

    SDFRAX3CRV: {
        isVyper: false,
        slotBalance: 0,
        address: SD_FRAX_3CRV,
        decimals: 18,
    },

    wstETH: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.wstETH,
        decimals: 18,
    },

    FIS: {
        isVyper: false,
        slotBalance: 1,
        address: COMMON_ERC20S.FIS,
        decimals: 18,
    },
    LDO: {
        isVyper: false,
        slotBalance: 1,
        address: COMMON_ERC20S.LDO,
        decimals: 18,
    },
    SPELL: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.SPELL,
        decimals: 18,
    },

    sd_CRV: {
        isVyper: false,
        slotBalance: 0,
        address: sdCRV,
        decimals: 18,
    },
    sd_CRV_GAUGE: {
        isVyper: true,
        slotBalance: 12,
        address: sdCRV_GAUGE,
        decimals: 18,
    },

    sd_PENDLE: {
        isVyper: false,
        slotBalance: 0,
        address: sdPENDLE,
        decimals: 18,
    },

    sd_FXS: {
        isVyper: false,
        slotBalance: 0,
        address: sdFXS,
        decimals: 18,
    },

    // BAL

    sd_BAL: {
        isVyper: false,
        slotBalance: 0,
        address: sdBAL,
        decimals: 18,
    },

    BB_A_USD: {
        isVyper: false,
        slotBalance: 0,
        address: BB_A_USD,
        decimals: 18,
    },
    BB_A_USD_OLD: {
        isVyper: false,
        slotBalance: 0,
        address: BB_A_USD_OLD,
        decimals: 18,
    },

    BAL: {
        isVyper: false,
        slotBalance: 1,
        address: COMMON_ERC20S.BAL,
        decimals: 18,
    },

    // ANGLE

    sd_ANGLE: {
        isVyper: false,
        slotBalance: 0,
        address: sdANGLE,
        decimals: 18,
    },

    SAN_USD_EUR: {
        isVyper: false,
        slotBalance: 51,
        address: SAN_USDC_EUR,
        decimals: 6,
    },

    AG_EUR: {
        isVyper: false,
        slotBalance: 51,
        address: COMMON_ERC20S.AG_EUR,
        decimals: 18,
    },

    ANGLE: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.ANGLE,
        decimals: 18,
    },

    FXN: {
        isVyper: true,
        slotBalance: 6,
        address: COMMON_ERC20S.FXN,
        decimals: 18,
    },

    sd_FXN: {
        isVyper: false,
        slotBalance: 0,
        address: sdFXN,
        decimals: 18,
    },

    // LP
    TRICRYPTO_USDC: {
        isVyper: true,
        slotBalance: 23,
        address: CURVE_LPS.TRI_CRYPTO_USDC,
        decimals: 18,
    },

    crvUSD_USDT: {
        isVyper: true,
        slotBalance: 20,
        address: CURVE_LPS.DUO_USDT_crvUSD,
        decimals: 18,
    },

    STG_USDC: {
        isVyper: true,
        slotBalance: 6,
        address: CURVE_LPS.DUO_STG_USDC,
        decimals: 18,
    },

    // TricryptoLlama V2
    TRICRYPTO_LLAMA: {
        isVyper: true,
        slotBalance: 23,
        address: CURVE_LPS.TRI_CRYPTO_LLAMA,
        decimals: 18,
    },

    SDCRV_CRV: {
        isVyper: true,
        slotBalance: 20,
        address: CURVE_LPS.DUO_SDCRV_CRV,
        decimals: 18,
    },

    crvUSD_USDC: {
        isVyper: true,
        slotBalance: 20,
        address: CURVE_LPS.DUO_USDC_crvUSD,
        decimals: 18,
    },

    frxETH_ETH: {
        isVyper: true,
        slotBalance: 7,
        address: CURVE_LPS.DUO_frxETH_ETH,
        decimals: 18,
    },
    TRICRYPTO_USDT: {
        isVyper: true,
        slotBalance: 23,
        address: CURVE_LPS.TRI_CRYPTO_USDT,
        decimals: 18,
    },

    CVXCRV_CRV: {
        isVyper: true,
        slotBalance: 20,
        address: CURVE_LPS.DUO_cvxCRV_CRV,
        decimals: 18,
    },
    SDFXS_FXS: {
        isVyper: true,
        slotBalance: 20,
        address: CURVE_LPS.DUO_SDFXS_FXS,
        decimals: 18,
    },

    AGEUR_EUROC: {
        isVyper: true,
        slotBalance: 24,
        address: CURVE_LPS.DUO_agEUR_EUROC,
        decimals: 18,
    },
    MIM_3CRV: {
        isVyper: true,
        slotBalance: 15,
        address: CURVE_LPS.DUO_MIM_3CRV,
        decimals: 18,
    },
    DETH_FRXETH: {
        isVyper: true,
        slotBalance: 20,
        address: CURVE_LPS.DUO_dETH_frxETH,
        decimals: 18,
    },

    FRAX_USDC: {
        isVyper: true,
        slotBalance: 24,
        address: CURVE_LPS.DUO_FRAXBP,
        decimals: 18,
    },
    ALUSD_FRAX_USDC: {
        isVyper: true,
        slotBalance: 17,
        address: CURVE_LPS.DUO_alUSD_FRAXBP,
        decimals: 18,
    },
    TRICRYPTO_USDT2: {
        isVyper: true,
        slotBalance: 2,
        address: CURVE_LPS.TRI_CRYPTO_USDT2,
        decimals: 18,
    },
    RETH_ETH: {
        isVyper: true,
        slotBalance: 2,
        address: CURVE_LPS.DUO_ETH_rETH,
        decimals: 18,
    },
    crvUSD_XAI: {
        isVyper: true,
        slotBalance: 20,
        address: CURVE_LPS.DUO_XAI_crvUSD,
        decimals: 18,
    },
    COIL_FRAX_USDC: {
        isVyper: true,
        slotBalance: 6,
        address: CURVE_LPS.DUO_COIL_FRAXBP,
        decimals: 18,
    },
    crvUSD_SUSD: {
        isVyper: true,
        slotBalance: 20,
        address: CURVE_LPS.DUO_sUSD_crvUSD,
        decimals: 18,
    },
    crvUSD_DOLA: {
        isVyper: true,
        slotBalance: 20,
        address: CURVE_LPS.DUO_DOLA_crvUSD,
        decimals: 18,
    },

    MKUSD_FRAX_USDC: {
        isVyper: true,
        slotBalance: 17,
        address: CURVE_LPS.DUO_mkUSD_FRAXBP,
        decimals: 18,
    },
    CNC_ETH: {
        isVyper: true,
        slotBalance: 6,
        address: CURVE_LPS.DUO_ETH_CNC,
        decimals: 18,
    },
    XAI_FRAX_USDC: {
        isVyper: true,
        slotBalance: 17,
        address: CURVE_LPS.DUO_XAI_FRAXBP,
        decimals: 18,
    },
    crvUSD_FRXETH_SDT: {
        isVyper: true,
        slotBalance: 23,
        address: CURVE_LPS.TRI_CRYPTO_SDT,
        decimals: 18,
    },

    TRICRV: {
        isVyper: true,
        slotBalance: 23,
        address: CURVE_LPS.TRI_CRYPTO_CRV,
        decimals: 18,
    },
    STETH_ETH: {
        isVyper: true,
        slotBalance: 2,
        address: CURVE_LPS.DUO_stETH_ETH,
        decimals: 18,
    },

    _80_BAL_20_WETH: {
        isVyper: false,
        slotBalance: 0,
        address: _80BAL_20WETH,
        decimals: 18,
    },

    SD_FRAX_3CRV: {
        isVyper: false,
        slotBalance: 0,
        address: SD_FRAX_3CRV,
        decimals: 18,
    },

    crvUSD_FRAX: {
        isVyper: true,
        slotBalance: 20,
        address: CURVE_LPS.DUO_crvUSD_FRAX,
        decimals: 18,
    },

    ETHp_WETH: {
        isVyper: true,
        slotBalance: 6,
        address: CURVE_LPS.DUO_ETHp_WETH,
        decimals: 18,
    },

    WETH_SDT: {
        isVyper: true,
        slotBalance: 6,
        address: CURVE_LPS.DUO_WETH_SDT,
        decimals: 18,
    },

    PXETH_STETH: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.LP_pxETH_stETH,
        decimals: 18,
    },

    PXETH_FRXETH: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_PXETH_FRXETH,
        decimals: 18,
    },
    PYUSD_USDC: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_PYUSD_USDC,
        decimals: 18,
    },
    sd_YFI: {
        isVyper: false,
        slotBalance: 0,
        address: sdYFI,
        decimals: 18,
    },
    sd_APW: {
        isVyper: false,
        slotBalance: 0,
        address: sdAPW,
        decimals: 18,
    },

    CVG_ETH: {
        isVyper: true,
        slotBalance: 22,
        address: CURVE_LPS.DUO_CVG_ETH,
        decimals: 18,
    },
    cvgSDT_SDT: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_cvgSDT_SDT,
        decimals: 18,
    },
    cvgCVX_CVX1: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_cvgCVX_CVX1,
        decimals: 18,
    },

    // CONVEX
    cvxCRV: {
        isVyper: false,
        slotBalance: 0,
        address: cvxCRV,
        decimals: 18,
    },
    cvxFXS: {
        isVyper: false,
        slotBalance: 0,
        address: cvxFXS,
        decimals: 18,
    },
    cvxFXN: {
        isVyper: false,
        slotBalance: 0,
        address: cvxFXN,
        decimals: 18,
    },
    eUSD: {
        isVyper: false,
        slotBalance: 201,
        address: COMMON_ERC20S.eUSD,
        decimals: 18,
    },
    eUSD_FRAXLP: {
        isVyper: true,
        slotBalance: 17,
        address: CURVE_LPS.DUO_eUSD_FRAXBP,
        decimals: 18,
    },
    PRISMA: {
        isVyper: false,
        slotBalance: 7,
        address: COMMON_ERC20S.PRISMA,
        decimals: 18,
    },
    FPIS: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.FPIS,
        decimals: 18,
    },
    YFI: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.YFI,
        decimals: 18,
    },
    dYFI: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.dYFI,
        decimals: 18,
    },
    APW: {
        isVyper: false,
        slotBalance: 101,
        address: COMMON_ERC20S.APW,
        decimals: 18,
    },
    PYUSD: {
        isVyper: false,
        slotBalance: 1,
        address: COMMON_ERC20S.PYUSD,
        decimals: 6,
    },
    mkUSD: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.mkUSD,
        decimals: 18,
    },
    frxETH: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.frxETH,
        decimals: 18,
    },
    pxETH: {
        isVyper: false,
        slotBalance: 3,
        address: COMMON_ERC20S.pxETH,
        decimals: 18,
    },
    WETH_frxETH: {
        isVyper: true,
        slotBalance: 20,
        address: CURVE_LPS.LP_WETH_frxETH,
        decimals: 18,
    },
    pxETH_WETH: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.LP_pxETH_WETH,
        decimals: 18,
    },
    USDC_fxUSD: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.LP_USDC_fxUSD,
        decimals: 18,
    },
    fxUSD: {
        isVyper: false,
        slotBalance: 151,
        address: COMMON_ERC20S.fxUSD,
        decimals: 18,
    },
    USR: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.USR,
        decimals: 18,
    },
    wstUSR: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.wstUSR,
        decimals: 18,
    },
    frxUSD: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.frxUSD,
        decimals: 18,
    },
    USDe: {
        isVyper: false,
        slotBalance: 2,
        address: COMMON_ERC20S.USDe,
        decimals: 18,
    },
    DOLA: {
        isVyper: false,
        slotBalance: 6,
        address: COMMON_ERC20S.DOLA,
        decimals: 18,
    },
    CRV_USDC_USDT: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_USDC_USDT,
        decimals: 18,
    },
    CRV_USR_RLP: {
        isVyper: true,
        slotBalance: 19,
        address: CURVE_LPS.DUO_USR_RLP,
        decimals: 18,
    },
    CRV_frxUSD_USDe: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_frxUSD_USDe,
        decimals: 18,
    },
    CRV_DOLA_USR: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_DOLA_USR,
        decimals: 18,
    },
    CRV_scrvUSD_sUSDe: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_scrvUSD_sUSDe,
        decimals: 18,
    },
    CRV_crvUSD_USDe: {
        isVyper: true,
        slotBalance: 1,
        address: CURVE_LPS.DUO_crvUSD_USDe,
        decimals: 18,
    },
    sUSDe: {
        isVyper: false,
        slotBalance: 4,
        address: COMMON_ERC20S.sUSDe,
        decimals: 18,
    },
    sDAI: {
        isVyper: false,
        slotBalance: 1,
        address: COMMON_ERC20S.sDAI,
        decimals: 18,
    },
    deUSD: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.deUSD,
        decimals: 18,
    },
    sUSDS: {
        isVyper: false,
        slotBalance: 2,
        address: COMMON_ERC20S.sUSDS,
        decimals: 18,
    },
    stUSDS: {
        isVyper: false,
        slotBalance: 2,
        address: COMMON_ERC20S.stUSDS,
        decimals: 18,
    },
    scrvUSD: {
        isVyper: true,
        slotBalance: 18,
        address: COMMON_ERC20S.scrvUSD,
        decimals: 18,
    },
    CRV_DUO_sDAI_sUSDe: {
        address: CURVE_LPS.LP_sDAI_sUSDe,
        slotBalance: 38,
        isVyper: true,
        decimals: 18,
    },

    GHO_CBBTC_ETH: {
        isVyper: true,
        slotBalance: 23,
        address: CURVE_LPS.TRI_GHO_cbBTC_ETH,
        decimals: 23,
    },

    CVX_ETH: {
        isVyper: true,
        slotBalance: 5,
        address: CURVE_LPS.DUO_ETH_CVX_TOKEN,
        decimals: 18,
    },
    stETH: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.stETH,
        decimals: 18,
    },

    cbBTC_WBTC: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_cbBTC_WBTC,
        decimals: 18,
    },
    WBTC: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.WBTC,
        decimals: 8,
    },

    GHO: {
        isVyper: false,
        slotBalance: 3,
        address: COMMON_ERC20S.GHO,
        decimals: 18,
    },
    GHO_crvUSD: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_GHO_crvUSD,
        decimals: 18,
    },
    GHO_fxUSD: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_GHO_fxUSD,
        decimals: 18,
    },
    GHO_USDe: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_GHO_USDe,
        decimals: 18,
    },
    GHO_USR: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_GHO_USR,
        decimals: 18,
    },
    pxETH_stETH: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_pxETH_stETH,
        decimals: 18,
    },
    cbBTC: {
        isVyper: false,
        slotBalance: 9,
        address: COMMON_ERC20S.cbBTC,
        decimals: 8,
    },
    sINV: {
        isVyper: false,
        slotBalance: 3,
        address: COMMON_ERC20S.sINV,
        decimals: 18,
    },
    RSUP: {
        isVyper: false,
        slotBalance: 5,
        address: COMMON_ERC20S.RSUP,
        decimals: 18,
    },
    stRESOLV: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.stRESOLV,
        decimals: 18,
    },
    sDINERO: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.sDINERO,
        decimals: 18,
    },
    CRV_DUO_USDT_USDe: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_USDT_USDe,
        decimals: 18
    },
    CRV_DUO_reUSD_sfrxUSD: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_reUSD_sfrxUSD,
        decimals: 18
    },
    CRV_DUO_RLUSD_USDC: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_RLUSD_USDC,
        decimals: 18
    },
    CRV_DUO_stUSDS_USDS: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_stUSDS_USDS,
        decimals: 18
    },
    CRV_DUO_frxUSD_msUSD: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_frxUSD_msUSD,
        decimals: 18
    },
    CRV_DUO_crvUSD_sUSDe: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_crvUSD_sUSDe,
        decimals: 18
    },
    CRV_DUO_ETHplus_WETH: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_ETHplus_WETH,
        decimals: 18
    },
    CRV_DUO_tBTC_cbBTC: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_tBTC_cbBTC,
        decimals: 18
    },
    CRV_DUO_msETH_OETH: {
        isVyper: true,
        slotBalance: 38,
        address: CURVE_LPS.DUO_msETH_OETH,
        decimals: 18
    },
    tBTC: {
        isVyper: false,
        slotBalance: 1,
        address: COMMON_ERC20S.tBTC,
        decimals: 18
    },
    ETHPlus: {
        isVyper: false,
        slotBalance: 201,
        address: COMMON_ERC20S['ETH+'],
        decimals: 18
    },
    sfrxUSD: {
        isVyper: false,
        slotBalance: 3,
        address: COMMON_ERC20S.sfrxUSD,
        decimals: 18
    },
    msUSD: {
        isVyper: false,
        slotBalance: 3,
        address: COMMON_ERC20S.msUSD,
        decimals: 18
    },
    msETH: {
        isVyper: false,
        slotBalance: 3,
        address: COMMON_ERC20S.msETH,
        decimals: 18
    },
    OETH: {
        isVyper: false,
        slotBalance: 0,
        address: COMMON_ERC20S.OETH,
        decimals: 18
    },
    reUSD: {
        isVyper: false,
        slotBalance: 5,
        address: COMMON_ERC20S.reUSD,
        decimals: 18
    },
    USDS: {
        isVyper: false,
        slotBalance: 2,
        address: COMMON_ERC20S.USDS,
        decimals: 18
    }

};
