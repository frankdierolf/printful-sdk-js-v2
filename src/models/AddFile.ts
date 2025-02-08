/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Information about the added File
 */
export type AddFile = {
    /**
     * Role of the file
     */
    role?: AddFile.role;
    /**
     * Source URL where the file is to be downloaded from. The use of .ai, .psd, and .tiff files has been deprecated, if your application uses these file types or accepts these types from users you will need to add validation.
     */
    url: string;
    /**
     * If the filename is not provided, and something looking like a filename is present in the URL (e.g. "something.jpg"), it will be used.
     * Otherwise, it will default to `{file_id}.{file_extension}`, with file extension determined based on the media type of the file.
     *
     */
    filename?: string;
    /**
     * Show file in the Printfile Library
     */
    visible?: boolean;
};
export namespace AddFile {
    /**
     * Role of the file
     */
    export enum role {
        PRINTFILE = 'printfile',
        LABEL = 'label',
        PREVIEW = 'preview',
    }
}

