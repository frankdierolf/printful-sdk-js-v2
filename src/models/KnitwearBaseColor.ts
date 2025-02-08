/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KnitwearOptionValue } from './KnitwearOptionValue';
/**
 * Used to specify the base color on a knitwear product.
 */
export type KnitwearBaseColor = {
    /**
     * Option identifier
     */
    name: KnitwearBaseColor.name;
    value: KnitwearOptionValue;
};
export namespace KnitwearBaseColor {
    /**
     * Option identifier
     */
    export enum name {
        BASE_COLOR = 'base_color',
    }
}

