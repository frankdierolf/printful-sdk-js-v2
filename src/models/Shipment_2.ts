/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShipmentItem_2 } from './ShipmentItem_2';
/**
 * Basic info about the shipment.
 */
export type Shipment_2 = {
    /**
     * Two-letter code (ISO 3166-1 alpha-2) associated with the departure country.
     */
    departure_country: string | null;
    /**
     * List of items included in the shipment.
     */
    shipment_items: Array<ShipmentItem_2>;
    /**
     * Whether customs fees may be required for this shipment.
     */
    customs_fees_possible: boolean;
};

