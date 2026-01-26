"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CURVE_CONTEXT = void 0;
const curveGauges_1 = require("../protocols/curve/curveGauges");
const llamalend_1 = require("../erc20/llamalend");
const stakeDao_1 = require("../erc20/stakeDao");
const curveLP_1 = require("../protocols/curve/curveLP");
const convexCrv_1 = require("../protocols/convex/convexCrv");
exports.CURVE_CONTEXT = {
    USDC_crvUSD: {
        curveLp: curveLP_1.CURVE_LPS.DUO_USDC_crvUSD,
        curveGauge: curveGauges_1.CURVE_GAUGES.crvUSD_USDC,
        stakeDaoVault: stakeDao_1.SDT_crvUSD_USDC_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.USDC_crvUSD.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.USDC_crvUSD.pid,
    },
    USDT_crvUSD: {
        curveLp: curveLP_1.CURVE_LPS.DUO_USDT_crvUSD,
        curveGauge: curveGauges_1.CURVE_GAUGES.crvUSD_USDT,
        stakeDaoVault: stakeDao_1.SDT_crvUSD_USDT_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.USDT_crvUSD.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.USDT_crvUSD.pid,
    },
    frxUSD_crvUSD: {
        curveLp: curveLP_1.CURVE_LPS.DUO_crvUSD_frxUSD,
        curveGauge: curveGauges_1.CURVE_GAUGES.crvUSD_frxUSD,
        stakeDaoVault: stakeDao_1.SDT_crvUSD_frxUSD_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.crvUSD_frxUSD.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.crvUSD_frxUSD.pid,
    },
    LLAMALEND_sDOLA_crvUSD: {
        curveLp: llamalend_1.LLAMA_LEND_sDOLA_crvUSD_VAULT,
        curveGauge: llamalend_1.LLAMA_LEND_sDOLA_crvUSD_GAUGE,
        stakeDaoVault: stakeDao_1.SDT_LLAMA_sDOLA_crvUSD_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.LLAMALEND_sDOLA_crvUSD.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.LLAMALEND_sDOLA_crvUSD.pid,
    },
    DOLA_sUSDS: {
        curveLp: curveLP_1.CURVE_LPS.DUO_DOLA_sUSDS,
        curveGauge: curveGauges_1.CURVE_GAUGES.DOLA_sUSDS,
        stakeDaoVault: stakeDao_1.SDT_DOLA_sUSDS_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.DOLA_sUSDS.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.DOLA_sUSDS.pid,
    },
    GHO_crvUSD: {
        curveLp: curveLP_1.CURVE_LPS.DUO_GHO_crvUSD,
        curveGauge: curveGauges_1.CURVE_GAUGES.GHO_crvUSD,
        stakeDaoVault: stakeDao_1.SDT_GHO_crvUSD_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.GHO_crvUSD.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.GHO_crvUSD.pid,
    },
    reUSD_sfrxUSD: {
        curveLp: curveLP_1.CURVE_LPS.DUO_reUSD_sfrxUSD,
        curveGauge: curveGauges_1.CURVE_GAUGES.reUSD_sfrxUSD,
        stakeDaoVault: stakeDao_1.SDT_reUSD_sfrxUSD_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.reUSD_sfrxUSD.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.reUSD_sfrxUSD.pid,
    },
    stUSDS_USDS: {
        curveLp: curveLP_1.CURVE_LPS.DUO_stUSDS_USDS,
        curveGauge: curveGauges_1.CURVE_GAUGES.stUSDS_USDS,
        stakeDaoVault: "",
        convexRewardToken: "",
        convexPID: NaN,
    },
    frxUSD_msUSD: {
        curveLp: curveLP_1.CURVE_LPS.DUO_frxUSD_msUSD,
        curveGauge: curveGauges_1.CURVE_GAUGES.frxUSD_msUSD,
        stakeDaoVault: stakeDao_1.SDT_frxUSD_msUSD_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.frxUSD_msUSD.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.frxUSD_msUSD.pid,
    },
    ETHPlus_WETH: {
        curveLp: curveLP_1.CURVE_LPS.DUO_ETHplus_WETH,
        curveGauge: curveGauges_1.CURVE_GAUGES.ETHPlus_WETH,
        stakeDaoVault: stakeDao_1.SDT_ETHPlus_WETH_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.ETHPlus_WETH.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.ETHPlus_WETH.pid,
    },
    tBTC_cbBTC: {
        curveLp: curveLP_1.CURVE_LPS.DUO_tBTC_cbBTC,
        curveGauge: curveGauges_1.CURVE_GAUGES.tBTC_cbBTC,
        stakeDaoVault: stakeDao_1.SDT_tBTC_cbBTC_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.tBTC_cbBTC.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.tBTC_cbBTC.pid,
    },
    msETH_OETH: {
        curveLp: curveLP_1.CURVE_LPS.DUO_msETH_OETH,
        curveGauge: curveGauges_1.CURVE_GAUGES.msETH_OETH,
        stakeDaoVault: stakeDao_1.SDT_msETH_OETH_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.msETH_OETH.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.msETH_OETH.pid,
    },
};
