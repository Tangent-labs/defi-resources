type ConvexFxnPool = {
    lpToken: string;
    pid: number;
};
declare const ConvexFxnPoolKeys: readonly ["USDC_fxUSD"];
type ConvexFxnPoolKeys = (typeof ConvexFxnPoolKeys)[number];
export declare const ConvexFxnPools: {
    [key in ConvexFxnPoolKeys]: ConvexFxnPool;
};
export {};
