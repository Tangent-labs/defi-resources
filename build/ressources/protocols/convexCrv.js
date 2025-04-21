"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USR_RLP = exports.CVX_ETH = exports.GHO_cbBTC_WETH = exports.crvUSD_ETH_CRV = exports.USDC_WBTC_WETH = exports.USDT_WBTC_WETH = exports.cbBTC_WBTC = exports.pxETH_stETH = exports.frxETH_WETH = exports.pxETH_WETH = exports.frxUSD_USDe = exports.USDC_USDT_STRATEGICR = exports.DOLA_sUSDS = exports.CRVUSD_USDT = exports.CRVUSD_USDC = void 0;
const curve_1 = require("../lps/curve");
// STABLECOINS POOLS
exports.CRVUSD_USDC = {
    lpToken: curve_1.CRV_DUO_USDC_crvUSD,
    cvxRewardToken: "0x44D8FaB7CD8b7877D5F79974c2F501aF6E65AbBA",
    pid: 182,
};
exports.CRVUSD_USDT = {
    lpToken: curve_1.CRV_DUO_USDT_crvUSD,
    cvxRewardToken: "0xD1DdB0a0815fD28932fBb194C84003683AF8a824",
    pid: 179,
};
exports.DOLA_sUSDS = {
    lpToken: curve_1.CRV_DUO_DOLA_crvUSD,
    cvxRewardToken: "0x081EB123C1ddA50541eE778b59AC2f69704b9A19",
    pid: 399,
};
exports.USDC_USDT_STRATEGICR = {
    lpToken: curve_1.CRV_DUO_USDC_USDT,
    cvxRewardToken: "0x83644fa70538e5251D125205186B14A76cA63606",
    pid: 425,
};
exports.frxUSD_USDe = {
    lpToken: curve_1.CRV_DUO_frxUSD_USDe,
    cvxRewardToken: "0xb5a97cFB06f9005005a79dAA27EB44106b7ad79A",
    pid: 431,
};
// ETH POOLS
exports.pxETH_WETH = {
    lpToken: curve_1.CRV_LP_pxETH_WETH,
    cvxRewardToken: "0x3B793E505A3C7dbCb718Fe871De8eBEf7854e74b",
    pid: 219,
};
exports.frxETH_WETH = {
    lpToken: curve_1.CRV_LP_WETH_frxETH,
    cvxRewardToken: "0xFafDE12dC476C4913e29F47B4747860C148c5E4f",
    pid: 219,
};
exports.pxETH_stETH = {
    lpToken: curve_1.CRV_LP_pxETH_stETH,
    cvxRewardToken: "0x633556C8413FCFd45D83656290fF8d64EE41A7c1",
    pid: 273,
};
exports.cbBTC_WBTC = {
    lpToken: curve_1.CRV_DUO_cbBTC_WBTC,
    cvxRewardToken: "0xEd211Ec6F81f3516Ef6c5DFaC6CF09cD33A6Dff3",
    pid: 392,
};
// TRICRYPTO POOLS
exports.USDT_WBTC_WETH = {
    lpToken: curve_1.CRV_TRI_CRYPTO_USDT,
    cvxRewardToken: "0xb05262D4aaAA38D0Af4AaB244D446ebDb5afd4A7",
    pid: 188,
};
exports.USDC_WBTC_WETH = {
    lpToken: curve_1.CRV_TRI_CRYPTO_USDC,
    cvxRewardToken: "0x57f4cf13b325Ad101CfE9AD3a84d3B2302AA96c8",
    pid: 189,
};
exports.crvUSD_ETH_CRV = {
    lpToken: curve_1.CRV_TRI_CRYPTO_CRV,
    cvxRewardToken: "0xF956a46DbA1A0a567168db8655bc18E9050C7738",
    pid: 211,
};
exports.GHO_cbBTC_WETH = {
    lpToken: curve_1.CRV_TRI_GHO_cbBTC_ETH,
    cvxRewardToken: "0x4d10e7FC03dE065Aef3dfbc0394CbEd1e4d36D6E",
    pid: 409,
};
// DUOCRYPTO POOLS
exports.CVX_ETH = {
    lpToken: curve_1.CRV_DUO_ETH_CVX_TOKEN,
    cvxRewardToken: "0xb1Fb0BA0676A1fFA83882c7F4805408bA232C1fA",
    pid: 64,
};
exports.USR_RLP = {
    lpToken: curve_1.CRV_DUO_USR_RLP,
    cvxRewardToken: "0xc2892644C2d17C0C348ac7f4487353c0E9eE4F42",
    pid: 393,
};
