/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Sales and costs summary report
 */
export type SalesAndCostsSummary = Array<{
    /**
     * The date of the value: day in `Y-m-d` format, month in `Y-m` format or "Total" for the first element of the list which shows the total values for the whole requested period
     */
    date?: string;
    /**
     * The order count in the aggregation period
     */
    order_count?: number;
    /**
     * Product fulfillment, digitization, branding, shipping costs and taxes that are charged by Printful
     */
    costs?: string;
    /**
     * The difference between Sales and Fulfillment. If retail price data is not available, profit might be negative
     */
    profit?: string;
}>;
