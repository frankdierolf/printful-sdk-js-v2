/**
 * API Documentation v2 | Printful
 * # About the Printful API  <div class=\"alert alert-info\">     <h3>Welcome to API v2 BETA</h3>      <ul>         <li>            We’re excited to inform you that the new major version of our API just went live, and we want to invite you to participate in the Open Beta test.              Please keep in mind that this release is still in BETA, although all presented endpoints can be used in a production environment.              Since this is a BETA release, we are keen on adopting any changes to our API (which we encourage you to pass via <a href=\"https://forms.gle/Yq4t1poQQR8Mwoyt5\">this feedback form</a>).             We do not expect to introduce any breaking changes to the current form of endpoints, although the final form of each endpoint might slightly vary from the current version.         </li>     </ul> </div> <br>  * **What is the plan for the new endpoints V2s.**  * **How to use new endpoints?**     Create or use an already created private token for authorization.      Unless it\'s stated otherwise, the v2 version of Printful API may be used like the v1 version.     All v2 endpoints use **_/v2** prefix and the specifics of each endpoint are explained in a dedicated section.     * **Test and provide feedback:** Explore the new features, experiment with the enhancements, and share your feedback through our dedicated [feedback form](https://forms.gle/Yq4t1poQQR8Mwoyt5).  ### What is new in the V2s  - The flexibility of order creation with itemized order building [(read more)](#tag/Orders-v2). - Simplifying embroidery orders: auto thread color detection as default, simplified thread colors definition on the layer level. - New, powerful design creation with multiple design layers support and positioning for order items and sync variants [(read more)](#tag/Orders-v2). - New, more secure Webhooks by enforcing HTTPS, added expiration date, and request signing. - More flexibility in webhook per event configuration.  - New webhook events – a new event for catalog price change, and the stock update event is now real-time with a refresh rate every 5 minutes (previously every 24h). - More information in the Catalog about the products (images, discounted pricing, placement information). - More flexibility in the catalog (extensive filtering and sorting options, DSR support, pagination). - More information on the order shipment level – more precise EDT, departure country, and shipment tracking events. - Standardization of returned time in API – standardized format according to ISO 8601, UTC time zone. - Standardization of returned price formats in API. Prices are displayed as a string with up to 2 decimal points. - Uniform pagination parameters across all endpoints. - Performance improvements for all endpoints.
 *
 * The version of the OpenAPI document: 2.0.0-beta
 * Contact: devsupport@printful.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { CalculationStatus } from './calculationStatus';

/**
* The Order costs (Printful prices)
*/
export class Costs {
    'calculationStatus'?: CalculationStatus;
    /**
    * The code of the currency in which the costs are returned.
    */
    'currency'?: string | null;
    /**
    * Total cost of all items.
    */
    'subtotal'?: string | null;
    /**
    * Discount sum.
    */
    'discount'?: string | null;
    /**
    * Shipping costs.
    */
    'shipping'?: string | null;
    /**
    * Digitization costs.
    */
    'digitization'?: string | null;
    /**
    * Additional fee for custom product.
    */
    'additionalFee'?: string | null;
    /**
    * Custom product fulfillment fee.
    */
    'fulfillmentFee'?: string | null;
    /**
    * Retail delivery fee.
    */
    'retailDeliveryFee'?: string | null;
    /**
    * Sum of vat (not included in the item price).
    */
    'vat'?: string | null;
    /**
    * Sum of taxes (not included in the item price).
    */
    'tax'?: string | null;
    /**
    * Grand Total (subtotal-discount+tax+vat+shipping).
    */
    'total'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "calculationStatus",
            "baseName": "calculation_status",
            "type": "CalculationStatus"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "subtotal",
            "baseName": "subtotal",
            "type": "string"
        },
        {
            "name": "discount",
            "baseName": "discount",
            "type": "string"
        },
        {
            "name": "shipping",
            "baseName": "shipping",
            "type": "string"
        },
        {
            "name": "digitization",
            "baseName": "digitization",
            "type": "string"
        },
        {
            "name": "additionalFee",
            "baseName": "additional_fee",
            "type": "string"
        },
        {
            "name": "fulfillmentFee",
            "baseName": "fulfillment_fee",
            "type": "string"
        },
        {
            "name": "retailDeliveryFee",
            "baseName": "retail_delivery_fee",
            "type": "string"
        },
        {
            "name": "vat",
            "baseName": "vat",
            "type": "string"
        },
        {
            "name": "tax",
            "baseName": "tax",
            "type": "string"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Costs.attributeTypeMap;
    }
}

export namespace Costs {
}
