/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Used to set the color reduction mode for a knitwear product
 */
export type KnitwearColorReductionMode = {
    /**
     * Option identifier
     */
    name: KnitwearColorReductionMode.name;
    /**
     * Option value
     */
    value: KnitwearColorReductionMode.value;
};
export namespace KnitwearColorReductionMode {
    /**
     * Option identifier
     */
    export enum name {
        COLOR_REDUCTION_MODE = 'color_reduction_mode',
    }
    /**
     * Option value
     */
    export enum value {
        SOLID = 'solid',
        PIXELATED = 'pixelated',
    }
}

