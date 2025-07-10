import {SDT_crvUSD_USDC_GAUGE, SDT_crvUSD_USDC_STRAT, SDT_crvUSD_USDT_GAUGE, SDT_crvUSD_USDT_STRAT} from "../erc20/stakeDao";
import {CRV_DUO_USDC_crvUSD, CRV_DUO_USDT_crvUSD, CRV_GAUGE_USDC_crvUSD, CRV_GAUGE_USDT_crvUSD} from "../lps/curve";
import {ConvexCrvPools} from "../protocols/convexCrv";

export const CURVE_CONTEXT = {
    USDC_crvUSD: {
        curveLp: CRV_DUO_USDC_crvUSD,
        curveGauge: CRV_GAUGE_USDC_crvUSD,
        stakeDaoVault: SDT_crvUSD_USDC_STRAT,
        stakeDaoGauge: SDT_crvUSD_USDC_GAUGE,
        convexRewardToken: ConvexCrvPools.USDC_crvUSD.cvxRewardToken,
        convexPID: ConvexCrvPools.USDC_crvUSD.pid,
    },

    USDT_crvUSD: {
        curveLp: CRV_DUO_USDT_crvUSD,
        curveGauge: CRV_GAUGE_USDT_crvUSD,
        stakeDaoVault: SDT_crvUSD_USDT_STRAT,
        stakeDaoGauge: SDT_crvUSD_USDT_GAUGE,
        convexRewardToken: ConvexCrvPools.USDT_crvUSD.cvxRewardToken,
        convexPID: ConvexCrvPools.USDT_crvUSD.pid,
    },
};
