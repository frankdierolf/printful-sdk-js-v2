/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemReadonly } from './ItemReadonly';
export type CatalogItemReadonly = ({
    /**
     * Catalog source
     */
    source: CatalogItemReadonly.source;
    /**
     * ID of catalog variant
     */
    catalog_variant_id: number;
} & ItemReadonly);
export namespace CatalogItemReadonly {
    /**
     * Catalog source
     */
    export enum source {
        CATALOG = 'catalog',
    }
}

