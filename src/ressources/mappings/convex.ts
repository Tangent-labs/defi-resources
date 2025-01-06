import {CRV, CVX, FXN, FXS, PRISMA} from "../erc20/common";
import {CVX_CRV, CVX_FXN, CVX_FXS, CVX_PRISMA, cvgCVX} from "../erc20/convex";
import {CRV_DUO_cvgCVX_CVX1, CRV_DUO_cvxCRV_CRV, CRV_DUO_cvxFXN_FXN, CRV_DUO_cvxFXS_FXS, CRV_DUO_cvxPRISMA_PRISMA} from "../lps/curve";
import {CURVE_TYPE, LiquidLockerStruct} from "./stakeDao";

export type CvxAssetStruct = {
    name: string;
    address: string;
    referenceAsset: string;
    referenceIndex: number;
    pool: string;
    type: number;
};
export const cvxAssets_LP_ARRAY: LiquidLockerStruct[] = [
    {
        name: "cvgCVX",
        address: cvgCVX,
        referenceAsset: CVX,
        referenceIndex: 0,
        pool: CRV_DUO_cvgCVX_CVX1,
        type: CURVE_TYPE,
    },
    {
        name: "cvxCRV",
        address: CVX_CRV,
        referenceAsset: CRV,
        referenceIndex: 0,
        pool: CRV_DUO_cvxCRV_CRV,
        type: CURVE_TYPE,
    },
    {
        name: "cvxFXS",
        address: CVX_FXS,
        referenceAsset: FXS,
        referenceIndex: 0,
        pool: CRV_DUO_cvxFXS_FXS,
        type: CURVE_TYPE,
    },
    {
        name: "cvxFXN",
        address: CVX_FXN,
        referenceAsset: FXN,
        referenceIndex: 0,
        pool: CRV_DUO_cvxFXN_FXN,
        type: CURVE_TYPE,
    },
    {
        name: "cvxPRISMA",
        address: CVX_PRISMA,
        referenceAsset: PRISMA,
        referenceIndex: 0,
        pool: CRV_DUO_cvxPRISMA_PRISMA,
        type: CURVE_TYPE,
    },
];
