import { CRV_DUO_fxUSD_reUSD, CRV_DUO_GHO_fxUSD, CRV_DUO_msUSD_fxUSD, CRV_LP_USDC_fxUSD } from "../lps/curve";

type ConvexFxnPool = {
    lpToken: string;
    pid: number;
};

const ConvexFxnPoolKeys = ["USDC_fxUSD", "GHO_fxUSD", "fxUSD_reUSD", "msUSD_fxUSD"] as const;
type ConvexFxnPoolKeys = (typeof ConvexFxnPoolKeys)[number];

export const ConvexFxnPools: { [key in ConvexFxnPoolKeys]: ConvexFxnPool } = {
    // STABLECOIN POOLS
    USDC_fxUSD: {
        lpToken: CRV_LP_USDC_fxUSD,
        pid: 32,
    },
    GHO_fxUSD: {
        lpToken: CRV_DUO_GHO_fxUSD,
        pid: 14,
    },
    fxUSD_reUSD: {
        lpToken: CRV_DUO_fxUSD_reUSD,
        pid: 38,
    },
    msUSD_fxUSD: {
        lpToken: CRV_DUO_msUSD_fxUSD,
        pid: 41,
    },
};
