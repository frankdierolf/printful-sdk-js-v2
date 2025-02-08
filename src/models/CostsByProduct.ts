/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Costs by product report
 */
export type CostsByProduct = Array<{
    /**
     * Product ID. See [Catalog API](#tag/Catalog-API).
     */
    product_id: number;
    /**
     * Product name.
     */
    product_name: string;
    /**
     * All fulfillment costs that are charged by Printful, excluding shipping.
     */
    fulfillment: string;
    /**
     * Order retail price data. Available only if retail price fields are properly set up on the integration's side.
     */
    sales: string;
    /**
     * Total quantity of items ordered from this product in the selected period.
     */
    quantity: number;
}>;
