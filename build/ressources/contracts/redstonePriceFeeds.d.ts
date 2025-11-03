declare const RedstonePriceFeedKeys: readonly ["USDT_USD", "USDC_USD", "ETH_USD", "USR_USD", "USDe_USD"];
type RedstonePriceFeedKeys = (typeof RedstonePriceFeedKeys)[number];
export declare const REDSTONE_PRICE_FEEDS: {
    [key in RedstonePriceFeedKeys]: string;
};
export {};
