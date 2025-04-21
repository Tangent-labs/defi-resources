import {
    CRV_DUO_DOLA_crvUSD,
    CRV_DUO_ETH_CVX,
    CRV_DUO_ETH_CVX_TOKEN,
    CRV_DUO_USDC_crvUSD,
    CRV_DUO_USDT_crvUSD,
    CRV_DUO_USR_RLP,
    CRV_LP_pxETH_WETH,
    CRV_LP_WETH_frxETH,
    CRV_TRI_CRYPTO_CRV,
    CRV_TRI_CRYPTO_USDC,
    CRV_TRI_CRYPTO_USDT,
    CRV_TRI_GHO_CBBTC_ETH,
} from "../lps/curve";

export const CRVUSD_USDC = {
    lpToken: CRV_DUO_USDC_crvUSD,
    cvxRewardToken: "0x44D8FaB7CD8b7877D5F79974c2F501aF6E65AbBA",
    pid: 182,
};

export const CRVUSD_USDT = {
    lpToken: CRV_DUO_USDT_crvUSD,
    cvxRewardToken: "0xD1DdB0a0815fD28932fBb194C84003683AF8a824",
    pid: 179,
};

export const pxETH_WETH = {
    lpToken: CRV_LP_pxETH_WETH,
    cvxRewardToken: "0x3B793E505A3C7dbCb718Fe871De8eBEf7854e74b",
    pid: 219,
};

export const frxETH_WETH = {
    lpToken: CRV_LP_WETH_frxETH,
    cvxRewardToken: "0xFafDE12dC476C4913e29F47B4747860C148c5E4f",
    pid: 219,
};

export const DOLA_sUSDS = {
    lpToken: CRV_DUO_DOLA_crvUSD,
    cvxRewardToken: "0x081EB123C1ddA50541eE778b59AC2f69704b9A19",
    pid: 399,
};

export const USDT_WBTC_WETH = {
    lpToken: CRV_TRI_CRYPTO_USDT,
    cvxRewardToken: "0xb05262D4aaAA38D0Af4AaB244D446ebDb5afd4A7",
    pid: 188,
};
export const USDC_WBTC_WETH = {
    lpToken: CRV_TRI_CRYPTO_USDC,
    cvxRewardToken: "0x57f4cf13b325Ad101CfE9AD3a84d3B2302AA96c8",
    pid: 189,
};

export const crvUSD_ETH_CRV = {
    lpToken: CRV_TRI_CRYPTO_CRV,
    cvxRewardToken: "0xF956a46DbA1A0a567168db8655bc18E9050C7738",
    pid: 211,
};

export const GHO_cbBTC_WETH = {
    lpToken: CRV_TRI_GHO_CBBTC_ETH,
    cvxRewardToken: "0x4d10e7FC03dE065Aef3dfbc0394CbEd1e4d36D6E",
    pid: 409,
};

export const CVX_ETH = {
    lpToken: CRV_DUO_ETH_CVX_TOKEN,
    cvxRewardToken: "0xb1Fb0BA0676A1fFA83882c7F4805408bA232C1fA",
    pid: 64,
};

export const USR_RLP = {
    lp: CRV_DUO_USR_RLP,
    cvxRewardToken: "0xc2892644C2d17C0C348ac7f4487353c0E9eE4F42",
    pid: 393,
};
