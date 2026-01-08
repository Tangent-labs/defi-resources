import { CRV_GAUGE_ETHPlus_WETH, CRV_GAUGE_frxUSD_msUSD, CRV_GAUGE_GHO_crvUSD, CRV_GAUGE_msETH_OETH, CRV_GAUGE_reUSD_sfrxUSD, CRV_GAUGE_stUSDS_USDS, CRV_GAUGE_tBTC_cbBTC } from "../erc20/curveGauges";
import { LLAMA_LEND_sDOLA_crvUSD_GAUGE, LLAMA_LEND_sDOLA_crvUSD_VAULT } from "../erc20/llamalend";
import {
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
import { CRV_DUO_DOLA_sUSDS, CRV_DUO_ETHplus_WETH, CRV_DUO_frxUSD_msUSD, CRV_DUO_GHO_crvUSD, CRV_DUO_GHO_fxUSD, CRV_DUO_msETH_OETH, CRV_DUO_reUSD_sfrxUSD, CRV_DUO_stUSDS_USDS, CRV_DUO_tBTC_cbBTC, CRV_DUO_USDC_crvUSD, CRV_DUO_USDT_crvUSD, CRV_GAUGE_DOLA_sUSDS, CRV_GAUGE_USDC_crvUSD, CRV_GAUGE_USDT_crvUSD } from "../lps/curve";
import { ConvexCrvPools } from "../protocols/convexCrv";

export const CURVE_CONTEXT = {
    USDC_crvUSD: {
        curveLp: CRV_DUO_USDC_crvUSD,
        curveGauge: CRV_GAUGE_USDC_crvUSD,
        stakeDaoVault: SDT_crvUSD_USDC_VAULT,
        convexRewardToken: ConvexCrvPools.USDC_crvUSD.cvxRewardToken,
        convexPID: ConvexCrvPools.USDC_crvUSD.pid,
    },
    USDT_crvUSD: {
        curveLp: CRV_DUO_USDT_crvUSD,
        curveGauge: CRV_GAUGE_USDT_crvUSD,
        stakeDaoVault: SDT_crvUSD_USDT_VAULT,
        convexRewardToken: ConvexCrvPools.USDT_crvUSD.cvxRewardToken,
        convexPID: ConvexCrvPools.USDT_crvUSD.pid,
    },
    LLAMALEND_sDOLA_crvUSD: {
        curveLp: LLAMA_LEND_sDOLA_crvUSD_VAULT,
        curveGauge: LLAMA_LEND_sDOLA_crvUSD_GAUGE,
        stakeDaoVault: SDT_LLAMA_sDOLA_crvUSD_VAULT,
        convexRewardToken: ConvexCrvPools.LLAMALEND_sDOLA_crvUSD.cvxRewardToken,
        convexPID: ConvexCrvPools.LLAMALEND_sDOLA_crvUSD.pid,
    },
    DOLA_sUSDS: {
        curveLp: CRV_DUO_DOLA_sUSDS,
        curveGauge: CRV_GAUGE_DOLA_sUSDS,
        stakeDaoVault: SDT_DOLA_sUSDS_VAULT,
        convexRewardToken: ConvexCrvPools.DOLA_sUSDS.cvxRewardToken,
        convexPID: ConvexCrvPools.DOLA_sUSDS.pid,
    },
    GHO_crvUSD: {
        curveLp: CRV_DUO_GHO_crvUSD,
        curveGauge: CRV_GAUGE_GHO_crvUSD,
        stakeDaoVault: SDT_GHO_crvUSD_VAULT,
        convexRewardToken: ConvexCrvPools.GHO_crvUSD.cvxRewardToken,
        convexPID: ConvexCrvPools.GHO_crvUSD.pid,
    },
    reUSD_sfrxUSD: {
        curveLp: CRV_DUO_reUSD_sfrxUSD,
        curveGauge: CRV_GAUGE_reUSD_sfrxUSD,
        stakeDaoVault: SDT_reUSD_sfrxUSD_VAULT,
        convexRewardToken: ConvexCrvPools.reUSD_sfrxUSD.cvxRewardToken,
        convexPID: ConvexCrvPools.reUSD_sfrxUSD.pid,
    },
    stUSDS_USDS: {
        curveLp: CRV_DUO_stUSDS_USDS,
        curveGauge: CRV_GAUGE_stUSDS_USDS,
        stakeDaoVault: "",
        convexRewardToken: "",
        convexPID: NaN,
    },
    frxUSD_msUSD: {
        curveLp: CRV_DUO_frxUSD_msUSD,
        curveGauge: CRV_GAUGE_frxUSD_msUSD,
        stakeDaoVault: SDT_frxUSD_msUSD_VAULT,
        convexRewardToken: ConvexCrvPools.frxUSD_msUSD.cvxRewardToken,
        convexPID: ConvexCrvPools.frxUSD_msUSD.pid,
    },

    ETHPlus_WETH: {
        curveLp: CRV_DUO_ETHplus_WETH,
        curveGauge: CRV_GAUGE_ETHPlus_WETH,
        stakeDaoVault: SDT_ETHPlus_WETH_VAULT,
        convexRewardToken: ConvexCrvPools.ETHPlus_WETH.cvxRewardToken,
        convexPID: ConvexCrvPools.ETHPlus_WETH.pid,
    },

    tBTC_cbBTC: {
        curveLp: CRV_DUO_tBTC_cbBTC,
        curveGauge: CRV_GAUGE_tBTC_cbBTC,
        stakeDaoVault: SDT_tBTC_cbBTC_VAULT,
        convexRewardToken: ConvexCrvPools.tBTC_cbBTC.cvxRewardToken,
        convexPID: ConvexCrvPools.tBTC_cbBTC.pid,
    },
    msETH_OETH: {
        curveLp: CRV_DUO_msETH_OETH,
        curveGauge: CRV_GAUGE_msETH_OETH,
        stakeDaoVault: SDT_msETH_OETH_VAULT,
        convexRewardToken: ConvexCrvPools.msETH_OETH.cvxRewardToken,
        convexPID: ConvexCrvPools.msETH_OETH.pid,
    },
};
