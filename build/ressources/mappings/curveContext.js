"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CURVE_CONTEXT = void 0;
const curveGauges_1 = require("../erc20/curveGauges");
const llamalend_1 = require("../erc20/llamalend");
const stakeDao_1 = require("../erc20/stakeDao");
const curve_1 = require("../lps/curve");
const convexCrv_1 = require("../protocols/convexCrv");
exports.CURVE_CONTEXT = {
    USDC_crvUSD: {
        curveLp: curve_1.CRV_DUO_USDC_crvUSD,
        curveGauge: curve_1.CRV_GAUGE_USDC_crvUSD,
        stakeDaoVault: stakeDao_1.SDT_crvUSD_USDC_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.USDC_crvUSD.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.USDC_crvUSD.pid,
    },
    USDT_crvUSD: {
        curveLp: curve_1.CRV_DUO_USDT_crvUSD,
        curveGauge: curve_1.CRV_GAUGE_USDT_crvUSD,
        stakeDaoVault: stakeDao_1.SDT_crvUSD_USDT_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.USDT_crvUSD.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.USDT_crvUSD.pid,
    },
    LLAMALEND_sDOLA_crvUSD: {
        curveLp: llamalend_1.LLAMA_LEND_sDOLA_crvUSD_VAULT,
        curveGauge: llamalend_1.LLAMA_LEND_sDOLA_crvUSD_GAUGE,
        stakeDaoVault: stakeDao_1.SDT_LLAMA_sDOLA_crvUSD_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.LLAMALEND_sDOLA_crvUSD.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.LLAMALEND_sDOLA_crvUSD.pid,
    },
    DOLA_sUSDS: {
        curveLp: curve_1.CRV_DUO_DOLA_sUSDS,
        curveGauge: curve_1.CRV_GAUGE_DOLA_sUSDS,
        stakeDaoVault: stakeDao_1.SDT_DOLA_sUSDS_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.DOLA_sUSDS.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.DOLA_sUSDS.pid,
    },
    GHO_crvUSD: {
        curveLp: curve_1.CRV_DUO_GHO_crvUSD,
        curveGauge: curveGauges_1.CRV_GAUGE_GHO_crvUSD,
        stakeDaoVault: stakeDao_1.SDT_GHO_crvUSD_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.GHO_crvUSD.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.GHO_crvUSD.pid,
    },
    reUSD_sfrxUSD: {
        curveLp: curve_1.CRV_DUO_reUSD_sfrxUSD,
        curveGauge: curveGauges_1.CRV_GAUGE_reUSD_sfrxUSD,
        stakeDaoVault: stakeDao_1.SDT_reUSD_sfrxUSD_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.reUSD_sfrxUSD.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.reUSD_sfrxUSD.pid,
    },
    stUSDS_USDS: {
        curveLp: curve_1.CRV_DUO_stUSDS_USDS,
        curveGauge: curveGauges_1.CRV_GAUGE_stUSDS_USDS,
        stakeDaoVault: "",
        convexRewardToken: "",
        convexPID: NaN,
    },
    frxUSD_msUSD: {
        curveLp: curve_1.CRV_DUO_frxUSD_msUSD,
        curveGauge: curveGauges_1.CRV_GAUGE_frxUSD_msUSD,
        stakeDaoVault: stakeDao_1.SDT_frxUSD_msUSD_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.frxUSD_msUSD.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.frxUSD_msUSD.pid,
    },
    ETHPlus_WETH: {
        curveLp: curve_1.CRV_DUO_ETHplus_WETH,
        curveGauge: curveGauges_1.CRV_GAUGE_ETHPlus_WETH,
        stakeDaoVault: stakeDao_1.SDT_ETHPlus_WETH_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.ETHPlus_WETH.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.ETHPlus_WETH.pid,
    },
    tBTC_cbBTC: {
        curveLp: curve_1.CRV_DUO_tBTC_cbBTC,
        curveGauge: curveGauges_1.CRV_GAUGE_tBTC_cbBTC,
        stakeDaoVault: stakeDao_1.SDT_tBTC_cbBTC_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.tBTC_cbBTC.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.tBTC_cbBTC.pid,
    },
    msETH_OETH: {
        curveLp: curve_1.CRV_DUO_msETH_OETH,
        curveGauge: curveGauges_1.CRV_GAUGE_msETH_OETH,
        stakeDaoVault: stakeDao_1.SDT_msETH_OETH_VAULT,
        convexRewardToken: convexCrv_1.ConvexCrvPools.msETH_OETH.cvxRewardToken,
        convexPID: convexCrv_1.ConvexCrvPools.msETH_OETH.pid,
    },
};
