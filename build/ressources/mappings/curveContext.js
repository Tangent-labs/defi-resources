"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CURVE_CONTEXT = void 0;
const stakeDao_1 = require("../erc20/stakeDao");
const curve_1 = require("../lps/curve");
const convexCrv_1 = require("../protocols/convexCrv");
exports.CURVE_CONTEXT = {
    USDC_crvUSD: {
        curveLp: curve_1.CRV_DUO_USDC_crvUSD,
        curveGauge: curve_1.CRV_GAUGE_USDC_crvUSD,
        stakeDaoVault: stakeDao_1.SDT_crvUSD_USDC_STRAT,
        stakeDaoGauge: stakeDao_1.SDT_crvUSD_USDC_GAUGE,
        convexRewardToken: convexCrv_1.ConvexCrvPools.USDC_crvUSD.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.USDC_crvUSD.pid,
    },
    USDT_crvUSD: {
        curveLp: curve_1.CRV_DUO_USDT_crvUSD,
        curveGauge: curve_1.CRV_GAUGE_USDT_crvUSD,
        stakeDaoVault: stakeDao_1.SDT_crvUSD_USDT_STRAT,
        stakeDaoGauge: stakeDao_1.SDT_crvUSD_USDT_GAUGE,
        convexRewardToken: convexCrv_1.ConvexCrvPools.USDT_crvUSD.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.USDT_crvUSD.pid,
    },
};
