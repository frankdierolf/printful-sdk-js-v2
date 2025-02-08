/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemWithoutPlacementsReadonly } from './ItemWithoutPlacementsReadonly';
export type WarehouseItemReadonly = ({
    /**
     * Warehouse source
     */
    source: WarehouseItemReadonly.source;
    /**
     * ID of warehouse variant
     */
    warehouse_product_variant_id: number;
} & ItemWithoutPlacementsReadonly);
export namespace WarehouseItemReadonly {
    /**
     * Warehouse source
     */
    export enum source {
        WAREHOUSE = 'warehouse',
    }
}

