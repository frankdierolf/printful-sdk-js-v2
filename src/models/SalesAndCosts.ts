/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Sales and costs report
 */
export type SalesAndCosts = Array<{
    /**
     * The date of the value: day in `Y-m-d` format, month in `Y-m` format or "Total" for the first element of the list which shows the total values for the whole requested period
     */
    date: string;
    /**
     * Order retail price data. Available only if retail price fields are properly set up on the integration's side
     */
    sales: string;
    /**
     * Product fulfillment, digitization, branding, shipping costs and taxes that are charged by Printful
     */
    fulfillment: string;
    /**
     * The difference between Sales and Fulfillment. If retail price data is not available, profit might be negative
     */
    profit: string;
    /**
     * Any retail price discounts set up on the integration's side
     */
    sales_discount: string;
    /**
     * Any fulfillment discounts (such as the monthly discount) set up on Printful's side
     */
    fulfillment_discount: string;
    /**
     * The retail shipping price that was paid by the buyer
     */
    sales_shipping: string;
    /**
     * Shipping costs that were charged by Printful
     */
    fulfillment_shipping: string;
}>;
