import {CRV_LP_USDC_fxUSD} from "../lps/curve";

type ConvexFxnPool = {
    lpToken: string;
    pid: number;
};

const ConvexFxnPoolKeys = ["USDC_fxUSD"] as const;
type ConvexFxnPoolKeys = (typeof ConvexFxnPoolKeys)[number];

export const ConvexFxnPools: {[key in ConvexFxnPoolKeys]: ConvexFxnPool} = {
    // STABLECOIN POOLS
    USDC_fxUSD: {
        lpToken: CRV_LP_USDC_fxUSD,
        pid: 32,
    },
};
