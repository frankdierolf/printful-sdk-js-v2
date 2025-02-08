/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Costs by amount report
 */
export type CostsByAmount = Array<{
    /**
     * The date of the value: day in `Y-m-d` format, month in `Y-m` format or "Total" for the first element of the list which shows the total values for the whole requested period
     */
    date: string;
    /**
     * Product & fulfillment costs
     */
    product_amount: string;
    /**
     * Embroidery digitization costs
     */
    digitization: string;
    /**
     * Pack-in costs
     */
    branding: string;
    /**
     * Tax amounts. If not applicable, it will be 0.
     */
    vat: string;
    /**
     * Tax amounts. If not applicable, it will be 0.
     */
    sales_tax: string;
    /**
     * Shipping costs that were charged by Printful
     */
    shipping: string;
    /**
     * Any fulfillment discounts (such as the monthly discount) set up on Printful's side
     */
    discount: string;
    /**
     * Summary of all costs
     */
    total: string;
}>;
