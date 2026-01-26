import { CURVE_LPS } from "../curve/curveLP";


type ConvexCrvPool = {
    lpToken: string;
    cvxRewardToken: string;
    pid: number;
};

const ConvexPoolKeys = [
    "USDC_crvUSD",
    "USDT_crvUSD",
    "crvUSD_frxUSD",
    "DOLA_sUSDS",
    "USDC_USDT_STRATEGICR",
    "frxUSD_USDe",
    "WETH_pxETH",
    "WETH_frxETH",
    "pxETH_stETH",
    "cbBTC_WBTC",
    "USDT_WBTC_WETH",
    "USDC_WBTC_WETH",
    "crvUSD_ETH_CRV",
    "GHO_cbBTC_WETH",
    "CVX_ETH",
    "USR_RLP",
    "LLAMALEND_sDOLA_crvUSD",
    "GHO_crvUSD",
    "reUSD_sfrxUSD",
    "frxUSD_msUSD",
    "msETH_OETH",
    "tBTC_cbBTC",
    "ETHPlus_WETH"
] as const;
type ConvexPoolKeys = (typeof ConvexPoolKeys)[number];

export const ConvexCrvPools: { [key in ConvexPoolKeys]: ConvexCrvPool } = {
    // STABLECOIN POOLS
    USDC_crvUSD: {
        lpToken: CURVE_LPS.DUO_USDC_crvUSD,
        cvxRewardToken: "0x44D8FaB7CD8b7877D5F79974c2F501aF6E65AbBA",
        pid: 182,
    },
    USDT_crvUSD: {
        lpToken: CURVE_LPS.DUO_USDT_crvUSD,
        cvxRewardToken: "0xD1DdB0a0815fD28932fBb194C84003683AF8a824",
        pid: 179,
    },
    crvUSD_frxUSD: {
        lpToken: CURVE_LPS.DUO_crvUSD_frxUSD,
        cvxRewardToken: "0xBB8494177E2A846E233ec7D56944F0D15E697eE2",
        pid: 480
    },
    DOLA_sUSDS: {
        lpToken: CURVE_LPS.DUO_DOLA_sUSDS,
        cvxRewardToken: "0x081EB123C1ddA50541eE778b59AC2f69704b9A19",
        pid: 399,
    },
    USDC_USDT_STRATEGICR: {
        lpToken: CURVE_LPS.DUO_USDC_USDT,
        cvxRewardToken: "0x83644fa70538e5251D125205186B14A76cA63606",
        pid: 425,
    },
    frxUSD_USDe: {
        lpToken: CURVE_LPS.DUO_frxUSD_USDe,
        cvxRewardToken: "0xb5a97cFB06f9005005a79dAA27EB44106b7ad79A",
        pid: 431,
    },
    GHO_crvUSD: {
        lpToken: CURVE_LPS.DUO_GHO_crvUSD,
        cvxRewardToken: "0x5eC758f79b96AE74e7F1Ba9583009aFB3fc8eACB",
        pid: 335,
    },
    reUSD_sfrxUSD: {
        lpToken: CURVE_LPS.DUO_reUSD_sfrxUSD,
        cvxRewardToken: "0x18574c2047A2D4786567A2C31B4f25Ae291ed6bF",
        pid: 439,
    },
    frxUSD_msUSD: {
        lpToken: CURVE_LPS.DUO_frxUSD_msUSD,
        cvxRewardToken: '0x60Aa76b7797644c89EB004b84286B47517a8DDb3',
        pid: 510
    },


    // ETH POOLS
    WETH_pxETH: {
        lpToken: CURVE_LPS.LP_pxETH_WETH,
        cvxRewardToken: "0x3B793E505A3C7dbCb718Fe871De8eBEf7854e74b",
        pid: 271,
    },
    WETH_frxETH: {
        lpToken: CURVE_LPS.LP_WETH_frxETH,
        cvxRewardToken: "0xFafDE12dC476C4913e29F47B4747860C148c5E4f",
        pid: 219,
    },
    pxETH_stETH: {
        lpToken: CURVE_LPS.LP_pxETH_stETH,
        cvxRewardToken: "0x633556C8413FCFd45D83656290fF8d64EE41A7c1",
        pid: 273,
    },
    msETH_OETH: {
        lpToken: CURVE_LPS.DUO_msETH_OETH,
        cvxRewardToken: "0x6597d955e2510Ee86539C68fe2e4D6b01ba6374d",
        pid: 452,
    },
    ETHPlus_WETH: {
        lpToken: CURVE_LPS.DUO_ETHplus_WETH,
        cvxRewardToken: "0x9e0A248528Aa933ff1F8f707ea75F61eD780836E",
        pid: 470,
    },

    // BTC POOLS

    tBTC_cbBTC: {
        lpToken: CURVE_LPS.DUO_tBTC_cbBTC,
        cvxRewardToken: "0xB683a3D855D016A1c78c3e7887812A7CAB3989B0",
        pid: 402,
    },
    cbBTC_WBTC: {
        lpToken: CURVE_LPS.DUO_cbBTC_WBTC,
        cvxRewardToken: "0xEd211Ec6F81f3516Ef6c5DFaC6CF09cD33A6Dff3",
        pid: 392,
    },

    // TRICRYPTO POOLS

    USDT_WBTC_WETH: {
        lpToken: CURVE_LPS.TRI_CRYPTO_USDT,
        cvxRewardToken: "0xb05262D4aaAA38D0Af4AaB244D446ebDb5afd4A7",
        pid: 188,
    },
    USDC_WBTC_WETH: {
        lpToken: CURVE_LPS.TRI_CRYPTO_USDC,
        cvxRewardToken: "0x57f4cf13b325Ad101CfE9AD3a84d3B2302AA96c8",
        pid: 189,
    },
    crvUSD_ETH_CRV: {
        lpToken: CURVE_LPS.TRI_CRYPTO_CRV,
        cvxRewardToken: "0xF956a46DbA1A0a567168db8655bc18E9050C7738",
        pid: 211,
    },
    GHO_cbBTC_WETH: {
        lpToken: CURVE_LPS.TRI_GHO_cbBTC_ETH,
        cvxRewardToken: "0x4d10e7FC03dE065Aef3dfbc0394CbEd1e4d36D6E",
        pid: 409,
    },

    // DUOCRYPTO POOLS

    CVX_ETH: {
        lpToken: CURVE_LPS.DUO_ETH_CVX_TOKEN,
        cvxRewardToken: "0xb1Fb0BA0676A1fFA83882c7F4805408bA232C1fA",
        pid: 64,
    },
    USR_RLP: {
        lpToken: CURVE_LPS.DUO_USR_RLP,
        cvxRewardToken: "0xc2892644C2d17C0C348ac7f4487353c0E9eE4F42",
        pid: 393,
    },
    LLAMALEND_sDOLA_crvUSD: {
        lpToken: "0x992B77179A5cF876bcD566FF4b3EAE6482012B90",
        cvxRewardToken: "0x6095EC5De7acA5e8938F4ED92E1F868Cab243f5E",
        pid: 445,
    },
};
