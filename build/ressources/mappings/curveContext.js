"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CURVE_CONTEXT = void 0;
const llamalend_1 = require("../erc20/llamalend");
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
    LLAMALEND_sDOLA_crvUSD: {
        curveLp: llamalend_1.LLAMA_LEND_sDOLA_crvUSD_VAULT,
        curveGauge: llamalend_1.LLAMA_LEND_sDOLA_crvUSD_GAUGE,
        stakeDaoVault: stakeDao_1.SDT_LLAMA_sDOLA_crvUSD_STRAT,
        stakeDaoGauge: stakeDao_1.SDT_LLAMA_sDOLA_crvUSD_GAUGE,
        convexRewardToken: convexCrv_1.ConvexCrvPools.LLAMALEND_sDOLA_crvUSD.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.LLAMALEND_sDOLA_crvUSD.pid,
    },
};
