import { LiquidLockerStruct } from "./stakeDao";
export type CvxAssetStruct = {
    name: string;
    address: string;
    referenceAsset: string;
    referenceIndex: number;
    pool: string;
    type: number;
};
export declare const cvxAssets_LP_ARRAY: LiquidLockerStruct[];
