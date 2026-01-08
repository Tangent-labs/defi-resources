type ConvexFxnPool = {
    lpToken: string;
    pid: number;
};
declare const ConvexFxnPoolKeys: readonly ["USDC_fxUSD", "GHO_fxUSD", "fxUSD_reUSD", "msUSD_fxUSD"];
type ConvexFxnPoolKeys = (typeof ConvexFxnPoolKeys)[number];
export declare const ConvexFxnPools: {
    [key in ConvexFxnPoolKeys]: ConvexFxnPool;
};
export {};
