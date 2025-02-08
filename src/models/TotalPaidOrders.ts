/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Total paid orders report
 */
export type TotalPaidOrders = {
    /**
     * Number of unique orders for period
     */
    value: number;
    /**
     * Relative difference from the value from the previous period. -1 means 100% decrease, 1 means 100% increase. 0 is returned if there is no change or the previous value was 0.
     */
    relative_difference: string | null;
};

