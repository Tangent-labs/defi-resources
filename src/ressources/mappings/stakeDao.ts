import { CURVE_GAUGES } from "../protocols/curve/curveGauges";
import {
    sdCRV,
    sdPENDLE,
    sdFXS,
    sdBAL,
    sdANGLE,
    sdFXN,
    sdYFI,
    sdAPW,
    sdCRV_GAUGE,
    sdBAL_GAUGE,
    sdANGLE_GAUGE,
    SAN_USDC_EUR,
    sdPENDLE_GAUGE,
    sdFXN_GAUGE,
    sdFXS_GAUGE,
    sdYFI_GAUGE,
    sdAPW_GAUGE,
    _80BAL_20WETH,
    SDT_RETH_ETH_GAUGE,
} from "../erc20/stakeDao";
import { BAL_80BAL_20WETH_ID, BAL_SDBAL } from "../lps/balancer";
import { CURVE_LPS } from "../protocols/curve/curveLP";
import { COMMON_ERC20S } from "../erc20/commonERC20";


export const SD_TOKENS_LIST = [sdCRV, sdPENDLE, sdFXS, sdBAL, sdANGLE, sdFXN, sdYFI, sdAPW];

export const REWARDS_TOKEN_SD_ASSETS: { [sdGaugeAsset: string]: string[] } = {
    [sdCRV_GAUGE]: [CURVE_LPS._3CRV, COMMON_ERC20S.CRV, COMMON_ERC20S.crvUSD],
    [sdBAL_GAUGE]: [COMMON_ERC20S.BAL, COMMON_ERC20S.USDC],
    [sdANGLE_GAUGE]: [SAN_USDC_EUR, COMMON_ERC20S.AG_EUR, COMMON_ERC20S.ANGLE],
    [sdPENDLE_GAUGE]: [COMMON_ERC20S.WETH, COMMON_ERC20S.PENDLE],
    [sdFXN_GAUGE]: [COMMON_ERC20S.wstETH],
    [sdFXS_GAUGE]: [COMMON_ERC20S.FXS],
    [sdYFI_GAUGE]: [COMMON_ERC20S.YFI, COMMON_ERC20S.dYFI],
    [sdAPW_GAUGE]: [COMMON_ERC20S.APW],
};
// Mapping
export const CURVE_TYPE = 1;
export const BALANCER_TYPE = 2;
export const SDASSETS: LiquidLockerStruct[] = [
    {
        name: "cvgSDT",
        address: COMMON_ERC20S.cvgSDT,
        referenceAsset: COMMON_ERC20S.SDT,
        referenceIndex: 0,
        pool: CURVE_LPS.DUO_cvgSDT_SDT,
        type: CURVE_TYPE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdCRV",
        address: sdCRV,
        referenceAsset: COMMON_ERC20S.CRV,
        referenceIndex: 0,
        pool: CURVE_LPS.DUO_SDCRV_CRV,
        type: CURVE_TYPE,
        gauge: sdCRV_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdFXS",
        address: sdFXS,
        referenceAsset: COMMON_ERC20S.FXS,
        referenceIndex: 0,
        pool: CURVE_LPS.DUO_SDFXS_FXS,
        type: CURVE_TYPE,
        gauge: sdFXS_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdBAL",
        address: sdBAL,
        referenceAsset: COMMON_ERC20S.BAL,
        referenceIndex: 0,
        pool: BAL_SDBAL,
        type: BALANCER_TYPE,
        gauge: sdBAL_GAUGE,
        referencePool: _80BAL_20WETH,
        idReferencePool: BAL_80BAL_20WETH_ID,
    },
    {
        name: "sdANGLE",
        address: sdANGLE,
        referenceAsset: COMMON_ERC20S.ANGLE,
        referenceIndex: 0,
        pool: CURVE_LPS.DUO_SDANGLE_ANGLE,
        type: CURVE_TYPE,
        gauge: sdANGLE_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdPENDLE",
        address: sdPENDLE,
        referenceAsset: COMMON_ERC20S.PENDLE,
        referenceIndex: 0,
        pool: CURVE_LPS.DUO_SDPENDLE_PENDLE,
        type: CURVE_TYPE,
        gauge: sdPENDLE_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdFXN",
        address: sdFXN,
        referenceAsset: COMMON_ERC20S.FXN,
        referenceIndex: 0,
        pool: CURVE_LPS.DUO_SDFXN_FXN,
        type: CURVE_TYPE,
        gauge: sdFXN_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdYFI",
        address: sdYFI,
        referenceAsset: COMMON_ERC20S.YFI,
        referenceIndex: 0,
        pool: CURVE_LPS.DUO_SDYFI_YFI,
        type: CURVE_TYPE,
        gauge: sdYFI_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdAPW",
        address: sdAPW,
        referenceAsset: COMMON_ERC20S.APW,
        referenceIndex: 0,
        pool: CURVE_LPS.DUO_SDAPW_APW,
        type: CURVE_TYPE,
        gauge: sdAPW_GAUGE,
        referencePool: null,
        idReferencePool: null,
    },
];

export const SPECIAL_LP_TOKENS: { [curveGaugeAddress: string]: string[] } = {
    // TriLlama => WsETH
    [CURVE_GAUGES.TRI_crvUSD_TBTC_WSTETH]: [COMMON_ERC20S.wstETH],
    // Mim 3CRV => SPELL
    [CURVE_GAUGES.MIM_DAI_USDC_USDT]: [COMMON_ERC20S.SPELL],
    // rCRV => FIS
    [SDT_RETH_ETH_GAUGE]: [COMMON_ERC20S.FIS],
    // CNC-ETH => CNC
    [CURVE_GAUGES.CNC_ETH]: [COMMON_ERC20S.CNC],
    // ETH-stETH => LDO
    [CURVE_GAUGES.STETH_ETH]: [COMMON_ERC20S.LDO],
};
export interface LiquidLockerStruct {
    name: string;
    address: string;
    referenceAsset: string;
    referenceIndex: number;
    pool: string;
    type: number;
    gauge?: string;
    referencePool?: null | string;
    idReferencePool?: null | string;
}
