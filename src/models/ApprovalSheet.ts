/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HateoasLink } from './HateoasLink';
/**
 * Approval sheet
 */
export type ApprovalSheet = {
    /**
     * Confirmation hash value.
     */
    confirm_hash: string;
    /**
     * Status of Approval Sheet.
     */
    status: ApprovalSheet.status;
    /**
     * URL to submitted design.
     */
    submitted_design: string;
    /**
     * URL to recommended design.
     */
    recommended_design: string;
    /**
     * URL to Approval sheet.
     */
    approval_sheet: string;
    /**
     * Order ID.
     */
    order_id: number;
    /**
     * Item ID.
     */
    order_item_id: number;
    /**
     * HATEOAS links
     */
    _links: {
        order: HateoasLink;
        order_item: HateoasLink;
    };
};
export namespace ApprovalSheet {
    /**
     * Status of Approval Sheet.
     */
    export enum status {
        WAITING_FOR_ACTION = 'waiting_for_action',
        APPROVAL_PENDING = 'approval_pending',
        APPROVED = 'approved',
        CHANGES_REQUESTED = 'changes_requested',
        FILES_CHANGED = 'files_changed',
    }
}

