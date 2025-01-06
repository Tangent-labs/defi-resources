export type LpTypeMap = Record<string, {
    type: string;
    stake_gauge: string;
    curve_gauge: string;
    curve_pool?: string;
}>;
export declare const TYPES_CURVE: string[];
export declare const LPS: LpTypeMap;
