/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KnitwearOptionValue } from './KnitwearOptionValue';
/**
 * Used to specify the color of the trim on a knitwear product.
 */
export type KnitwearTrimColor = {
    /**
     * Option identifier
     */
    name: KnitwearTrimColor.name;
    value: KnitwearOptionValue;
};
export namespace KnitwearTrimColor {
    /**
     * Option identifier
     */
    export enum name {
        TRIM_COLOR = 'trim_color',
    }
}

