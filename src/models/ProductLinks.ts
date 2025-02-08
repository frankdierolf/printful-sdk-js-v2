/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HateoasLink } from './HateoasLink';
/**
 * HATEOAS links
 */
export type ProductLinks = {
    /**
     * Link to same resource
     */
    self: HateoasLink;
    /**
     * Link to product variants
     */
    variants: HateoasLink;
    /**
     * Link to product categories
     */
    categories: HateoasLink;
    /**
     * Link to product prices
     */
    product_prices: HateoasLink;
    /**
     * Link product size guides
     */
    product_sizes: HateoasLink;
    /**
     * Link product images
     */
    product_images: HateoasLink;
    /**
     * Link to product stock availability endpoint
     */
    availability: HateoasLink;
};

