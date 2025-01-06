export declare const SD_TOKENS_LIST: string[];
export declare const REWARDS_TOKEN_SD_ASSETS: {
    [sdGaugeAsset: string]: string[];
};
export declare const CURVE_TYPE = 1;
export declare const BALANCER_TYPE = 2;
export declare const SDASSETS: LiquidLockerStruct[];
export declare const SPECIAL_LP_TOKENS: {
    [curveGaugeAddress: string]: string[];
};
export interface LiquidLockerStruct {
    name: string;
    address: string;
    referenceAsset: string;
    referenceIndex: number;
    pool: string;
    type: number;
    gauge?: string;
    referencePool?: null | string;
    idReferencePool?: null | string;
}
