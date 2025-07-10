type ConvexCrvPool = {
    lpToken: string;
    cvxRewardToken: string;
    pid: number;
};
declare const ConvexPoolKeys: readonly ["USDC_crvUSD", "USDT_crvUSD", "DOLA_sUSDS", "USDC_USDT_STRATEGICR", "frxUSD_USDe", "WETH_pxETH", "WETH_frxETH", "pxETH_stETH", "cbBTC_WBTC", "USDT_WBTC_WETH", "USDC_WBTC_WETH", "crvUSD_ETH_CRV", "GHO_cbBTC_WETH", "CVX_ETH", "USR_RLP", "LLAMALEND_sDOLA_crvUSD"];
type ConvexPoolKeys = (typeof ConvexPoolKeys)[number];
export declare const ConvexCrvPools: {
    [key in ConvexPoolKeys]: ConvexCrvPool;
};
export {};
