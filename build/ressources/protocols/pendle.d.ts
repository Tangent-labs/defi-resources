export declare const PENDLE_POOL_KEYS: readonly ["sUSDe 09/25/25", "USDe 09/25/25", "wstUSR 09/25/25", "USR 09/04/25", "sUSDe 27/11/25", "sUSDf 29/01/26", "USDe 27/11/25", "sUSDe 05/02/26", "reUSD 25/06/26", "wstETH 25/06/26", "wstUSR 29/01/26"];
export type PENDLE_POOL_KEYS = (typeof PENDLE_POOL_KEYS)[number];
export declare const PendlePools: {
    [key in PENDLE_POOL_KEYS]: {
        MARKET: string;
        PT: string;
        SY: string;
        YT: string;
        UNDERLYING_IN: string[];
        UNDERLYING_OUT: string[];
    };
};
