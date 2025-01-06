import {CRV, CVX, FXN, FXS, PRISMA} from "../erc20/common";
import {cvgCVX, cvxCRV, cvxFXN, cvxFXS} from "../erc20/convex";
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
        address: cvxCRV,
        referenceAsset: CRV,
        referenceIndex: 0,
        pool: CRV_DUO_cvxCRV_CRV,
        type: CURVE_TYPE,
    },
    {
        name: "cvxFXS",
        address: cvxFXS,
        referenceAsset: FXS,
        referenceIndex: 0,
        pool: CRV_DUO_cvxFXS_FXS,
        type: CURVE_TYPE,
    },
    {
        name: "cvxFXN",
        address: cvxFXN,
        referenceAsset: FXN,
        referenceIndex: 0,
        pool: CRV_DUO_cvxFXN_FXN,
        type: CURVE_TYPE,
    },
];
