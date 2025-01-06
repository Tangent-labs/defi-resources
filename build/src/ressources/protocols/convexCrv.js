"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOLA_sUSDS = exports.frxETH_WETH = exports.pxETH_WETH = exports.CRVUSD_USDT = exports.CRVUSD_USDC = void 0;
const curve_1 = require("../lps/curve");
exports.CRVUSD_USDC = {
    lp: curve_1.CRV_DUO_USDC_crvUSD,
    cvxRewardToken: "0x44D8FaB7CD8b7877D5F79974c2F501aF6E65AbBA",
    pid: 182,
};
exports.CRVUSD_USDT = {
    lp: curve_1.CRV_DUO_USDT_crvUSD,
    cvxRewardToken: "0xD1DdB0a0815fD28932fBb194C84003683AF8a824",
    pid: 179,
};
exports.pxETH_WETH = {
    lp: curve_1.CRV_LP_pxETH_WETH,
    cvxRewardToken: "0x3B793E505A3C7dbCb718Fe871De8eBEf7854e74b",
    pid: 219,
};
exports.frxETH_WETH = {
    lp: curve_1.CRV_LP_WETH_frxETH,
    cvxRewardToken: "0xFafDE12dC476C4913e29F47B4747860C148c5E4f",
    pid: 219,
};
exports.DOLA_sUSDS = {
    lp: curve_1.CRV_DUO_DOLA_crvUSD,
    cvxRewardToken: "0x081EB123C1ddA50541eE778b59AC2f69704b9A19",
    pid: 399,
};
