/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AverageFulfillmentTime } from './AverageFulfillmentTime';
import type { CostsByAmount } from './CostsByAmount';
import type { CostsByProduct } from './CostsByProduct';
import type { CostsByVariant } from './CostsByVariant';
import type { PrintfulCosts } from './PrintfulCosts';
import type { Profit } from './Profit';
import type { SalesAndCosts } from './SalesAndCosts';
import type { SalesAndCostsSummary } from './SalesAndCostsSummary';
import type { TotalPaidOrders } from './TotalPaidOrders';
/**
 * Statistics for a single store
 */
export type StoreStatistics = {
    /**
     * The ID of the store for which the statistics are returned
     */
    store_id: number;
    /**
     * The code of the currency in which the statistics are returned
     */
    currency: string;
    sales_and_costs?: SalesAndCosts;
    sales_and_costs_summary?: SalesAndCostsSummary;
    printful_costs?: PrintfulCosts;
    profit?: Profit;
    total_paid_orders?: TotalPaidOrders;
    costs_by_amount?: CostsByAmount;
    costs_by_product?: CostsByProduct;
    costs_by_variant?: CostsByVariant;
    average_fulfillment_time?: AverageFulfillmentTime;
};

