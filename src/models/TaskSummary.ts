/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Costs } from './Costs';
import type { RetailCosts } from './RetailCosts';
/**
 * Order estimation task summary
 */
export type TaskSummary = {
    /**
     * Task ID
     */
    id: string;
    /**
     * Task status
     */
    status: TaskSummary.status;
    costs: (Costs & Record<string, any> | null);
    retail_costs: (RetailCosts & Record<string, any> | null);
    /**
     * Reasons why calculation failed.
     */
    failure_reasons: Array<string>;
};
export namespace TaskSummary {
    /**
     * Task status
     */
    export enum status {
        PENDING = 'pending',
        FAILED = 'failed',
        COMPLETED = 'completed',
    }
}

