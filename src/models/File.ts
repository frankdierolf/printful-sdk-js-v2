/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HateoasLink } from './HateoasLink';
/**
 * Information about the File
 */
export type File = {
    /**
     * File ID
     */
    readonly id: number;
    /**
     * Source URL where the file was downloaded from.
     */
    url: string;
    /**
     * MD5 checksum of the file
     */
    readonly hash: string | null;
    /**
     * File name
     */
    filename: string | null;
    /**
     * MIME type of the file
     */
    readonly mime_type: string | null;
    /**
     * Size in bytes
     */
    readonly size: number;
    /**
     * Width in pixels
     */
    readonly width: number | null;
    /**
     * Height in pixels
     */
    readonly height: number | null;
    /**
     * Resolution DPI.<br>**Note:** for vector files this may be indicated as only 72dpi, but it doesn't affect print quality since the vector files are resolution independent.
     */
    readonly dpi: number | null;
    /**
     * File processing status
     */
    readonly status: File.status;
    /**
     * File creation date
     */
    created: string;
    /**
     * Small thumbnail URL
     */
    readonly thumbnail_url: string | null;
    /**
     * Medium preview image URL
     */
    readonly preview_url: string | null;
    /**
     * Whether the file is shown in the Printfile Library.
     */
    visible: boolean;
    /**
     * Whether it is a temporary printfile.
     */
    readonly is_temporary: boolean;
    /**
     * HATEOAS links
     */
    readonly _links: {
        /**
         * Link to same resource
         */
        self: HateoasLink;
    };
};
export namespace File {
    /**
     * File processing status
     */
    export enum status {
        WAITING = 'waiting',
        OK = 'ok',
        FAILED = 'failed',
        DELETED = 'deleted',
    }
}

