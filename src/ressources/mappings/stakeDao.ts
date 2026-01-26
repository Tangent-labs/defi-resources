import { CRV, BAL, USDC, ANGLE, WETH, PENDLE, FXS, YFI, dYFI, APW, FXN, wstETH, AG_EUR, CNC, FIS, LDO, SPELL, cvgSDT, SDT, crvUSD } from "../erc20/common";
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


export const SD_TOKENS_LIST = [sdCRV, sdPENDLE, sdFXS, sdBAL, sdANGLE, sdFXN, sdYFI, sdAPW];

export const REWARDS_TOKEN_SD_ASSETS: { [sdGaugeAsset: string]: string[] } = {
    [sdCRV_GAUGE]: [CURVE_LPS._3CRV, CRV, crvUSD],
    [sdBAL_GAUGE]: [BAL, USDC],
    [sdANGLE_GAUGE]: [SAN_USDC_EUR, AG_EUR, ANGLE],
    [sdPENDLE_GAUGE]: [WETH, PENDLE],
    [sdFXN_GAUGE]: [wstETH],
    [sdFXS_GAUGE]: [FXS],
    [sdYFI_GAUGE]: [YFI, dYFI],
    [sdAPW_GAUGE]: [APW],
};
// Mapping
export const CURVE_TYPE = 1;
export const BALANCER_TYPE = 2;
export const SDASSETS: LiquidLockerStruct[] = [
    {
        name: "cvgSDT",
        address: cvgSDT,
        referenceAsset: SDT,
        referenceIndex: 0,
        pool: CURVE_LPS.DUO_cvgSDT_SDT,
        type: CURVE_TYPE,
        referencePool: null,
        idReferencePool: null,
    },
    {
        name: "sdCRV",
        address: sdCRV,
        referenceAsset: CRV,
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
        referenceAsset: FXS,
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
        referenceAsset: BAL,
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
        referenceAsset: ANGLE,
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
        referenceAsset: PENDLE,
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
        referenceAsset: FXN,
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
        referenceAsset: YFI,
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
        referenceAsset: APW,
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
    [CURVE_GAUGES.TRI_crvUSD_TBTC_WSTETH]: [wstETH],
    // Mim 3CRV => SPELL
    [CURVE_GAUGES.MIM_DAI_USDC_USDT]: [SPELL],
    // rCRV => FIS
    [SDT_RETH_ETH_GAUGE]: [FIS],
    // CNC-ETH => CNC
    [CURVE_GAUGES.CNC_ETH]: [CNC],
    // ETH-stETH => LDO
    [CURVE_GAUGES.STETH_ETH]: [LDO],
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
