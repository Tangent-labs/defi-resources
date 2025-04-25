declare const ChainlinkPriceFeedKeys: readonly ["USDT_USD", "USDC_USD", "DAI_USD", "FRAX_USD", "crvUSD_USD", "GHO_USD", "USD0_USD", "TUSD_USD", "USDS_USD", "USDP_USD", "USDe_USD", "USR_USD", "ETH_USD", "stETH_USD", "ezETH_USD", "BTC_USD", "cbBTC_USD", "CRV_USD", "CVX_USD", "FXS_USD", "LINK_USD"];
type ChainlinkPriceFeedKeys = (typeof ChainlinkPriceFeedKeys)[number];
export declare const PRICE_FEEDS: {
    [key in ChainlinkPriceFeedKeys]: string;
};
export {};
