import {CRV_LP_USDC_fxUSD} from "../lps/curve";

type ConvexFxnPool = {
    lpToken: string;
    pid: number;
};

export const ConvexFxnPools: {[key: string]: ConvexFxnPool} = {
    // STABLECOIN POOLS
    USDC_fxUSD: {
        lpToken: CRV_LP_USDC_fxUSD,
        pid: 32,
    },
};
