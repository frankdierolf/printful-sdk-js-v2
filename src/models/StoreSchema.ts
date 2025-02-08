/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Information about the Store
 */
export type StoreSchema = {
    /**
     * Store ID
     */
    id: number;
    /**
     * The type of the store is a reference to the type of integration used, Shopify, Etsy, etc. If no first party integration is used, the type will be `native`.
     */
    type: string;
    /**
     * The name given to the store, chosen by the user.
     */
    name: string;
};

