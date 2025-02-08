/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KnitwearOptionValue } from './KnitwearOptionValue';
/**
 * Used to specify the yarn colors for the whole product. These are the colors that will be used across the whole product.
 */
export type KnitwearYarnColor = {
    /**
     * Option identifier
     */
    name: KnitwearYarnColor.name;
    /**
     * Option value
     */
    value: Array<KnitwearOptionValue>;
};
export namespace KnitwearYarnColor {
    /**
     * Option identifier
     */
    export enum name {
        YARN_COLORS = 'yarn_colors',
    }
}

