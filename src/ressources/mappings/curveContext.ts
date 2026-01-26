import { CURVE_GAUGES } from "../protocols/curve/curveGauges";
import { LLAMA_LEND_sDOLA_crvUSD_GAUGE, LLAMA_LEND_sDOLA_crvUSD_VAULT } from "../erc20/llamalend";
import {
    SDT_crvUSD_frxUSD_VAULT,
    SDT_crvUSD_USDC_VAULT,
    SDT_crvUSD_USDT_VAULT,
    SDT_DOLA_sUSDS_VAULT,
    SDT_ETHPlus_WETH_VAULT,
    SDT_frxUSD_msUSD_VAULT,
    SDT_GHO_crvUSD_VAULT,
    SDT_LLAMA_sDOLA_crvUSD_VAULT,
    SDT_msETH_OETH_VAULT,
    SDT_reUSD_sfrxUSD_VAULT,
    SDT_tBTC_cbBTC_VAULT,
} from "../erc20/stakeDao";
import { CURVE_LPS } from "../protocols/curve/curveLP";
import { ConvexCrvPools } from "../protocols/convex/convexCrv";

export const CURVE_CONTEXT = {
    USDC_crvUSD: {
        curveLp: CURVE_LPS.DUO_USDC_crvUSD,
        curveGauge: CURVE_GAUGES.crvUSD_USDC,
        stakeDaoVault: SDT_crvUSD_USDC_VAULT,
        convexRewardToken: ConvexCrvPools.USDC_crvUSD.cvxRewardToken,
        convexPID: ConvexCrvPools.USDC_crvUSD.pid,
    },
    USDT_crvUSD: {
        curveLp: CURVE_LPS.DUO_USDT_crvUSD,
        curveGauge: CURVE_GAUGES.crvUSD_USDT,
        stakeDaoVault: SDT_crvUSD_USDT_VAULT,
        convexRewardToken: ConvexCrvPools.USDT_crvUSD.cvxRewardToken,
        convexPID: ConvexCrvPools.USDT_crvUSD.pid,
    },
    frxUSD_crvUSD: {
        curveLp: CURVE_LPS.DUO_crvUSD_frxUSD,
        curveGauge: CURVE_GAUGES.crvUSD_frxUSD,
        stakeDaoVault: SDT_crvUSD_frxUSD_VAULT,
        convexRewardToken: ConvexCrvPools.crvUSD_frxUSD.cvxRewardToken,
        convexPID: ConvexCrvPools.crvUSD_frxUSD.pid,
    },
    LLAMALEND_sDOLA_crvUSD: {
        curveLp: LLAMA_LEND_sDOLA_crvUSD_VAULT,
        curveGauge: LLAMA_LEND_sDOLA_crvUSD_GAUGE,
        stakeDaoVault: SDT_LLAMA_sDOLA_crvUSD_VAULT,
        convexRewardToken: ConvexCrvPools.LLAMALEND_sDOLA_crvUSD.cvxRewardToken,
        convexPID: ConvexCrvPools.LLAMALEND_sDOLA_crvUSD.pid,
    },
    DOLA_sUSDS: {
        curveLp: CURVE_LPS.DUO_DOLA_sUSDS,
        curveGauge: CURVE_GAUGES.DOLA_sUSDS,
        stakeDaoVault: SDT_DOLA_sUSDS_VAULT,
        convexRewardToken: ConvexCrvPools.DOLA_sUSDS.cvxRewardToken,
        convexPID: ConvexCrvPools.DOLA_sUSDS.pid,
    },
    GHO_crvUSD: {
        curveLp: CURVE_LPS.DUO_GHO_crvUSD,
        curveGauge: CURVE_GAUGES.GHO_crvUSD,
        stakeDaoVault: SDT_GHO_crvUSD_VAULT,
        convexRewardToken: ConvexCrvPools.GHO_crvUSD.cvxRewardToken,
        convexPID: ConvexCrvPools.GHO_crvUSD.pid,
    },
    reUSD_sfrxUSD: {
        curveLp: CURVE_LPS.DUO_reUSD_sfrxUSD,
        curveGauge: CURVE_GAUGES.reUSD_sfrxUSD,
        stakeDaoVault: SDT_reUSD_sfrxUSD_VAULT,
        convexRewardToken: ConvexCrvPools.reUSD_sfrxUSD.cvxRewardToken,
        convexPID: ConvexCrvPools.reUSD_sfrxUSD.pid,
    },
    stUSDS_USDS: {
        curveLp: CURVE_LPS.DUO_stUSDS_USDS,
        curveGauge: CURVE_GAUGES.stUSDS_USDS,
        stakeDaoVault: "",
        convexRewardToken: "",
        convexPID: NaN,
    },
    frxUSD_msUSD: {
        curveLp: CURVE_LPS.DUO_frxUSD_msUSD,
        curveGauge: CURVE_GAUGES.frxUSD_msUSD,
        stakeDaoVault: SDT_frxUSD_msUSD_VAULT,
        convexRewardToken: ConvexCrvPools.frxUSD_msUSD.cvxRewardToken,
        convexPID: ConvexCrvPools.frxUSD_msUSD.pid,
    },
    ETHPlus_WETH: {
        curveLp: CURVE_LPS.DUO_ETHplus_WETH,
        curveGauge: CURVE_GAUGES.ETHPlus_WETH,
        stakeDaoVault: SDT_ETHPlus_WETH_VAULT,
        convexRewardToken: ConvexCrvPools.ETHPlus_WETH.cvxRewardToken,
        convexPID: ConvexCrvPools.ETHPlus_WETH.pid,
    },

    tBTC_cbBTC: {
        curveLp: CURVE_LPS.DUO_tBTC_cbBTC,
        curveGauge: CURVE_GAUGES.tBTC_cbBTC,
        stakeDaoVault: SDT_tBTC_cbBTC_VAULT,
        convexRewardToken: ConvexCrvPools.tBTC_cbBTC.cvxRewardToken,
        convexPID: ConvexCrvPools.tBTC_cbBTC.pid,
    },
    msETH_OETH: {
        curveLp: CURVE_LPS.DUO_msETH_OETH,
        curveGauge: CURVE_GAUGES.msETH_OETH,
        stakeDaoVault: SDT_msETH_OETH_VAULT,
        convexRewardToken: ConvexCrvPools.msETH_OETH.cvxRewardToken,
        convexPID: ConvexCrvPools.msETH_OETH.pid,
    },
};
