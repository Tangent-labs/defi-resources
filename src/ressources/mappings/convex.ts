import { CRV, CVX, FXN, FXS } from "../erc20/common";
import { cvgCVX, cvxCRV, cvxFXN, cvxFXS } from "../erc20/convex";
import { CURVE_LPS } from "../protocols/curve/curveLP";
import { CURVE_TYPE, LiquidLockerStruct } from "./stakeDao";

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
        pool: CURVE_LPS.DUO_cvgCVX_CVX1,
        type: CURVE_TYPE,
    },
    {
        name: "cvxCRV",
        address: cvxCRV,
        referenceAsset: CRV,
        referenceIndex: 0,
        pool: CURVE_LPS.DUO_cvxCRV_CRV,
        type: CURVE_TYPE,
    },
    {
        name: "cvxFXS",
        address: cvxFXS,
        referenceAsset: FXS,
        referenceIndex: 0,
        pool: CURVE_LPS.DUO_cvxFXS_FXS,
        type: CURVE_TYPE,
    },
    {
        name: "cvxFXN",
        address: cvxFXN,
        referenceAsset: FXN,
        referenceIndex: 0,
        pool: CURVE_LPS.DUO_cvxFXN_FXN,
        type: CURVE_TYPE,
    },
];
