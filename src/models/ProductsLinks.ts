/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HateoasLink } from './HateoasLink';
/**
 * HATEOAS links
 */
export type ProductsLinks = {
    /**
     * Link to same resource
     */
    self: HateoasLink;
    /**
     * Link to next resource
     */
    next?: HateoasLink;
    /**
     * Link to first resource
     */
    first?: HateoasLink;
    /**
     * Link to the last resource
     */
    last?: HateoasLink;
};

